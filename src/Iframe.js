import React, {useEffect, useState, useRef} from 'react'
import PropTypes from 'prop-types'
import {Box, Flex, Text, Button, Stack, ThemeProvider, Card} from '@sanity/ui'
import {CopyIcon, LeaveIcon, MobileDeviceIcon} from '@sanity/icons'

const sizes = {
  desktop: {backgroundColor: `white`, width: `100%`, height: `100%`, maxHeight: `100%`},
  mobile: {backgroundColor: `white`, width: 414, height: `100%`, maxHeight: 736},
}
function Iframe({document: sanityDocument, options}) {
  const {url, defaultSize} = options
  const [displayUrl, setDisplayUrl] = useState(typeof url === 'string' ? url : ``)
  const [iframeSize, setIframeSize] = useState(
    defaultSize && sizes?.[defaultSize] ? defaultSize : `desktop`
  )
  const input = useRef()
  const {displayed} = sanityDocument

  function handleCopy() {
    if (!input?.current) return

    input.current.select()
    input.current.setSelectionRange(0, 99999)

    // eslint-disable-next-line react/prop-types
    document.execCommand('copy')
  }

  useEffect(() => {
    const getUrl = async () => {
      const resolveUrl = await url(displayed)

      setDisplayUrl(resolveUrl)
    }

    if (!displayUrl && displayed?._id) getUrl()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!displayUrl || typeof displayUrl !== 'string') {
    return <div style={{padding: `1rem`}}>Loading...</div>
  }

  return (
    <ThemeProvider>
      <textarea
        style={{position: `absolute`, pointerEvents: `none`, opacity: 0}}
        ref={input}
        value={displayUrl}
        readOnly
        tabIndex="-1"
      />
      <Flex direction="column" style={{height: `100%`}}>
        <Card padding={2} borderBottom={1}>
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
              <Text size={0} textOverflow="ellipsis">
                {displayUrl}
              </Text>
            </Box>
            <Flex align="center" gap={1}>
              <Button
                fontSize={[1]}
                icon={CopyIcon}
                padding={[2]}
                text="Copy"
                tone="default"
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
          <Flex align="center" justify="center" style={{height: `100%`}}>
            <iframe title="preview" style={sizes[iframeSize]} frameBorder="0" src={displayUrl} />
          </Flex>
        </Card>
      </Flex>
    </ThemeProvider>
  )
}

Iframe.propTypes = {
  document: PropTypes.shape({
    displayed: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      slug: PropTypes.shape({
        current: PropTypes.string,
      }),
    }),
  }),
  options: PropTypes.shape({
    url: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  }),
}

export default Iframe
