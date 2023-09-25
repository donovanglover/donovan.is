# [donovan.is](https://donovan.is) 🌐

This is the source code for my personal website [donovan.is](https://donovan.is).

It uses my [modified version of tabi](https://github.com/donovanglover/tabi) that adds [Turbo support](https://turbo.hotwired.dev/) for instantaneous page loads.

Additionally, it uses [Bun](https://bun.sh/) to bundle all JavaScript into one file, thus preventing new JavaScript files from having to be loaded from the server when navigating to cached pages.

It is deployed to [Cloudflare Pages](https://www.cloudflare.com/developer-platform/pages/) with modified [Caching Rules](https://developers.cloudflare.com/cache/concepts/default-cache-behavior/) to take advantage of caching on HTML pages.

## Topics

- Front-end web development. HTML, CSS, JavaScript
- Back-end web development. Authentication, Databases, etc.
- Web extension development. Firefox etc.
- Systems programming. Rust etc.
- Server administration. Linux etc.

## Dependencies

- [zola](https://www.getzola.org/)
- [bun](https://bun.sh/)
- [Biome](https://biomejs.dev/) (dev only)

If you have [Nix](https://nixos.org/) installed, you can run `nix develop --command fish` to automatically get a development environment set up.

## Development

- Start the web server: `zola serve`
- Watch for changes to build the JavaScript bundle: `bun run dev`
- Format TypeScript code: `bun run format`

## Production

1. Build the production JavaScript bundle: `bun run build`
2. Build the website: `zola build`

## License

The writing in `*.md` files, unless otherwise stated in the `.md` file itself, are available under the [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) license.

Source code files (`*.ts`, `*.sass`, `*.nix`) are available under the [MIT License](https://choosealicense.com/licenses/mit/).
