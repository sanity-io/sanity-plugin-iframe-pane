import {WarningOutlineIcon} from '@sanity/icons'
import {createPreviewSecret} from '@sanity/preview-url-secret/create-secret'
import {definePreviewUrl} from '@sanity/preview-url-secret/define-preview-url'
import {Box, Card, Container, Flex, Spinner, Stack, Text, usePrefersReducedMotion} from '@sanity/ui'
import {AnimatePresence, motion, MotionConfig} from 'framer-motion'
import React, {
  forwardRef,
  memo,
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
  useTransition,
} from 'react'
import {HTMLAttributeReferrerPolicy} from 'react'
import {SanityDocument, useClient, useCurrentUser} from 'sanity'
import {suspend} from 'suspend-react'

import {DEFAULT_SIZE, sizes, Toolbar} from './Toolbar'
import {IframeSizeKey} from './types'

export type UrlResolver = (
  document: SanityDocument | null,
) => string | Error | undefined | Promise<string | Error | undefined>

export type {IframeSizeKey}

export interface IframeOptions {
  /**
   * If you have multiple iframe instances side-by-side you need to give each a unique key.
   */
  key?: string
  url:
    | string
    | UrlResolver
    | {
        /**
         * The URL origin of where the preview is hosted, for example `https://example.com`.
         * If it's an embedded Studio then set it to `'same-origin'`.
         */
        origin: 'same-origin' | string
        /**
         * The route to redirect to after enabling Draft Mode.
         * If you don't have enough data to build the URL, return an `Error` instance to show an error message.
         * @example `return new Error('Missing slug')`
         * To prolong the loading state, return `undefined`
         */
        preview: string | UrlResolver
        /**
         * The route that enables Draft Mode
         * @example '/api/draft'
         */
        draftMode: string
      }
  defaultSize?: IframeSizeKey
  showDisplayUrl?: boolean
  reload?: {
    button?: boolean
  }
  attributes?: Partial<{
    allow: string
    referrerPolicy: HTMLAttributeReferrerPolicy | undefined
    sandbox: string
    onLoad: () => void
  }>
}

const MotionFlex = motion(Flex)

export interface IframeProps {
  document: {
    draft: SanityDocument | null
    published: SanityDocument | null
  }
  options: IframeOptions
}

