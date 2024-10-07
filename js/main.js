
let menuicon = document.querySelector("#menu-icon")
console.log(menuicon)

let nav = document.querySelector(".nav")
console.log(nav)

menuicon.addEventListener("click", (eo) => {
  menuicon.classList.toggle('bx-x')
  nav.classList.toggle('open')
})


const btn = document.getElementById("btn")

btn.addEventListener("click", (eo) => {
  
location.href = "/desc.html"

})





