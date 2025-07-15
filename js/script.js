const burgerMenuBtn = document.querySelector("#burger-menu-btn")
const burgerMenu = document.querySelector("#burger-menu")
const burger = document.querySelector('.burger')

burgerMenuBtn.addEventListener("click", () => {
    burgerMenu.style.left = "0px"
    
})

burger.addEventListener("click", () => {
    burgerMenu.style.left = "-400px"
})

