---
title: "sakaya"
description: "Sandbox GUI applications with declarative systemd-nspawn containers."
tags: ["Rust", "Linux", "Containers", "NixOS"]
---

# sakaya

**sakaya** is a program that lets users easily run GUI applications inside declarative systemd-nspawn containers, useful for sandboxing things.

The source code is available on [GitHub](https://github.com/donovanglover/sakaya).

## Why sakaya?

[systemd-nspawn](https://wiki.archlinux.org/title/Systemd-nspawn) containers are pretty good at isolating programs from the rest of your system. Although it's not *perfect*, it *will* stop naive applications that assume full access to the host from accessing your files.

Unlike competing solutions like [firejail](https://firejail.wordpress.com/), sakaya takes advantage of the existing systemd-nspawn implementation to avoid a [large attack surface](https://github.com/netblue30/firejail/issues/903).

### Embracing convenience

The main advantage of sakaya is that users no longer have to enter their password multiple times when starting sandboxed applications.

This makes sandboxing more convenient. Users are more likely to run sandboxed applications when running them requires no additional effort on their part.

## Getting Started

Installation and usage instructions can be found in the [README](https://github.com/donovanglover/sakaya#readme).

The main thing to keep in mind is auto-starting the sakaya server inside the declarative container. You'll also want to make sure that your GPU is accessible inside the container for GPU-intensive applications.
