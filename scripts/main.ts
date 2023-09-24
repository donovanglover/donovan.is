import "@hotwired/turbo"
import copyToClipboard from "./copyToClipboard"
import decodeMail from "./decodeMail"

document.addEventListener("turbo:load", () => {
  decodeMail()
  copyToClipboard()
})
