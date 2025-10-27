const DOWNLOAD_URL =
  "https://github.com/NowyCodes/Website-Downloader/releases/latest/download/website-downloader-source.zip"

const downloadPrimary = document.getElementById("downloadPrimary")
const modal = document.getElementById("downloadModal")
const modalClose = document.getElementById("modalClose")
const downloadZip = document.getElementById("downloadZip")
const themeToggle = document.getElementById("themeToggle")

let lastFocused = null

function initTheme() {
  const savedTheme = localStorage.getItem("theme") || "light"
  document.documentElement.setAttribute("data-theme", savedTheme)
  updateThemeToggleIcon(savedTheme)
}

function updateThemeToggleIcon(theme) {
  themeToggle.textContent = theme === "dark" ? "☀️" : "🌙"
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme") || "light"
  const newTheme = currentTheme === "dark" ? "light" : "dark"
  document.documentElement.setAttribute("data-theme", newTheme)
  localStorage.setItem("theme", newTheme)
  updateThemeToggleIcon(newTheme)
}

themeToggle.addEventListener("click", toggleTheme)

function openModal() {
  lastFocused = document.activeElement
  modal.setAttribute("aria-hidden", "false")
  modalClose.focus()
  document.body.style.overflow = "hidden"
  document.addEventListener("keydown", handleKeydown)
}

function closeModal() {
  modal.setAttribute("aria-hidden", "true")
  document.body.style.overflow = ""
  document.removeEventListener("keydown", handleKeydown)
  if (lastFocused) lastFocused.focus()
}

function handleKeydown(e) {
  if (e.key === "Escape") closeModal()
}

downloadPrimary.addEventListener("click", openModal)
modalClose.addEventListener("click", closeModal)
modal.querySelectorAll("[data-close]").forEach((el) => el.addEventListener("click", closeModal))

downloadZip.addEventListener("click", () => {
  window.location.href = DOWNLOAD_URL
  closeModal()
})

// Show modal once for first-time visitors
if (!localStorage.getItem("downloadPromptShown")) {
  setTimeout(() => {
    openModal()
    localStorage.setItem("downloadPromptShown", "1")
  }, 3000)
}

initTheme()
