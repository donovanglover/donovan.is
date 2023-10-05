// MIT License
//
// Copyright (C) 2023 Donovan Glover
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

import "@hotwired/turbo"
import Turn from "@domchristie/turn"
import copyToClipboard from "./copyToClipboard"
import decodeMail from "./decodeMail"
import footnoteBacklinks from "./footnoteBacklinks"
import photoswipe from "./photoswipe"
import tableOfContents from "./tableOfContents"
import removeExistingHighlight from "./tableOfContents"
import themeSwitcher from "./themeSwitcher"

document.addEventListener("DOMContentLoaded", () => {
  Turn.start()
  document.getElementById("button-container")?.classList.remove("hidden")
})

document.addEventListener("turbo:load", () => {
  copyToClipboard()
  decodeMail()
  footnoteBacklinks()
  photoswipe()
  tableOfContents()
  themeSwitcher()
})

document.addEventListener("turbo:before-render", () => {
  removeExistingHighlight()
  document.getElementById("button-container")?.remove()
})

document.addEventListener("turn:enter", () => {
  document.getElementById("button-container")?.classList.remove("hidden")
})
