import React, {useEffect, useState, useRef} from 'react'
import PropTypes from 'prop-types'
import {FiCopy, FiShare} from 'react-icons/fi'
import {Flex, Text, Button, studioTheme, ThemeProvider} from '@sanity/ui'

function Iframe({document: sanityDocument, options}) {
  const {url} = options
  const [displayUrl, setDisplayUrl] = useState(typeof url === 'string' ? url : ``)
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
    <ThemeProvider theme={studioTheme}>
      <textarea
        style={{position: `absolute`, pointerEvents: `none`, opacity: 0}}
        ref={input}
        value={displayUrl}
        readOnly
        tabIndex="-1"
      />
      <Flex direction="column" style={{height: `100%`}}>
        <Flex
          style={{
            alignItems: `center`,
            borderBottom: `1px solid var(--card-border-color)`,
            padding: `0.5rem`,
            flexShrink: 0,
          }}
        >
          <Text style={{flex: 1}} size={0}>
            {displayUrl}
          </Text>
          <Button
            fontSize={[1]}
            icon={FiCopy}
            style={{marginLeft: `0.5rem`}}
            padding={[2]}
            text="Copy"
            tone="default"
            onClick={() => handleCopy()}
          />
          <Button
            fontSize={[1]}
            icon={FiShare}
            style={{marginLeft: `0.5rem`}}
            padding={[2]}
            text="Open"
            tone="primary"
            onClick={() => window.open(displayUrl)}
          />
        </Flex>
        <iframe title="preview" style={{width: '100%', height: '100%'}} frameBorder="0" src={displayUrl} />
      </Flex>
    </ThemeProvider>
  )
}

Iframe.propTypes = {
  document: PropTypes.shape({
    displayed: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      slug: PropTypes.shape({
        current: PropTypes.string
      }),
    }),
  }),
  options: PropTypes.shape({
    url: PropTypes.oneOf([PropTypes.string, PropTypes.func]),
  }),
}

export default Iframe
