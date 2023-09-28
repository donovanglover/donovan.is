import PhotoSwipe from "photoswipe"
import PhotoSwipeLightbox from "photoswipe/lightbox"

function createLinkFromImage(image: HTMLImageElement): HTMLAnchorElement {
  const link = document.createElement("a")

  link.target = "_blank"
  link.href = image.src
  link.setAttribute("data-pswp-src", `${image.src}`)
  link.setAttribute("data-pswp-width", `${image.getAttribute("width")}`)
  link.setAttribute("data-pswp-height", `${image.getAttribute("height")}`)
  link.classList.add("photoswipe", "no-hover-padding")

  return link
}

function wrapElement(elementToWrap: HTMLElement, wrapper: HTMLElement) {
  elementToWrap.parentNode?.insertBefore(wrapper, elementToWrap)
  wrapper.appendChild(elementToWrap)
}

export default function photoswipe() {
  const images: NodeListOf<HTMLImageElement> = document.querySelectorAll("article img")

  images.forEach((image: HTMLImageElement) => {
    wrapElement(image, createLinkFromImage(image))
  })

  if (images) {
    const lightbox = new PhotoSwipeLightbox({
      gallery: "article",
      children: ".photoswipe",
      pswpModule: PhotoSwipe,
    })

    lightbox.init()
  }
}
