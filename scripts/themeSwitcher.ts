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

// Retrieve theme from either the localStorage or the data-theme attribute on the document element.
let currentTheme = localStorage.getItem("theme") || document.documentElement.getAttribute("data-theme")

// Function to set theme
function setTheme(theme: string, saveToLocalStorage = false) {
  document.documentElement.setAttribute("data-theme", theme)
  currentTheme = theme

  if (saveToLocalStorage) {
    localStorage.setItem("theme", theme)
  }

  // Dispatch a custom event for comment systems.
  const event = new CustomEvent("themeChanged", {
    detail: { theme: theme },
  })
  window.dispatchEvent(event)
}

// Function to switch between dark and light themes.
function switchTheme(event: Event) {
  // Set the new theme based on the current theme.
  const newTheme = currentTheme === "dark" ? "light" : "dark"
  setTheme(newTheme, true) // Save the theme to localStorage when the user changes it.

  const themeSwitcher: HTMLElement = event.target as HTMLElement
  themeSwitcher.setAttribute("aria-pressed", currentTheme === "dark" ? "true" : "false")
}

// Update the theme based on system preference if the user hasn't manually changed the theme.
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => {
  const newTheme = e.matches ? "dark" : "light"
  setTheme(newTheme)
})

export default function themeSwitcher() {
  const themeSwitcher = document.querySelector(".theme-switcher")

  themeSwitcher?.addEventListener("click", switchTheme, false)
  themeSwitcher?.setAttribute("role", "button")
  themeSwitcher?.setAttribute("aria-label", "Toggle dark mode")
  themeSwitcher?.setAttribute("aria-pressed", currentTheme === "dark" ? "true" : "false")
}
