---
title: "hyprdim"
description: "Automatically dim windows in borderless Hyprland environments."
tags: ["Rust", "Linux"]
---

# hyprdim

**hyprdim** is a daemon that automatically dims windows in [Hyprland](https://github.com/hyprwm/Hyprland) when switching between them. This is particularly useful for an immersive fullscreen experience without having to compromise on visual indicators.

The source code is available on [GitHub](https://github.com/donovanglover/hyprdim).

## Background

Hyprland is a modern Wayland compositor that lets you customize your computing environment to suit your specific use case. This lets you create systems tailored to specific needs, such as [Grant Custer's task-based operating system](https://writing.grantcuster.com/posts/2023-08-07-a-task-based-operating-system-a-sketch-built-with-linux-nixos-hyprland-node-react/).

By temporarily dimming windows, it becomes easy to see the active window in borderless environments while still being able to reference other tiled windows.

## Usage

First, figure out which settings you want by experimenting with [hyprdim's options](https://github.com/donovanglover/hyprdim#usage).

Once you are satisfied with your setup, start hyprdim at the beginning of a Hyprland session with `hyprland.conf`, like so:

```fish
exec-once = hyprdim --no-dim-when-only --persist --ignore-leaving-special --dialog-dim
```
