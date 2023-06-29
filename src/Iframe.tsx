/* eslint-disable react/jsx-no-bind */
import {CopyIcon, LeaveIcon, MobileDeviceIcon, UndoIcon} from '@sanity/icons'
import {Box, Button, Card, Flex, Spinner, Text, ThemeProvider} from '@sanity/ui'
import React, {useEffect, useRef, useState} from 'react'
import {HTMLAttributeReferrerPolicy} from 'react'
import {SanityDocumentLike} from 'sanity'
import {useCopyToClipboard} from 'usehooks-ts'

type Size = 'desktop' | 'mobile'

type SizeProps = {
  // eslint-disable-next-line no-unused-vars
  [key in Size]: {
    width: string | number
    height: string | number
    maxHeight: string | number
  }
}

const sizes: SizeProps = {
  desktop: {
    width: `100%`,
    height: `100%`,
    maxHeight: `100%`,
  },
  mobile: {
    width: 414,
    height: `100%`,
    maxHeight: 736,
  },
}

export type IframeOptions = {
  url: string | ((document: SanityDocumentLike) => unknown)
  defaultSize?: 'desktop' | 'mobile'
  loader?: boolean | string
  showDisplayUrl?: boolean
  reload: {
    revision: boolean | number
    button: boolean
  }
  attributes?: Partial<{
    allow: string
    referrerPolicy: HTMLAttributeReferrerPolicy | undefined
    sandbox: string
    onLoad: () => void
  }>
}

export type IframeProps = {
  document: {
    displayed: SanityDocumentLike
  }
  options: IframeOptions
}

const DEFAULT_SIZE = `desktop`

function Iframe(props: IframeProps) {
  const {document: sanityDocument, options} = props
  const {
    url,
    defaultSize = DEFAULT_SIZE,
    reload,
    loader,
    attributes = {},
    showDisplayUrl = true,
  } = options
  const [displayUrl, setDisplayUrl] = useState(url && typeof url === 'string' ? url : ``)
  const [iframeSize, setIframeSize] = useState(sizes?.[defaultSize] ? defaultSize : DEFAULT_SIZE)
  const [loading, setLoading] = useState(false)
  const input = useRef<HTMLTextAreaElement>(null)
  const iframe = useRef<HTMLIFrameElement>(null)
  const {displayed} = sanityDocument
  const [, copy] = useCopyToClipboard()

  function handleCopy() {
    if (!input?.current?.value) return

    copy(input.current.value)
  }

  function handleReload() {
    if (!iframe?.current) {
      return
    }

    // Funky way to reload an iframe without CORS issuies
    // eslint-disable-next-line no-self-assign
    iframe.current.src = iframe.current.src

    setLoading(true)
  }

  function handleIframeLoad() {
    setLoading(false)
    // Run onLoad from attributes
    if (attributes.onLoad && typeof attributes.onLoad === 'function') {
      attributes.onLoad()
    }
  }

  // Reload on new revisions
  useEffect(() => {
    if (reload?.revision || reload?.revision == 0) {
      setTimeout(() => {
        handleReload()
      }, Number(reload?.revision))
    }
  }, [displayed._rev, reload?.revision])

  // Reload on change of URL
  useEffect(() => {
    if (typeof url === 'string') setDisplayUrl(url)
  }, [url])

  useEffect(handleReload, [displayUrl])

  // Apply changes of default sizes
  useEffect(() => {
    if (sizes?.[defaultSize]) setIframeSize(defaultSize)
  }, [defaultSize])

  // Set initial URL and refresh on new revisions or change of URL
  useEffect(() => {
    const getUrl = async () => {
      setLoading(true)
      const resolveUrl = typeof url === 'function' ? await url(displayed) : ``

      // Only update state if URL has changed
      if (resolveUrl !== displayUrl && resolveUrl && typeof resolveUrl === 'string') {
        setDisplayUrl(resolveUrl)
      }
    }

    if (typeof url === 'function') {
      getUrl()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayed._rev, url])

  if (!displayUrl || typeof displayUrl !== 'string') {
    return (
      <ThemeProvider>
        <Flex padding={5} align="center" justify="center">
          <Spinner />
        </Flex>
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider>
      <textarea
        style={{position: `absolute`, pointerEvents: `none`, opacity: 0}}
        ref={input}
        value={displayUrl}
        readOnly
        tabIndex={-1}
      />
      <Flex direction="column" style={{height: `100%`}}>
        <Card padding={2} borderBottom>
          <Flex align="center" gap={2}>
            <Flex align="center" gap={1}>
              <Button
                fontSize={[1]}
                padding={2}
                tone="primary"
                mode={iframeSize === 'mobile' ? 'default' : 'ghost'}
                icon={MobileDeviceIcon}
                onClick={() => setIframeSize(iframeSize === 'mobile' ? 'desktop' : 'mobile')}
              />
            </Flex>
            <Box flex={1}>
              {showDisplayUrl && (
                <Text size={0} textOverflow="ellipsis">
                  {displayUrl}
                </Text>
              )}
            </Box>
            <Flex align="center" gap={1}>
              {reload?.button ? (
                <Button
                  fontSize={[1]}
                  padding={2}
                  icon={UndoIcon}
                  title="Reload"
                  aria-label="Reload"
                  onClick={() => handleReload()}
                />
              ) : null}
              <Button
                fontSize={[1]}
                icon={CopyIcon}
                padding={[2]}
                title="Copy"
                aria-label="Copy"
                onClick={() => handleCopy()}
              />
              <Button
                fontSize={[1]}
                icon={LeaveIcon}
                padding={[2]}
                text="Open"
                tone="primary"
                onClick={() => window.open(displayUrl)}
              />
            </Flex>
          </Flex>
        </Card>
        <Card tone="transparent" padding={iframeSize === 'mobile' ? 2 : 0} style={{height: `100%`}}>
          <Flex align="center" justify="center" style={{height: `100%`, position: `relative`}}>
            {loader && loading && (
              <Flex justify="center" align="center" style={{inset: `0`, position: `absolute`}}>
                <Flex
                  style={{...sizes[iframeSize], backgroundColor: `rgba(0,0,0,0.2)`}}
                  justify="center"
                  align="center"
                >
                  <Card padding={4} radius={2} shadow={1}>
                    <Flex align="center" direction="column" gap={3} height="fill" justify="center">
                      <Spinner />
                      {loader && typeof loader === 'string' && <Text size={1}>{loader}</Text>}
                    </Flex>
                  </Card>
                </Flex>
              </Flex>
            )}
            <iframe
              ref={iframe}
              title="preview"
              style={sizes[iframeSize]}
              frameBorder="0"
              src={displayUrl}
              {...attributes}
              onLoad={handleIframeLoad}
            />
          </Flex>
        </Card>
      </Flex>
    </ThemeProvider>
  )
}

export default Iframe
