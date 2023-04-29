// HAMBURGER MENU
const body = document.querySelector('body');
const burgerBtn = document.querySelector('.nav__burger-btn');
const navMobile = document.querySelector('.nav__mobile-links');
const mobileNavLinks = document.querySelectorAll('.nav__mobile-links-link');
const navShadow = document.querySelector('.nav__shadow');
// ALL BTNS IN OFFER
const offerBtns = document.querySelectorAll('.offers__card-btn');
// CURRENT YEAR IN FOOTER
const footerYear = document.querySelector('.footer__current-year');

const navToggle = () => {
	navMobile.classList.toggle('show-links');
	navShadow.classList.toggle('show-shadow');
	burgerBtn.classList.toggle('rotate-burger-btn');
	body.classList.toggle('stop-scrolling');

};

mobileNavLinks.forEach(link => link.addEventListener('click', navToggle))
// --- ---

const selectingOffer = e => {
	offerBtns.forEach(btn => btn.classList.remove('offers__card-btn--cta'));
	e.target.classList.add('offers__card-btn--cta');
};

// --- ---

const handleCurrentYear = () => {
	const currentYear = new Date().getFullYear();
	footerYear.textContent = currentYear;
};

handleCurrentYear();

burgerBtn.addEventListener('click', navToggle);
navShadow.addEventListener('click', navToggle);
offerBtns.forEach(btn => btn.addEventListener('click', selectingOffer));
