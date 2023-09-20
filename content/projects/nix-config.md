---
title: "nix-config"
description: "A fully reproducible and declarative Linux environment with NixOS."
weight: 1
aliases: ["nix-config", "nix", "using-nixos"]

taxonomies: {
  tags: ["Linux", "Nix", "NixOS"]
}

extra: {
  local_image: "/images/nix-config-with-pepper.webp",
  social_media_card: "/images/nix-config-with-pepper.jpg"
}
---

I've spent a few years fine-tuning my ideal programming environment. Using modern technologies like [NixOS](https://nixos.org/) and [Nix Flakes](https://nixos.wiki/wiki/Flakes), I created a fully reproducible and open source [GNU/Linux](https://www.gnu.org/gnu/linux-and-gnu.en.html) system that anyone can build and expand upon.

The source code is available on [GitHub](https://github.com/donovanglover/nix-config).

{{ full_width_image(src="/images/nix-config-with-pepper.jpg" alt="Pepper looking earnestly at declaratively configured Git abbreviations for the fish shell, written in Nix.") }}

{% wide_container() %}

<small>
<center>

Background art: [The market](https://www.peppercarrot.com/en/viewer/artworks__2022-02-21_The-market_by-David-Revoy.html), [In Bloom](https://www.peppercarrot.com/en/viewer/artworks__2022-03-02_In-Bloom_by-David-Revoy.html) and [Vertical cover book two screen](https://www.peppercarrot.com/en/viewer/artworks__2016-11-14_vertical-cover-book-two_screen_by-David-Revoy.html) by David Revoy − [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.en).

</center>
</small>

{% end %}

## The Problem

The longer you use a phone, laptop, tablet, or other computer, the more changes you make to it.

Over time, you forget the changes you made to your system.

This is especially problematic for people that heavily customize their devices, such as technology enthusiasts, systems administrators, and software engineers.

## The Solution

What if you could guarantee the state of your computer, so that you always know how it's set up? More so, what if you could *declaratively* configure your computer, so that you have a bunch of text files that anyone can read to ensure that state?

Enter: [Nix](https://github.com/gytis-ivaskevicius/high-quality-nix-content/blob/master/memes/pinnacle-of-system-configuration.png).

[Nix](https://nixos.org/manual/nix/stable/) is a [purely](https://wiki.haskell.org/Pure) [functional](https://wiki.haskell.org/Functional_programming) [package manager](https://wiki.archlinux.org/title/Pacman/Rosetta) that enables anyone to create *fully reproducible* and *declarative* system configurations. For example, this is useful when you want all the engineers on a team to have the same programming environment.

{{ full_width_image(src="/images/nix-config-neovim-with-rust.jpg" alt="Example of a declaratively configured programming environment for Rust with Neovim and NixOS.") }}

{% wide_container() %}

<small>
<center>

Background art: [Video game jam](https://www.peppercarrot.com/en/viewer/misc__2023-06-12_video-game-jam_by-David-Revoy.html) by David Revoy − [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.en).

</center>
</small>

{% end %}

Unlike other technologies like [Ansible](https://docs.ansible.com/ansible/latest/index.html) that configure systems [imperatively](https://discourse.nixos.org/t/nixos-vs-ansible/16757/17), Nix makes it possible to guarantee the *state* of a system.

In other words, if you remove a declarative option configured in Nix, that aspect of the system gets removed the next time you rebuild. For programs that manage their own state, that too can be managed with [temporary filesystems](https://wiki.archlinux.org/title/Tmpfs) and [impermanence](https://github.com/nix-community/impermanence).

## Getting Started

If you haven't already, [download NixOS](https://nixos.org/download#download-nixos). You can use my system configuration in a [virtual machine](https://wiki.gentoo.org/wiki/Virtualization) by running the following command in an existing NixOS install:

{% wide_container() %}

```bash
nixos-rebuild build-vm --flake github:donovanglover/nix-config#nixos && ./result/bin/run-nixos-vm
```

{% end %}

The code base is designed to be easy to add and remove stuff, so you're free to use it as a starting point for your own system. Have fun!
