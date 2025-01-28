import {CopyIcon, LaunchIcon, MobileDeviceIcon, RefreshIcon} from '@sanity/icons'
import {Box, Button, Card, Flex, Text, Tooltip, useToast} from '@sanity/ui'
import {useCallback, useRef, useState} from 'react'

import {DisplayUrl} from './DisplayUrl'
import type {IframeSizeKey, SizeProps} from './types'

export const sizes: SizeProps = {
  desktop: {
    width: '100%',
    height: '100%',
  },
  mobile: {
    width: 414,
    height: 746,
  },
}

export const DEFAULT_SIZE = 'desktop'

export interface ToolbarProps {
  url: URL | Error | undefined
  iframeSize: IframeSizeKey
  setIframeSize: (size: IframeSizeKey) => void
  showUrl: boolean
  reloading: boolean
  reloadButton: boolean
  handleReload: () => void
}
export function Toolbar(props: ToolbarProps) {
  const {url, iframeSize, setIframeSize, reloading, showUrl, reloadButton, handleReload} = props
  const validUrl = url instanceof URL

  const input = useRef<HTMLTextAreaElement>(null)
  const {push: pushToast} = useToast()
  const [, copy] = useCopyToClipboard()

  return (
    <>
      <textarea
        style={{position: 'absolute', pointerEvents: 'none', opacity: 0}}
        ref={input}
        value={validUrl ? url.toString() : ''}
        readOnly
        tabIndex={-1}
      />
      <Card padding={2} borderBottom>
        <Flex align="center" gap={2}>
          <Flex align="center" gap={1}>
            <Tooltip
              animate
              content={
                <Text size={1} style={{whiteSpace: 'nowrap'}}>
                  {iframeSize === 'mobile' ? 'Exit mobile preview' : 'Preview mobile viewport'}
                </Text>
              }
              padding={2}
              placement="bottom-start"
            >
              <Button
                disabled={!validUrl}
                fontSize={[1]}
                padding={2}
                mode={iframeSize === 'mobile' ? 'default' : 'ghost'}
                icon={MobileDeviceIcon}
                onClick={() => setIframeSize(iframeSize === 'mobile' ? 'desktop' : 'mobile')}
              />
            </Tooltip>
          </Flex>
          <Box flex={1}>{showUrl && validUrl && <DisplayUrl url={url} />}</Box>
          <Flex align="center" gap={1}>
            {reloadButton ? (
              <Tooltip
                animate
                content={
                  <Text size={1} style={{whiteSpace: 'nowrap'}}>
                    {reloading ? 'Reloading…' : 'Reload'}
                  </Text>
                }
                padding={2}
              >
                <Button
                  disabled={!validUrl}
                  mode="bleed"
                  fontSize={[1]}
                  padding={2}
                  icon={RefreshIcon}
                  loading={reloading}
                  aria-label="Reload"
                  onClick={() => handleReload()}
                />
              </Tooltip>
            ) : null}
            <Tooltip
              animate
              content={
                <Text size={1} style={{whiteSpace: 'nowrap'}}>
                  Copy URL
                </Text>
              }
              padding={2}
            >
              <Button
                mode="bleed"
                disabled={!validUrl}
                fontSize={[1]}
                icon={CopyIcon}
                padding={[2]}
                aria-label="Copy URL"
                onClick={() => {
                  if (!input?.current?.value) return

                  copy(input.current.value).then((copied) => {
                    if (copied) {
                      pushToast({
                        closable: true,
                        status: 'success',
                        title: 'The URL is copied to the clipboard',
                      })
                    } else {
                      pushToast({
                        closable: true,
                        status: 'error',
                        title: 'Failed to copy the URL to the clipboard',
                      })
                    }
                  })
                }}
              />
            </Tooltip>
            <Tooltip
              animate
              content={
                <Text size={1} style={{whiteSpace: 'nowrap'}}>
                  Open URL in a new tab
                </Text>
              }
              padding={2}
              placement="bottom-end"
            >
              <Button
                disabled={!validUrl}
                fontSize={[1]}
                icon={LaunchIcon}
                mode="ghost"
                paddingY={[2]}
                text="Open"
                aria-label="Open URL in a new tab"
                onClick={validUrl ? () => window.open(url.toString()) : undefined}
              />
            </Tooltip>
          </Flex>
        </Flex>
      </Card>
    </>
  )
}

type CopiedValue = string | null

type CopyFn = (text: string) => Promise<boolean>

function useCopyToClipboard(): [CopiedValue, CopyFn] {
  const [copiedText, setCopiedText] = useState<CopiedValue>(null)

  const copy: CopyFn = useCallback(async (text) => {
    if (!navigator?.clipboard) {
      console.warn('Clipboard not supported')
      return false
    }

    // Try to save to clipboard then save it in the state if worked
    try {
      await navigator.clipboard.writeText(text)
      setCopiedText(text)
      return true
    } catch (error) {
      console.warn('Copy failed', error)
      setCopiedText(null)
      return false
    }
  }, [])

  return [copiedText, copy]
}
