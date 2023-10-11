---
title: "hyprnome"
description: "GNOME-like workspace switching in Hyprland."
weight: 10
aliases: ["hyprnome"]

taxonomies: {
  tags: ["Rust", "Linux"]
}
---

**hyprnome** is a program that lets users achieve [GNOME](https://www.gnome.org/)-like workspace switching in [Hyprland](https://hyprland.org/), useful for less cognitive load.

The source code is available on [GitHub](https://github.com/donovanglover/hyprnome).

## Why

One major advantage of GNOME compared to typical window manager setups is that you don't have to worry about which numbered workspace you're on.

Although this may seem insignificant at first, not having to think about workspace numbers is one less thing to worry about when solving hard problems.

## How

hyprnome is written in [Rust](https://doc.rust-lang.org/book/ch00-00-introduction.html) and uses [hyprland-rs](https://github.com/hyprland-community/hyprland-rs) to create a fast binary that makes switching workspaces instantaneous.

## What

Instead of pressing a key to go to a specific workspace, such as `<Super>4` to go to workspace 4, you instead switch workspaces by going forward and backwards.

- When going left, this means "the next occupied workspace on the left" or stay on the current one if there's no other workspace before
- When going right, this means "the next occupied workspace on the right" or create an empty one if we're at the end of the list

Note that the same behavior will also work for workflows with vertical workspaces and up/down motions.

## Getting Started

The most common way to use hyprnome is to edit your `hyprland.conf` with the keybinds you want to use for workspace switching, like so:


```config
bind = SUPER, 1, exec, hyprnome --previous
bind = SUPER, 2, exec, hyprnome
bind = SUPER_SHIFT, 1, exec, hyprnome --previous --move
bind = SUPER_SHIFT, 2, exec, hyprnome --move
```

Personally I like creating workspaces in either direction, however it's possible to add the [`--no-empty-before`](https://github.com/donovanglover/hyprnome#usage) flag to mimic the behavior of GNOME.

If you create workspaces in either direction, make sure to start Hyprland at a high-numbered workspace so you don't have to worry about reaching workspace 1:

```config
exec-once = hyprctl dispatch workspace 5000000
```

This ensures that an empty workspace will always be created in the left direction if no other occupied workspaces exist.
