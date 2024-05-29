/* Based on https://gist.github.com/jakelazaroff/36b9665efe02870576acfc033171d6bf
 *
 * Re-written in TypeScript and refactored code.
 */

import { dirname, isAbsolute, join } from 'node:path'
import ogs, { type ErrorResult } from 'open-graph-scraper'

export interface OpenGraphResult {
  title?: string
  description?: string
  image?: string
  favicon?: string
}

export async function openGraph (href: string): Promise<OpenGraphResult> {
  const url = new URL(href)

  try {
    const { result: og } = await ogs({
      url: href,
      fetchOptions: {
        headers: {
          'user-agent': 'Mozilla/5.0 (Windows NT 10.0; rv:125.0) Gecko/20100101 Firefox/125.0'
        }
      }
    })

    let image = og.ogImage?.[0]?.url ?? og.twitterImage?.[0]?.url ?? ''
    if (/^\//.test(image)) image = `${url.protocol}//${url.host}${image}`

    let favicon = og.favicon ?? ''
    if (!/^(?:https?:)?\/\//.test(favicon)) {
      const result = new URL(url)
      result.search = ''

      const pathname = favicon?.split('?')[0] ?? '/favicon.ico'
      result.pathname = isAbsolute(pathname) ? pathname : join(dirname(result.pathname), pathname)

      favicon = result.href
    }

    return {
      title: og.ogTitle,
      description: og.ogDescription,
      image: image !== '' ? image : undefined,
      favicon: favicon !== '' ? favicon : undefined
    }
  } catch (e) {
    console.log(href, (e as ErrorResult).result.error)

    return {}
  }
}
