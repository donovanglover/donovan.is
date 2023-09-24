// MIT License
// Copyright (C) 2023 Donovan Glover

import "@hotwired/turbo"
import copyToClipboard from "./copyToClipboard"
import decodeMail from "./decodeMail"
import themeSwitcher from "./themeSwitcher"

document.addEventListener("turbo:load", () => {
  copyToClipboard()
  decodeMail()
  themeSwitcher()
})
