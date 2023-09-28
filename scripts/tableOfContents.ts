function removeExistingHighlight() {
  const highlighted = document.getElementsByClassName("toc-highlight")

  for (const element of highlighted) {
    element.classList.remove("toc-highlight")
  }
}

function highlightHeading(hash?: string) {
  removeExistingHighlight()

  if (hash || window.location.hash) {
    document.getElementById(hash?.substring(1) ?? window.location.hash.substring(1))?.classList.add("toc-highlight")
  }
}

function closeOnClick() {
  const toggle: HTMLInputElement = document.getElementById("toc-toggle") as HTMLInputElement
  const links: NodeListOf<HTMLAnchorElement> = document.querySelectorAll(".toc-container a")

  links.forEach(link => {
    link.addEventListener("click", () => {
      toggle.checked = false
      highlightHeading(link.hash)
    })
  })
}

function handleAnchorClicks() {
  const links: NodeListOf<HTMLAnchorElement> = document.querySelectorAll(".header-anchor")

  links.forEach(link => {
    link.addEventListener("click", () => {
      highlightHeading(link.hash)
    })
  })
}

export default function tableOfContents() {
  highlightHeading()
  handleAnchorClicks()
  closeOnClick()
}
