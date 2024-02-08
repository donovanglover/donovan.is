import getFeed from '@/lib/feed'

export async function GET (): Promise<Response> {
  const feed = await getFeed()

  return new Response(feed.atom1(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  })
}
