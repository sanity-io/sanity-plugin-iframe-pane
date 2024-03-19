import {getRedirectTo} from '@sanity/preview-url-secret/get-redirect-to'
import {Text} from '@sanity/ui'
import {useMemo} from 'react'

export function DisplayUrl(props: {url: URL}) {
  const truncatedUrl = useMemo(() => {
    const url = getRedirectTo(props.url)
    return `${url.origin === location.origin ? '' : url.origin}${url.pathname}${url.search}`
  }, [props.url])

  return (
    <Text size={0} textOverflow="ellipsis">
      {truncatedUrl}
    </Text>
  )
}
