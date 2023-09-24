// MIT License
// Copyright (C) 2023 Donovan Glover
// Copyright (C) 2023 Óscar Fernández

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
function switchTheme() {
  // Set the new theme based on the current theme.
  const newTheme = currentTheme === "dark" ? "light" : "dark"
  setTheme(newTheme, true) // Save the theme to localStorage when the user changes it.
}

// Update the theme based on system preference if the user hasn't manually changed the theme.
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => {
  const newTheme = e.matches ? "dark" : "light"
  setTheme(newTheme)
})

export default function themeSwitcher() {
  const themeSwitcher = document.querySelector(".theme-switcher")

  themeSwitcher?.addEventListener("click", switchTheme, false)
}
