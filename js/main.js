const menuBtn = document.querySelector(".menu-btn")
const menuItems = document.querySelector(".menu-items")
const header = document.querySelector(".header")

//main toggle
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open")
  menuItems.classList.toggle("open")
  header.classList.toggle("open")
})
menuItems.addEventListener("click", () => {
  menuBtn.classList.toggle("open")
  menuItems.classList.toggle("open")
  header.classList.toggle("open")
})
