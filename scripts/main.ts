import "@hotwired/turbo"
import decodeMail from "./decodeMail"

document.addEventListener("turbo:load", function () {
  decodeMail()
})
