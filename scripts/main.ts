import "@hotwired/turbo"
import decodeMail from "./decodeMail"
import copyToClipboard from "./copyToClipboard"

document.addEventListener("turbo:load", () => {
  decodeMail()
  copyToClipboard()
})
