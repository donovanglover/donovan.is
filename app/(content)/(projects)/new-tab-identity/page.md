---
title: New Tab Identity
description: Web extension that lets you browse the web from many different countries at the same time with Mullvad VPN.
tags: ["Web Extensions", "Firefox"]
---

# New Tab Identity

**New Tab Identity** is a browser extension that lets you browse the web from many different countries at the same time with [Mullvad VPN](https://mullvad.net).

The source code is available on [GitHub](https://github.com/donovanglover/new-tab-identity).

## Why New Tab Identity?

Having a browser like [LibreWolf](https://librewolf.net/) is cool, but what if you wanted to browse the web from multiple locations at once in addition to having separate cookies with fingerprint resistance?

Thanks to Firefox's Browser API support for [ContextualIdentities](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs#contextualidentities), it's possible to proxy different tabs with different VPN locations.

### Embracing convenience

By making using multiple VPN locations trivial, users are more likely to browse the web from different IP addresses.

A browser extension makes it easy to use many different VPN locations at once **without** having to open multiple separate browsers with different profiles like you'd have to do with Chromium's [`--proxy`](https://peter.sh/experiments/chromium-command-line-switches/) flags or Firefox's [`prefs.js`](https://kb.mozillazine.org/Network.proxy.type).

## How does it work?

The extension listens for new network connections in the browser and proxies them based on what container the tab is in.

The list of active VPN servers is periodically updated and users are warned when a server they're using goes offline.

## How do I use it?

Changing cookies and IP addresses isn't enough to create a unique identity, therefore [LibreWolf](https://librewolf.net/) should be preferred over Firefox for its built-in fingerprint resistance.

1. As you browse the web, open the extension popup or right click on tabs / pages / links to create new VPN containers.
2. When you want to delete containers you're no longer using, press the `X` button in the extension popup.

If you use [uBlock Origin](https://github.com/gorhill/uBlock) (which you should), then you'll need to uncheck `Uncloak canonical names` in the settings to avoid [leaking DNS requests](https://github.com/gorhill/uBlock/wiki/Dashboard:-Settings#uncloak-canonical-names).

## Permissions

The following [permissions](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) are used:

- `contextualIdentities`: used for creating new containers
- `cookies`: used for creating new containers (they have unique [cookies](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities))
- `proxy`: used for proxying requests and blocking direct connections if enabled
- `storage`: used for saving settings and server data
- `contextMenus`: used to be able to create new containers by right clicking
- `<all_urls>`: used to proxy all urls

## What's the stack?

New Tab Identity is written in [TypeScript](https://www.typescriptlang.org/) and uses [React](https://react.dev/) for the user interface. [Vite](https://vitejs.dev/) is used as the build tool and tests are written in [Vitest](https://vitest.dev/) with 100% test coverage. [Nix](https://nixos.org/) is used for a reproducible development environment with pinned Firefox and Node.js versions.
