// Next.js Edge API Route Handlers: https://nextjs.org/docs/app/building-your-application/routing/router-handlers#edge-and-nodejs-runtimes

export const runtime = 'edge'

export async function GET (): Promise<Response> {
  return new Response(JSON.stringify({ name: 'John Doe' }))
}
