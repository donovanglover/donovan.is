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
