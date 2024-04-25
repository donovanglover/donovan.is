import { getFeed } from '@/app/(rss)/lib'

export async function GET (): Promise<Response> {
  const feed = await getFeed()

  return new Response(feed.json1(), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  })
}
