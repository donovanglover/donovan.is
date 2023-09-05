---
title: Getting Purely Functional with NixOS
description: A summary of my experiences after a few months of using NixOS.
date: 2023-09-04
---

## What is NixOS

NixOS is how computing should be. Once you try it, you'll realize how incredibly fragile any other computing methodology is.

## The initial learning curve

NixOS is *non-trivial* at best. It took me a few weeks to learn all the terminology: Nix, nixpkgs, Nix flakes, Nix (the package manager), Nix (the programming language), and

## Everything in `nixpkgs`

One of the main benefits of everything in `nixpkgs` is that it becomes easy to grep for any part of your operating system.

## The syncing alternative

Most companies have tried to solve the problem of people having to re-configure everything in their GUI-centric apps by introducing "syncing" into their products.

## Future Plans

### Enable Secure Boot

[Secure boot](https://nixos.wiki/wiki/Secure_Boot) is possible with NixOS, but requires the use of an external module called [Lanzaboote](https://github.com/nix-community/lanzaboote). This may be merged into nixpkgs within the next year or two.

### tmpfs on root

[Impermanence](https://github.com/nix-community/impermanence)

### Improving portability

Nix flakes gives us a lot of options when it comes to how portable we want to make our systems.
