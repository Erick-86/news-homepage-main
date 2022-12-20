const navMenu = document.getElementById("nav");
const closeMenuBtn = document.getElementById("closebtn")
const openMenuBtn = document.getElementById("menubtn")
// console.log(closeMenu,navMenu,openMenuBtn)

//opening nav menu function
openMenuBtn.addEventListener("click", openMenu)
function openMenu() {
        navMenu.classList.add("showMenu")
}

//closing nav menu function
closeMenuBtn.addEventListener("click", closeMenu)
function closeMenu() {
        navMenu.classList.remove("showMenu")
}
