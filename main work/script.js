const navMenu = document.getElementById("nav");
const closeMenuBtn = document.getElementById("closebtn")
const openMenuBtn = document.getElementById("menubtn")
const mobileMenuBg = document.getElementById("mobile-menu-bg")
const mobileBodyBg = document.body
console.log(mobileBodyBg)
// console.log(closeMenu,navMenu,openMenuBtn)

//opening nav menu function
openMenuBtn.addEventListener("click", openMenu)
function openMenu() {
        navMenu.classList.add("showMenu")
        mobileMenuBg.classList.add("mobile-menu-bg")
        mobileBodyBg.classList.add("mobile-body-bg")
}

//closing nav menu function
closeMenuBtn.addEventListener("click", closeMenu)
mobileMenuBg.addEventListener("click", closeMenu)
function closeMenu() {
        navMenu.classList.remove("showMenu")
        mobileMenuBg.classList.remove("mobile-menu-bg")
        mobileBodyBg.classList.remove("mobile-body-bg")
}
