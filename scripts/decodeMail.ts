function decodeBase64(encodedString: string) {
  try {
    const byteString = atob(encodedString)
    const charCodes = [...byteString].map(char => char.charCodeAt(0))
    const bytes = new Uint8Array(charCodes.length)
    const decoder = new TextDecoder("utf-8")

    bytes.set(charCodes)
    return decoder.decode(bytes)
  } catch (e) {
    console.error("Failed to decode Base64 string: ", e)
    return null
  }
}

function updateEmailHref(element: HTMLAnchorElement) {
  const encodedEmail = element.getAttribute("data-encoded-email")
  const decodedEmail = encodedEmail && decodeBase64(encodedEmail)

  if (decodedEmail) {
    element.setAttribute("href", `mailto:${decodedEmail}`)
  } else {
    element.style.display = "none"
  }
}

export default function decodeMail() {
  const encodedEmailElements: NodeListOf<HTMLAnchorElement> = document.querySelectorAll("[data-encoded-email]")
  encodedEmailElements.forEach(updateEmailHref)
}
