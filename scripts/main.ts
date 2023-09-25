// MIT License
// Copyright (C) 2023 Donovan Glover

import "@hotwired/turbo"
import copyToClipboard from "./copyToClipboard"
import decodeMail from "./decodeMail"
import footnoteBacklinks from "./footnoteBacklinks"
import themeSwitcher from "./themeSwitcher"

document.addEventListener("turbo:load", () => {
  copyToClipboard()
  decodeMail()
  footnoteBacklinks()
  themeSwitcher()
})
