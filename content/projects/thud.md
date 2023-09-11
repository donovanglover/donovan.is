---
title: "thud"
description: "Generate directory thumbnails for GTK-based file browsers from images inside them."
weight: 1

taxonomies: {
  tags: ["Rust", "Linux"]
}

extra: {
  local_image: "/images/thud.png",
  social_media_card: "/images/thud.png"
}
---

*thud*, short for **thu**mbnail **d**irectory, is a tool that lets you generate directory thumbnails from images inside them. Useful for a [Dolphin](https://apps.kde.org/dolphin/)/[KDE](https://kde.org/)-like experience with [GTK](https://www.gtk.org/)-based [file](https://apps.gnome.org/Nautilus/) [browsers](https://docs.xfce.org/xfce/thunar/start) that don't show the contents of directories by default.

The source code is available on [GitHub](https://github.com/donovanglover/thud).

![thud](/images/thud.png)

## Background

Images are a great way to make browsing through directories easier, especially when each directory holds specific content, such as a certain music album, video series, or other media.

With *thud*, any `cover.jpg` or `cover.png` you place in a directory will replace the default folder icon with a thumbnail of that image.

This makes it possible to browse through your directories visually.

## Why thud?

- Portability. Your folder icons are now part of the folders themselves, instead of [hidden](https://askubuntu.com/questions/153575/where-does-gnome-nautilus-store-directory-icons) inside of GNOME's virtual file system. No effort from you is required to keep your folder icons.
- Simplicity. Using a cover image is as simple as making sure that the directory has a `cover.jpg` or `cover.png`. No need to click through GUIs or deal with a database.
- Ease of sharing. You can share folders without worrying about useless metadata files like desktop.ini. Any other user that uses thud will automatically see your cover images.
- Progressive enhancement. You can use thud at your own pace, gradually adding cover images as you see fit.
- Graceful degradation. Your files are exactly the same as they were with or without thud.
- Multiuse. The same cover images can be used with other applications such as [mpv](https://github.com/mpv-player/mpv) (enabled by default) and media servers like [Navidrome](https://github.com/navidrome/navidrome).

## Trivia

thud was originally called go-thumbnailer and was written in Go. For a technical explanation on why it was rewritten in Rust, read [Rewriting go-thumbnailer in Rust](/blog/rewriting-go-thumbnailer-in-rust).
