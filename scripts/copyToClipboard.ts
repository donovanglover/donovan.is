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

const changeIcon = (copyDiv: HTMLDivElement, className: string) => {
  copyDiv.classList.add(className)
  setTimeout(() => copyDiv.classList.remove(className), 2500)
}

const addCopyEventListenerToDiv = (copyDiv: HTMLDivElement, block: HTMLPreElement) => {
  copyDiv.addEventListener("click", () => copyCodeAndChangeIcon(copyDiv, block))
}

const copyCodeAndChangeIcon = async (copyDiv: HTMLDivElement, block: HTMLPreElement) => {
  const code = block.querySelector("table") ? getTableCode(block) : getNonTableCode(block)
  try {
    await navigator.clipboard.writeText(code)
    changeIcon(copyDiv, "checked")
  } catch (error) {
    changeIcon(copyDiv, "error")
  }
}

const getNonTableCode = (block: HTMLPreElement) => {
  return [...block.querySelectorAll("code")].map(code => code.textContent).join("")
}

const getTableCode = (block: HTMLPreElement) => {
  return [...block.querySelectorAll("tr")]
    .map(row => {
      const lastChild: HTMLTableCellElement | null = row.querySelector("td:last-child")

      lastChild?.innerText ?? ""
    })
    .join("")
}

export default function copyToClipboard() {
  document.querySelectorAll("pre").forEach(block => {
    const copyDiv = document.createElement("div")
    copyDiv.className = "copy-code"
    block.prepend(copyDiv)
    addCopyEventListenerToDiv(copyDiv, block)
  })
}
