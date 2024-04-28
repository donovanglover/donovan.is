---
title: "base16-tailwind"
description: "Easily use base16 color schemes with Tailwind CSS."
tags: ["TypeScript", "Tailwind CSS"]
---

# base16-tailwind

**base16-tailwind** is a [Tailwind CSS](https://tailwindcss.com/) [plugin](https://tailwindcss.com/docs/plugins) that enables the usage of [base16 color schemes](https://tinted-theming.github.io/base16-gallery/) as an alternative to the default [Tailwind CSS colors](https://tailwindcss.com/docs/customizing-colors).

The source code is available on [GitHub](https://github.com/donovanglover/base16-tailwind).

## Background

[Chris Kempson](https://github.com/chriskempson) is known for creating the original Base16 project. Each color scheme is a set of 16 colors that can be used in things like terminals, shells, and text editors.

The project lives on as [Tinted Theming](https://github.com/tinted-theming/schemes), and since I already use base16 schemes for [my own setup](/nix-config), I wanted to let users choose between base16 schemes on websites and web apps as well.

## Why base16-tailwind?

Tailwind CSS offers a slew of advantages over writing CSS raw, such as class checking with [eslint-plugin-tailwindcss](https://github.com/francoismassart/eslint-plugin-tailwindcss) and hassle-free typography with [@tailwindcss/typography](https://github.com/tailwindlabs/tailwindcss-typography).

By leveraging the power of Tailwind CSS, it becomes possible to offer **all** base16 color schemes *without* worrying about bundle size. Users instantly get access to all color schemes with auto-complete thanks to the [Tailwind CSS language server](https://github.com/tailwindlabs/tailwindcss-intellisense).

## How does it work?

[Utility classes](https://tailwindcss.com/docs/utility-first) are created for each color scheme. [CSS variables](https://css-tricks.com/a-complete-guide-to-custom-properties/) are used for the actual colors to enable the seamless switching between as many color schemes as one desires.

The library has [100% test coverage](https://github.com/donovanglover/base16-tailwind/blob/32f8bd3205c3327a14784d83c606b88efdbb0714/jest.config.ts#L12-L19) and [thoroughly-written tests](https://github.com/donovanglover/base16-tailwind/tree/master/tests) to ensure that everything works as expected.

## Usage

You can use `base16-tailwind` in your own project by installing the package from the [JavaScript Registry](https://jsr.io/@donovanglover/base16-tailwind).

```fish
npx jsr add @donovanglover/base16-tailwind
```

This website uses `base16-tailwind` under the hood, and you can choose between hundreds of different color schemes below!
