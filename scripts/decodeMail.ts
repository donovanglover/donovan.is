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
