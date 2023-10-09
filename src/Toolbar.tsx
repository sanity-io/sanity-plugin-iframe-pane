/* eslint-disable react/jsx-no-bind */
import {CopyIcon, LaunchIcon, MobileDeviceIcon, UndoIcon} from '@sanity/icons'
import {Box, Button, Card, Flex, Text, Tooltip, useToast} from '@sanity/ui'
import React, {useRef} from 'react'
import {useCopyToClipboard} from 'usehooks-ts'

import {DisplayUrl} from './DisplayUrl'
import {IframeSizeKey, type SizeProps} from './types'

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

export const DEFAULT_SIZE = `desktop`

export interface ToolbarProps {
  displayUrl: string
  iframeSize: IframeSizeKey
  setIframeSize: (size: IframeSizeKey) => void
  showDisplayUrl: boolean
  reloading: boolean
  reloadButton: boolean
  handleReload: () => void
}
export function Toolbar(props: ToolbarProps) {
  const {
    displayUrl,
    iframeSize,
    setIframeSize,
    reloading,
    showDisplayUrl,
    reloadButton,
    handleReload,
  } = props

  const input = useRef<HTMLTextAreaElement>(null)
  const {push: pushToast} = useToast()
  const [, copy] = useCopyToClipboard()

  return (
    <>
      <textarea
        style={{position: `absolute`, pointerEvents: `none`, opacity: 0}}
        ref={input}
        value={displayUrl}
        readOnly
        tabIndex={-1}
      />
      <Card padding={2} borderBottom>
        <Flex align="center" gap={2}>
          <Flex align="center" gap={1}>
            <Tooltip
              content={
                <Text size={1} style={{whiteSpace: 'nowrap'}}>
                  {iframeSize === 'mobile' ? 'Exit mobile preview' : 'Preview mobile viewport'}
                </Text>
              }
              padding={2}
              placement="bottom-start"
            >
              <Button
                disabled={!displayUrl}
                fontSize={[1]}
                padding={2}
                mode={iframeSize === 'mobile' ? 'default' : 'ghost'}
                icon={MobileDeviceIcon}
                onClick={() => setIframeSize(iframeSize === 'mobile' ? 'desktop' : 'mobile')}
              />
            </Tooltip>
          </Flex>
          <Box flex={1}>
            {showDisplayUrl && displayUrl && <DisplayUrl displayUrl={displayUrl} />}
          </Box>
          <Flex align="center" gap={1}>
            {reloadButton ? (
              <Tooltip
                content={
                  <Text size={1} style={{whiteSpace: 'nowrap'}}>
                    {reloading ? 'Reloading…' : 'Reload'}
                  </Text>
                }
                padding={2}
              >
                <Button
                  disabled={!displayUrl}
                  mode="bleed"
                  fontSize={[1]}
                  padding={2}
                  icon={<UndoIcon style={{transform: 'rotate(90deg) scaleY(-1)'}} />}
                  loading={reloading}
                  aria-label="Reload"
                  onClick={() => handleReload()}
                />
              </Tooltip>
            ) : null}
            <Tooltip
              content={
                <Text size={1} style={{whiteSpace: 'nowrap'}}>
                  Copy URL
                </Text>
              }
              padding={2}
            >
              <Button
                mode="bleed"
                disabled={!displayUrl}
                fontSize={[1]}
                icon={CopyIcon}
                padding={[2]}
                aria-label="Copy URL"
                onClick={() => {
                  if (!input?.current?.value) return

                  copy(input.current.value)
                  pushToast({
                    closable: true,
                    status: 'success',
                    title: 'The URL is copied to the clipboard',
                  })
                }}
              />
            </Tooltip>
            <Tooltip
              content={
                <Text size={1} style={{whiteSpace: 'nowrap'}}>
                  Open URL in a new tab
                </Text>
              }
              padding={2}
              placement="bottom-end"
            >
              <Button
                disabled={!displayUrl}
                fontSize={[1]}
                icon={LaunchIcon}
                mode="ghost"
                paddingY={[2]}
                text="Open"
                aria-label="Open URL in a new tab"
                onClick={() => window.open(displayUrl)}
              />
            </Tooltip>
          </Flex>
        </Flex>
      </Card>
    </>
  )
}