export function Iframe(props: IframeProps) {
  const {
    document: {published, draft = published},
    options,
  } = props
  const {defaultSize = DEFAULT_SIZE, reload, attributes, showDisplayUrl = true, key} = options

  const urlRef = useRef(options.url)
  const [draftSnapshot, setDraftSnapshot] = useState(() => ({key, draft}))
  useEffect(() => {
    urlRef.current = options.url
  }, [options.url])
  useEffect(() => {
    if (JSON.stringify({key, draft}) !== JSON.stringify(draftSnapshot)) {
      startTransition(() => setDraftSnapshot({key, draft}))
    }
  }, [draft, draftSnapshot, key])
  const currentUser = useCurrentUser()
  const client = useClient({apiVersion: '2023-10-16'})
  const [expiresAt, setExpiresAt] = useState<number | undefined>()
  const previewSecretRef = useRef<string | undefined>()
  const [isResolvingUrl, startTransition] = useTransition()
  const url = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-shadow
    async (draft: SanityDocument | null) => {
      if (typeof location === 'undefined') {
        return undefined
      }
      const urlProp = urlRef.current
      if (typeof urlProp === 'string') {
        return new URL(urlProp, location.origin)
      }
      if (typeof urlProp === 'function') {
        // eslint-disable-next-line @typescript-eslint/no-shadow
        const url = await urlProp(draft)
        return typeof url === 'string' ? new URL(url, location.origin) : url
      }
      if (typeof urlProp === 'object') {
        const preview =
          typeof urlProp.preview === 'function' ? await urlProp.preview(draft) : urlProp.preview
        if (typeof preview !== 'string') {
          return preview
        }
        if (!previewSecretRef.current) {
          // eslint-disable-next-line @typescript-eslint/no-shadow
          const {secret, expiresAt} = await createPreviewSecret(
            client,
            'sanity-plugin-iframe-pane',
            location.href,
            currentUser?.id,
          )
          previewSecretRef.current = secret
          startTransition(() => setExpiresAt(expiresAt.getTime()))
        }

        const resolvePreviewUrl = definePreviewUrl({
          origin: urlProp.origin === 'same-origin' ? location.origin : urlProp.origin,
          preview,
          draftMode: {
            enable: urlProp.draftMode,
          },
        })
        // eslint-disable-next-line @typescript-eslint/no-shadow
        const url = await resolvePreviewUrl({
          client,
          previewUrlSecret: previewSecretRef.current,
          previewSearchParam: null,
        })
        return new URL(url, location.origin)
      }
      return undefined
    },
    [client, currentUser?.id],
  )
  useEffect(() => {
    if (expiresAt) {
      const timeout = setTimeout(
        () => {
          startTransition(() => setExpiresAt(undefined))
          previewSecretRef.current = undefined
        },
        Math.max(0, expiresAt - Date.now()),
      )
      return () => clearTimeout(timeout)
    }
    return undefined
  }, [expiresAt])

  return (
    <Suspense fallback={<Loading iframeSize="desktop" />}>
      <IframeInner
        key={draftSnapshot.key}
        _key={draftSnapshot.key}
        draftSnapshot={draftSnapshot.draft}
        url={url}
        isResolvingUrl={isResolvingUrl}
        attributes={attributes}
        defaultSize={defaultSize}
        reload={reload}
        showDisplayUrl={showDisplayUrl}
        userId={currentUser?.id}
      />
    </Suspense>
  )
}

export interface IframeInnerProps extends Omit<IframeOptions, 'url'> {
  url: (draftSnapshot: SanityDocument | null) => Promise<URL | Error | undefined>
  isResolvingUrl: boolean
  draftSnapshot: SanityDocument | null
  userId?: string
  expiresAt?: number
  _key?: string
}
const IframeInner = memo(function IframeInner(props: IframeInnerProps) {
  const {
    isResolvingUrl,
    defaultSize = DEFAULT_SIZE,
    reload,
    attributes = {},
    showDisplayUrl = true,
    draftSnapshot,
    userId,
    expiresAt,
    _key,
  } = props
  const [iframeSize, setIframeSize] = useState(sizes?.[defaultSize] ? defaultSize : DEFAULT_SIZE)

  const prefersReducedMotion = usePrefersReducedMotion()

  const url = suspend(
    () => props.url(draftSnapshot),
    [
      // Cache based on a few specific conditions
      'sanity-plugin-iframe-pane',
      draftSnapshot,
      userId,
      expiresAt,
      _key,
      resolveUUID,
    ],
  )

  const [loading, setLoading] = useState(true)
  const [_reloading, setReloading] = useState(false)
  const reloading = _reloading || isResolvingUrl

  const iframe = useRef<HTMLIFrameElement>(null)

  const handleReload = useCallback(() => {
    if (!iframe?.current) {
      return
    }

    // Funky way to reload an iframe without CORS issues
    // eslint-disable-next-line no-self-assign
    iframe.current.src = iframe.current.src

    setReloading(true)
  }, [])

  return (
    <MotionConfig transition={prefersReducedMotion ? {duration: 0} : undefined}>
      <Flex direction="column" style={{height: `100%`}}>
        <Toolbar
          url={url}
          iframeSize={iframeSize}
          reloading={reloading}
          setIframeSize={setIframeSize}
          showUrl={showDisplayUrl}
          reloadButton={!!reload?.button}
          handleReload={handleReload}
        />
        {url instanceof Error ? (
          <ErrorCard error={url} />
        ) : (
          <Card tone="transparent" style={{height: `100%`}}>
            <Frame
              ref={iframe}
              loading={loading}
              reloading={reloading}
              iframeSize={iframeSize}
              setReloading={setReloading}
              setLoading={setLoading}
              url={url}
              attributes={attributes}
            />
          </Card>
        )}
      </Flex>
    </MotionConfig>
  )
})

