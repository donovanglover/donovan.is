# [donovan.is](https://donovan.is) 🌐

This is the source code for my personal website [donovan.is](https://donovan.is).

It uses my [modified version of tabi](https://github.com/donovanglover/tabi) that adds [Turbo support](https://turbo.hotwired.dev/) for instantaneous page loads and [PhotoSwipe](https://photoswipe.com/) for image viewing.

Additionally, it uses [Bun](https://bun.sh/) to bundle all JavaScript into one file, thus preventing new JavaScript files from having to be loaded from the server when navigating to cached pages.

It is deployed to [Cloudflare Pages](https://www.cloudflare.com/developer-platform/pages/) with modified [Caching Rules](https://developers.cloudflare.com/cache/concepts/default-cache-behavior/) to take advantage of caching on HTML pages.

## Topics

- Front-end web development. HTML, CSS, JavaScript
- Back-end web development. Authentication, Databases, etc.
- Web extension development. Firefox etc.
- Systems programming. Rust etc.
- Server administration. Linux etc.

## Subscribe

<https://donovan.is/atom.xml>

## Dependencies

- [Zola](https://www.getzola.org/)
- [Bun](https://bun.sh/)
- [Biome](https://biomejs.dev/) (dev only)

If you have [Nix](https://nixos.org/) installed, you can run `nix develop --command fish` to automatically get a development environment set up.

## Development

- Start the web server: `zola serve`
- Watch for changes to build the JavaScript bundle: `bun run dev`
- Format TypeScript code: `bun run format`

## Production

1. Build the production JavaScript bundle: `bun run build`
2. Build the website: `zola build`
