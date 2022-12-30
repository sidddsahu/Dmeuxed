const menu = document.querySelector(".menu")
const overlay = document.querySelector(".overlay")


menu.addEventListener("click", function(){
    overlay.style.transform = "translatey(-0%)"
})


const cross = document.querySelector(".cross")
const white = document.querySelector(".overlay")


cross.addEventListener("click", function(){
    white.style.transform =  "translatey(-110%)"
})


 const talking = document.querySelector(".talking")
 const warner = document.querySelector(".warner")

 talking.addEventListener("click",function(){
    warner.style.display = "initial"
 })