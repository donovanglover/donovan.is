function removeExistingHighlight() {
  const highlighted = document.getElementsByClassName("toc-highlight")

  for (const element of highlighted) {
    element.classList.remove("toc-highlight")
  }
}

function highlightHeading(id?: string) {
  removeExistingHighlight()

  if (!id && !window.location.hash) return

  document.getElementById(id ?? window.location.hash.substring(1))?.classList.add("toc-highlight")
}

function closeOnClick() {
  const toggle: HTMLInputElement = document.getElementById("toc-toggle") as HTMLInputElement

  document.querySelectorAll(".toc-container a").forEach(link => {
    link.addEventListener("click", () => {
      toggle.checked = false
      highlightHeading()
    })
  })
}

function handleAnchorClicks() {
  const links: NodeListOf<HTMLAnchorElement> = document.querySelectorAll(".header-anchor")

  links.forEach(link => {
    link.addEventListener("click", () => {
      highlightHeading(link.hash.substring(1))
    })
  })
}

export default function tableOfContents() {
  highlightHeading()
  handleAnchorClicks()
  closeOnClick()
}
