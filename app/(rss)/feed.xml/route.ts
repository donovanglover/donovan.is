import { getFeed } from '@/app/(rss)/lib'

export async function GET (): Promise<Response> {
  const feed = await getFeed()

  return new Response(feed.rss2(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  })
}
