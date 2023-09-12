---
title: Rewriting go-thumbnailer in Rust
description: The story of how one library carried my migration from Go to Rust and the challenges I faced along the way.
date: 2023-09-10

taxonomies: {
  tags: ["Go", "Rust", "Linux", "Systems Programming"]
}
---

There are many advantages to using GTK and the ecosystem it entails. From configuration files to GUI controls, everything is simpler overall.

One problem I faced with this simplicity was the generic folder icons that directories used. Any directory with more than a few folders became impossible to navigate due to the lack of visual cues.

I wrote [go-thumbnailer](https://github.com/donovanglover/go-thumbnailer/tree/0.1.0) in 2022 to solve a specific problem: make directories useful. Although I used [cover-thumbnailer](https://github.com/flozz/cover-thumbnailer) in the past, it being written in *Python* resulted in subpar performance.

I dug into [the python code](https://github.com/flozz/cover-thumbnailer/blob/master/cover-thumbnailer.py) trying to make it faster and, in the end, just created a *real, compiled* executable that thumbnailed directories **much faster** in Go, which would serve me well for over a year.

## Humble Beginnings

*go-thumbnailer* was an opportunity for me to brush up on my Go skills. I previously learned Go back when it was [new](https://go.dev/doc/go1.2) and [Code School](https://www.pluralsight.com/newsroom/press-releases/pluralsight-acquires-learn-to-code-platform-code-school-for--36-) was still a thing, and by using Go, I would have a [pretty fast](https://github.com/GoodManWEN/Programming-Language-Benchmarks-Visualization) native binary.

### Learning how to make a thumbnailer

It turns out that you have to learn [a few things](https://askubuntu.com/questions/1368910/how-to-create-custom-thumbnailers-for-nautilus-nemo-and-caja) before you can make a thumbnailer. Although it's easy to make one once you understand how they work, the amount of moving parts you have to understand initially is no trivial feat.

In summary, you need to do the following:

1. Create a program that accepts what you're thumbnailing as an argument and returns a path to a thumbnail as output
2. Place a `.thumbnailer` file in `/usr/share/thumbnailers`

### Choosing an image processing library

Having previously used [*awesome*](https://github.com/sindresorhus/awesome) lists in the past to find a few *awesome* libraries, I turned to [Awesome Go](https://github.com/avelino/awesome-go). It wasn't long before I found [govips](https://github.com/davidbyttow/govips) and fell in love with it.

Who *doesn't* love a library that claims to be *4-8 times faster* than the industry standard [ImageMagick](https://imagemagick.org/)? To me at the time, [libvips](https://www.libvips.org/) felt like discovering superpowers in a world where I previously used [`mogrify`](https://imagemagick.org/script/mogrify.php) and [`convert`](https://imagemagick.org/script/convert.php).

### Architecting the program

*go-thumbnailer* was designed to be as simple as possible to maximize performance. To meet that requirement, GUIs, configuration options, and other *fluff* were off the table.

The result? Simplicity and elegance.

```go
package main

import (
  "io/ioutil"
  "os"
  "strconv"
  "github.com/davidbyttow/govips/v2/vips"
)

func main() {
  if len(os.Args) < 4 {
    os.Exit(1)
  }

  size, sizeErr := strconv.Atoi(os.Args[1])

  if (sizeErr != nil) {
    size = 128
  }

  inputDirectory := os.Args[2]
  outputFile := os.Args[3]

  // Make the thumbnail
  vips.Startup(nil)
  thumbnail := getThumbnail(inputDirectory, size)

  // Export as png
  png := vips.NewDefaultPNGExportParams()
  pngBytes, _, errImg := thumbnail.Export(png)

  // Save to outputFile
  errImg = ioutil.WriteFile(outputFile, pngBytes, 0644)

  if errImg != nil {
    os.Exit(3)
  }
}
```

There's no magic here. This is a simple program that *does one thing and does it well*. It even opts to [parse arguments directly](https://gobyexample.com/command-line-arguments) instead of using something like Go's [flag package](https://pkg.go.dev/flag).

### Getting the thumbnail

You may have noticed the `getThumbnail` function from above. It's a simple function that takes an `inputFolder` and returns a thumbnail of the size `size`.

```go
func getThumbnail(inputFolder string, size int) (thumbnail *vips.ImageRef) {
  jpg, errJPG := vips.NewThumbnailFromFile(inputFolder + "/cover.jpg", size, size, vips.InterestingCentre)

  if errJPG != nil {
    png, errPNG := vips.NewThumbnailFromFile(inputFolder + "/cover.png", size, size, vips.InterestingCentre)

    if errPNG != nil {
      os.Exit(2)
    } else {
      thumbnail = png
    }

  } else {
    thumbnail = jpg
  }

  return
}
```

To be clear, the logic here is **not** ideal. Instead of having multiple `if` statements, something like a [switch statement](https://go.dev/tour/flowcontrol/9) would be more elegant.

Of course, a `switch` statement doesn't quite work here since we're continuing flow based on previous errors.

[In contrast to other languages](https://stackoverflow.com/questions/3717420/is-there-a-benefit-to-using-a-return-statement-that-returns-nothing/56738772#56738772), the `return` statement at the end returns the `thumbnail` variable defined at the start of the function. This is the infamous ["naked return"](https://go.dev/tour/basics/7) in Go.

*Ideally*, the logic would look something like this:

```javascript
const vipsOptions = {
  width: size,
  height: size,
  centre: vips.interestingCentre,
}

const getThumbnail = inputFolder => {
  return vips.newThumbnailFromFile(`${inputFolder}/cover.jpg`, vipsOptions)
      || vips.newThumbnailFromFile(`${inputFolder}/cover.png`, vipsOptions)
}
```

Note that JavaScript is the language used here since I'm more familiar with JavaScript than Go.

By iterating through an array of file names, we can make the code [DRYer](https://github.com/kovidgoyal/kitty/commit/2d5c1e205d082a5191fc9eae788e8e25bdb0638c) and avoid multiple `newThumbnailFromFile` declarations. This is the result:

```javascript
for (const file of ["cover.jpg", "cover.png"]) {
  const result = vips.newThumbnailFromFile(`${inputFolder}/${file}`, vipsOptions)
  if (result) return result
}
```

I had a program that worked, however, and that was good enough for me.

## Fast Forward to 2023

The year is 2023 and, after previously trying and failing, I successfully learned [Rust](https://www.rust-lang.org/). Admittedly the language is **huge** and there's a lot of stuff I don't know *yet*, however I know enough to be productive in it and learn what I don't know as needed.

### Go and Rust?

I initially thought it'd be cool to have *both* Go and Rust as languages I use, and planned to expand *go-thumbnailer* into a more complex application, starting with the CLI.

### Expanding the CLI

I was really spoiled by Rust's [clap](https://docs.rs/clap/4.4.2/clap/index.html) library, which made creating [shell completions and man pages](https://hisbaan.com/articles/2022-05-16-autogenerate-rust-documentation) easy. This is *huge* for [developer experience](https://en.wikipedia.org/wiki/User_experience#Developer_experience), and clap makes implementing such DX [a pleasure](https://github.com/donovanglover/hyprdim/blob/2.2.1/src/cli.rs) instead of [a pain](https://github.com/crystal-lang/crystal/pull/13636).

> Back in 2018, [I wrote an RFC](https://github.com/crystal-lang/crystal/issues/5557) on automating shell completions in [Crystal](https://crystal-lang.org/), a programming language with the speed of C and elegance of Ruby. Now in 2023, I am extremely happy that I am able to automate shell completions with Rust's [clap_complete](https://docs.rs/clap_complete/4.4.1/clap_complete/index.html).

As a learning exercise, I decided to write some more advanced CLI logic in Go. [Go has a nice page for this](https://go.dev/solutions/clis), and [Cobra](https://github.com/spf13/cobra) seemed like the industry standard CLI library for the job.

### An early warning

I tried following the instructions on the stylish [cobra.dev](https://cobra.dev/) website in order to get up to speed with Cobra. Unfortunately, those instructions have been outdated for [almost two years](https://github.com/spf13/cobra/issues/1674) now.

{{ full_width_image(src="/images/cobra.dev.png") }}

```bash
~/go-thumbnailer via go v1.20.7 >>> go get -u github.com/spf13/cobra/cobra
go: module github.com/spf13/cobra@upgrade found (v1.7.0), but does not contain package github.com/spf13/cobra/cobra
```

As seen above, the first command users are expected to type hasn't worked for a while now, although [it used to work](https://github.com/spf13/cobra/issues/204). My guess is that one person is in charge of the website and [no one else is able to edit it](https://en.wikipedia.org/wiki/Bus_factor), which *has* happened in open source many times before.

### Bitten by the snake

Unfortunately, this wasn't the only issue I encountered while trying to set up my project with Cobra. By default, `cobra-cli` [deletes](https://github.com/spf13/cobra-cli/issues/88) everything in `main.go` when you `init` a project. Yikes.

Luckily I didn't have any significant unstaged changes, so [nothing of value was lost](https://git-scm.com/).

Although there was a [pull request](https://github.com/spf13/cobra-cli/pull/68) to fix the issue, the complete lack of a response made Cobra seem like a ghost town; indeed, I was *very* spoiled by the transparency and active development of [clap](https://github.com/clap-rs/clap), so much so that it was the deciding factor for me to migrate go-thumbnailer to a Rust code base.

## Rewriting it in Rust

Rewriting software is [not something you should generally do](https://www.joelonsoftware.com/2000/04/06/things-you-should-never-do-part-i/), especially for larger software. Luckily, the architecture of go-thumbnailer made it simple enough that the migration was fairly straight-forward.

The main blocker was finding an image processing library that would be able to create thumbnails similar to govips. In particular, I assumed that it would be non-trivial to implement `InterestingCentre` in other libraries.

Enter: [libvips-rust-bindings](https://github.com/olxgroup-oss/libvips-rust-bindings).

### Working with Bindings to C

"Great!" I thought. "I already use libvips with govips, so I just need to migrate my existing code base to *libvips-rust-bindings!"*

As it turns out, there's a reason why Rust bindings aren't mentioned in the [libvips README](https://github.com/libvips/libvips#introduction).

### Who needs documentation anyway?

[libvips-rust-bindings](https://docs.rs/libvips/1.5.1/libvips/index.html) was one of the many [undocumented crates](https://crates.io/search?q=libvips) I went through trying to get something working. This was the library that ultimately worked for me, however it came at a cost.

After digging through the 23,036-line [`ops.rs`](https://github.com/olxgroup-oss/libvips-rust-bindings/blob/b43be23b8d4643a97f898bdb4c2e618ecd5eedae/src/ops.rs) with my handy tool [ripgrep](https://github.com/BurntSushi/ripgrep), I found the function that I needed to call in order to have feature parity with govips. Progress!

```rust
use libvips::{ops, VipsImage, VipsApp};
use libvips::ops::Interesting;

fn main() {
    let app = VipsApp::new("Test Libvips", false).expect("Cannot initialize libvips");

    app.concurrency_set(2);

    let image = VipsImage::new_from_file("cover.png").unwrap();

    let options = ops::ThumbnailImageOptions {
        crop: Interesting::Centre,
        ..ops::ThumbnailImageOptions::default()
    };

    ops::thumbnail_image_with_opts(&image, 128, &options).unwrap();
}
```

There was only one problem: the code panicked at runtime.

### Panics, Panics Everywhere

With the core library itself panicking, I had to dig deep into the [unsafe](https://doc.rust-lang.org/nomicon/meet-safe-and-unsafe.html) Rust bindings in order to find out what the issue was.

After some testing, it turned out that libvips only panicked when given custom `ThumbnailImageOptions`, which was necessary for the `Interesting::Centre` functionality we wanted earlier.

### Patching things up

Since the `thumbnail_image` function worked, I wrote a [patch](https://git-scm.com/docs/git-diff) to adjust its options based on my needs for the thumbnailer.

```diff
diff --git a/libvips/src/ops.rs b/libvips/src/ops.rs
index b803f2e..afb1578 100644
--- a/libvips/src/ops.rs
+++ b/libvips/src/ops.rs
@@ -17519,7 +17519,13 @@ pub fn thumbnail_image(inp: &VipsImage, width: i32) -> Result<VipsImage> {
         let width_in: i32 = width;
         let mut out_out: *mut bindings::VipsImage = null_mut();

-        let vips_op_response = bindings::vips_thumbnail_image(inp_in, &mut out_out, width_in, NULL);
+        let height_in: i32 = 512;
+        let height_in_name = utils::new_c_string("height")?;
+
+        let crop_in: i32 = Interesting::Centre as i32;
+        let crop_in_name = utils::new_c_string("crop")?;
+
+        let vips_op_response = bindings::vips_thumbnail_image(inp_in, &mut out_out, width_in, height_in_name.as_ptr(), height_in, crop_in_name.as_ptr(), crop_in, NULL);
         utils::result(
             vips_op_response,
             VipsImage { ctx: out_out },
```

Unfortunately, [`cargo`](https://doc.rust-lang.org/cargo/reference/overriding-dependencies.html) doesn't include a nice way to patch crates we depend on, a downgrade compared to other package managers like [Nix](https://nixos.org/manual/nix/stable/) with [`fetchpatch`](https://github.com/NixOS/nixpkgs/blob/23.05/doc/builders/fetchers.chapter.md#fetchpatch-fetchpatch).

With this patch and relevant adjustments to `main.rs`, the resulting binary finally produces an output thumbnail successfully. Nice!

```rust
use libvips::{ops, VipsImage, VipsApp};

fn main() {
    let app = VipsApp::new("Test Libvips", false).expect("Cannot initialize libvips");

    app.concurrency_set(2);

    let image = VipsImage::new_from_file("cover.png").unwrap();

    let thumbnail = ops::thumbnail_image(&image, 512).unwrap();

    match ops::vipssave(&thumbnail, "output.png") {
        Err(_) => println!("error: {}", app.error_buffer().unwrap()),
        Ok(_) => println!("Great Success!")
    }
}
```

There's just one *tiny* problem: This is a huge hack that will only get worse as we introduce things like variable image sizes.

### Bye-bye libvips

Remember when I was talking about how `cargo` doesn't have a native way to patch crates? I don't exactly want to vendor 20,000+ lines of unsafe Rust into the main repository, and I'd rather not maintain a separate fork of libvips.

Instead of libvips, I decided to give the most popular library [`image`](https://github.com/image-rs/image) a try, and boy was I impressed!

```rust
use image::*;
use imageops::FilterType;

fn main() {
    // Use the open function to load an image from a Path.
    // `open` returns a `DynamicImage` on success.
    let img = image::open("cover.png").unwrap();
    let new_img = DynamicImage::resize_to_fill(&img, 512, 512, FilterType::Nearest);

    // The dimensions method returns the images width and height.
    println!("dimensions {:?}", new_img.dimensions());

    // Write the contents of this image to the Writer in PNG format.
    new_img.save("test.png").unwrap();
}
```

No more needing to pollute the code base with thousands of lines of unsafe Rust code! Additionally, libvips was no longer a requirement, making it easier for users to build the project downstream.

### Bringing in the clap

Now that we have the image processing sorted out, we can *finally* start creating [the thumbnailer part](https://specifications.freedesktop.org/thumbnail-spec/thumbnail-spec-latest.html). Unlike the [Go variant](#architecting-the-program), *clap* makes it easy to create an interface where users don't have to worry about the order of arguments.

```rust
use clap::Parser;
use cli::Cli;
use image::*;
use imageops::FilterType;

mod cli;

fn main() {
    let Cli { size, input_directory, output_file } = Cli::parse();

    let img = image::open(input_directory + "/cover.png").unwrap();
    let new_img = DynamicImage::resize_to_fill(&img, size, size, FilterType::Nearest);

    new_img.save(output_file).unwrap();
}
```

### Adding JPEG support

Alright this is cool, but the old Go version supported `cover.jpg` as well. While we're at it, let's turn `input_directory` into a `PathBuf` instead of a `String` to help us guarantee that a path exists.

```rust
use clap::Parser;
use cli::Cli;
use image::*;
use imageops::FilterType;

mod cli;

fn main() {
    let Cli { size, input_directory, output_file } = Cli::parse();

    if let Some(input_directory) = input_directory.to_str() {
        if let Ok(img) = image::open(input_directory.to_owned() + "/cover.png") {
            DynamicImage::resize_to_fill(&img, size, size, FilterType::Nearest).save(output_file).unwrap();
            return
        }

        if let Ok(img) = image::open(input_directory.to_owned() + "/cover.jpg") {
            DynamicImage::resize_to_fill(&img, size, size, FilterType::Nearest).save(output_file).unwrap();
            return
        }
    }
}
```

We just reached feature parity with the old Go program, and with roughly half the number of lines in `main()`.

## Implementing Customization

Unlike the previous implementation, I decided that I would allow customization in the new program. This would let users do things like define exactly which files they'd want to be considered by the thumbnailer.

In order to achieve this, I introduced the concept of *rules* and *strategies*. Additionally, I let users declaratively configure the thumbnailer with [TOML](https://toml.io/).

### Setting the Rules

[Serde](https://serde.rs/) makes serializing and deserializing Rust data structures easy. We use Serde behind the scenes with clap, but we can use it with TOML as well.

```rust
#[derive(Debug, Deserialize)]
pub struct Config {
    pub rules: Option<Vec<Rule>>,
}

#[derive(Debug, Deserialize)]
pub struct Rule {
    pub path: String,
    pub strategy: String,
    pub files: Option<Vec<String>>,
    pub filter: Option<String>,
}
```

A *config* file has *rules*, and each rule consists of a *path* and a *strategy*. The files to check (e.g., `cover.webp`) and the filter to use (`nearest`, etc.) can also be specified.

### Defining Strategies

Now for the meat of things: users can customize how they want the thumbnailer to parse a specified path with *strategies*.

This enables endless possibilities when it comes to *how* the thumbnails are created. For example, one can create a strategy that combines multiple images inside a directory when generating a thumbnail. For my use case, I created the *cover* strategy.


```rust
use crate::cli::Cli;
use crate::log;
use clap::Parser;
use image::imageops::FilterType;
use image::DynamicImage;

/// The cover strategy looks for the first image in a list of potential files.
/// If one is found, that image is used as the thumbnail of the directory.
pub fn cover(input_directory: String, files: Vec<String>, filter: FilterType) {
    #[rustfmt::skip]
    let Cli { size, output_file, .. } = Cli::parse();

    for file in files {
        let potential_image = input_directory.to_owned() + "/" + &file;

        if let Ok(img) = image::open(&potential_image) {
            log(&("SUCCESS: Using ./".to_owned() + &file + " for " + &input_directory + "/"));

            #[rustfmt::skip]
            DynamicImage::resize_to_fill(&img, u32::from(size), u32::from(size), filter).save(output_file).unwrap();

            return;
        }
    }
}
```

### Putting it all together

Whew, we took an existing Go program and rewrote it in Rust! Now all that's left is to call it something other than go-thumbnailer. I chose [*thud*](/projects/thud/) since it's an existing word, has no packages with the same name, and is an acronym for _**thu**mbnail **d**irectory_.

Here's the final `main.rs`:

{% wide_container() %}

```rust
use clap::Parser;
use cli::Cli;
use thud::get_filter;
use thud::get_home_config;
use thud::log;

mod cli;
mod strategy;

/// The main function is in charge of determining whether a given input directory has a specified
/// rule. If so, it applies the strategy specified by that rule.
fn main() {
    #[rustfmt::skip]
    let Cli { input_directory, .. } = Cli::parse();

    let default_files = vec!["cover.png".to_string(), "cover.jpg".to_string()];

    if let Some(input_directory_str) = input_directory.to_str() {
        if let Some(config) = get_home_config() {
            log("INFO: Using ~/.config/thud/config.toml");

            if let Some(rules) = config.rules {
                for rule in rules {
                    if input_directory.starts_with(&rule.path) {
                        #[rustfmt::skip]
                        log(&("RULES: Assigned ".to_owned() + input_directory_str + "/ to " + &rule.path));

                        let filter = rule.filter.unwrap_or("lanczos3".to_string());
                        let files = rule.files.unwrap_or(default_files);

                        match rule.strategy.as_str() {
                            #[rustfmt::skip]
                            "cover" => strategy::cover(input_directory_str.to_owned(), files, get_filter(&filter)),

                            &_ => log("warning: invalid strategy, skipping"),
                        }

                        return;
                    }
                }
            }

            return;
        }

        log("INFO: Using default cover.{png,jpg}");

        #[rustfmt::skip]
        strategy::cover(input_directory_str.to_owned(), default_files, get_filter("lanczos3"));
    }
}
```

{% end %}

## Future Work

Reading a config file on the operating system every time the user wants a thumbnail is *probably* expensive. At least, it's more expensive than not reading files on the file system at all.

On the other hand, this cost seems insignificant compared to the process of reading many different image files during the thumbnailing process. It would be useful to quantify the extent of how certain file operations in Rust affect the system's operation as a whole, which would justify whether or not a daemon would be useful in this case.

## Now You

Did you learn something new from this blog post? Want to teach me something I don't know? Or are you interested in working together? Connect with me with the icons below.
