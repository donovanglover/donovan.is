function decodeBase64(encodedString: string) {
  try {
    // Can't use atob() directly because it doesn't support non-ascii characters.
    // And non-ascii characters are allowed in email addresses and domains.
    // See https://en.wikipedia.org/wiki/Email_address#Internationalization
    // Code below adapted from Jackie Han: https://stackoverflow.com/a/64752311
    const byteString = atob(encodedString)

    // Convert byteString to an array of char codes.
    const charCodes = [...byteString].map(char => char.charCodeAt(0))

    // Use TypedArray.prototype.set() to copy the char codes into a Uint8Array.
    const bytes = new Uint8Array(charCodes.length)
    bytes.set(charCodes)

    const decoder = new TextDecoder("utf-8")
    return decoder.decode(bytes)
  } catch (e) {
    console.error("Failed to decode Base64 string: ", e)
    return null
  }
}

// Utility function: Update href of an element with a decoded email.
function updateEmailHref(element: HTMLAnchorElement) {
  const encodedEmail = element.getAttribute("data-encoded-email")
  const decodedEmail = encodedEmail && decodeBase64(encodedEmail)

  if (decodedEmail) {
    element.setAttribute("href", `mailto:${decodedEmail}`)
  } else {
    // If the decoding fails, hide the email link.
    element.style.display = "none"
  }
}

export default function decodeMail() {
  // Fetch and process email elements with the "data-encoded-email" attribute.
  const encodedEmailElements: NodeListOf<HTMLAnchorElement> = document.querySelectorAll("[data-encoded-email]")
  encodedEmailElements.forEach(updateEmailHref)
}