interface FrameProps extends Required<Pick<IframeOptions, 'attributes'>> {
  loading: boolean
  reloading: boolean
  setLoading: (loading: boolean) => void
  setReloading: (reloading: boolean) => void
  iframeSize: IframeSizeKey
  url: URL | undefined
}
const Frame = forwardRef(function Frame(
  props: FrameProps,
  iframe: React.ForwardedRef<HTMLIFrameElement>,
) {
  const {loading, setLoading, iframeSize, attributes, reloading, url, setReloading} = props

  function handleIframeLoad() {
    setLoading(false)
    setReloading(false)
    // Run onLoad from attributes
    if (attributes.onLoad && typeof attributes.onLoad === 'function') {
      attributes.onLoad()
    }
  }

  return (
    <Flex align="center" justify="center" style={{height: `100%`, position: `relative`}}>
      <AnimatePresence>
        {!url ||
          (loading && (
            <MotionFlex
              initial="initial"
              animate="animate"
              exit="exit"
              variants={spinnerVariants}
              justify="center"
              align="center"
              style={{inset: `0`, position: `absolute`}}
            >
              <Loading iframeSize={iframeSize} />
            </MotionFlex>
          ))}
      </AnimatePresence>
      {url && (
        <motion.iframe
          ref={iframe}
          title="preview"
          frameBorder="0"
          style={{maxHeight: '100%'}}
          src={url.toString()}
          initial={['background', iframeSize]}
          variants={iframeVariants}
          animate={[
            loading ? 'background' : 'active',
            reloading ? 'reloading' : 'idle',
            iframeSize,
          ]}
          {...attributes}
          onLoad={handleIframeLoad}
        />
      )}
    </Flex>
  )
})

const spinnerVariants = {
  initial: {opacity: 1},
  animate: {opacity: [0, 0, 1]},
  exit: {opacity: [1, 0, 0]},
}

const iframeVariants = {
  ...sizes,
  desktop: {
    ...sizes.desktop,
    boxShadow: '0 0 0 0px var(--card-shadow-outline-color)',
  },
  mobile: {
    ...sizes.mobile,
    boxShadow: '0 0 0 1px var(--card-shadow-outline-color)',
  },
  background: {
    opacity: 0,
    scale: 1,
  },
  idle: {
    scale: 1,
  },
  reloading: {
    scale: [1, 1, 1, 0.98],
  },
  active: {
    opacity: [0, 0, 1],
    scale: 1,
  },
}

function Loading({iframeSize}: {iframeSize: IframeSizeKey}) {
  return (
    <Flex style={{...sizes[iframeSize]}} justify="center" align="center" direction="column" gap={4}>
      <Spinner muted />
      <Text muted size={1}>
        Loading…
      </Text>
    </Flex>
  )
}

export function ErrorCard({error}: {error: Error}) {
  return (
    <Card height="fill">
      <Flex align="center" height="fill" justify="center" padding={4} sizing="border">
        <Container width={0}>
          <Card padding={4} radius={2} shadow={1} tone="caution">
            <Flex>
              <Box>
                <Text size={1}>
                  <WarningOutlineIcon />
                </Text>
              </Box>
              <Stack flex={1} marginLeft={3} space={3}>
                <Text as="h1" size={1} weight="bold">
                  {error.name}
                </Text>
                <Text as="p" muted size={1}>
                  {error.message}
                </Text>
              </Stack>
            </Flex>
          </Card>
        </Container>
      </Flex>
    </Card>
  )
}

// https://github.com/pmndrs/suspend-react?tab=readme-ov-file#making-cache-keys-unique
const resolveUUID = Symbol()
