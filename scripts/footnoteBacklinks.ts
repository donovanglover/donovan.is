// Copyright (C) 2023 Donovan Glover
//
// This software is based on tabi:
//
// Copyright (C) 2023 Óscar Fernández
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

// Assign unique IDs to the footnote references based on their hashes.
function assignReferenceIds() {
  const references = document.querySelectorAll(".footnote-reference")
  for (const ref of references) {
    const element = ref.children[0]

    if (element instanceof HTMLAnchorElement) {
      ref.id = `ref:${element.hash.substring(1)}`
    }
  }
}

// Create backlinks for each footnote definition if a corresponding reference exists.
function createFootnoteBacklinks() {
  const footnotes = document.querySelectorAll(".footnote-definition")
  for (const footnote of footnotes) {
    const backlinkId = `ref:${footnote.id}`

    // Skip if there's no corresponding reference in the text (i.e. the footnote doesn't reference anything).
    if (!document.getElementById(backlinkId)) continue

    const backlink = document.createElement("a")
    backlink.href = `#${backlinkId}`
    backlink.className = "footnote-backlink"
    backlink.textContent = "↩"
    footnote.lastElementChild?.appendChild(backlink)
  }
}

export default function footnoteBacklinks() {
  assignReferenceIds()
  createFootnoteBacklinks()
}
