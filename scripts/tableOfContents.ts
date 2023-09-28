export default function tableOfContents() {
  const toggle: HTMLInputElement = document.getElementById("toc-toggle") as HTMLInputElement

  document.querySelectorAll(".toc-container a").forEach(link => {
    link.addEventListener("click", () => {
      toggle.checked = false
    })
  })
}
