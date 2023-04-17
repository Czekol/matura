const burgerBtn = document.querySelector('.nav__burger-btn')
const mobileLinks = document.querySelector('.nav__mobile-links')
const navShadow = document.querySelector('.nav__shadow')

const navToggle = () => {
    mobileLinks.classList.toggle('show-links')
    navShadow.classList.toggle('show-shadow')
    burgerBtn.classList.toggle('rotate-burger-btn')
}
burgerBtn.addEventListener('click',navToggle)
navShadow.addEventListener('click',navToggle)