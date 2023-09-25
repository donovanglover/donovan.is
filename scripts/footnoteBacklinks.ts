// MIT License
// Copyright (C) 2023 Donovan Glover
// Copyright (C) 2023 Óscar Fernández

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
