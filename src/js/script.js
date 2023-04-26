// HAMBURGER MENU
const burgerBtn = document.querySelector('.nav__burger-btn')
const mobileLinks = document.querySelector('.nav__mobile-links')
const navShadow = document.querySelector('.nav__shadow')
// ALL BTNS IN OFFER
const offerBtns = document.querySelectorAll('.offers__card-btn')
// CURRENT YEAR IN FOOTER
const footerYear = document.querySelector('.footer__current-year')

const navToggle = () => {
	mobileLinks.classList.toggle('show-links')
	navShadow.classList.toggle('show-shadow')
	burgerBtn.classList.toggle('rotate-burger-btn')
}

// --- ---

const selectingOffer = e => {
	offerBtns.forEach(btn => btn.classList.remove('offers__card-btn--cta'))
	e.target.classList.add('offers__card-btn--cta')
}

// --- ---

const handleCurrentYear = () => {
	const currentYear = new Date().getFullYear()
	footerYear.textContent = currentYear
}

handleCurrentYear()

burgerBtn.addEventListener('click', navToggle)
navShadow.addEventListener('click', navToggle)
offerBtns.forEach(btn => btn.addEventListener('click', selectingOffer))