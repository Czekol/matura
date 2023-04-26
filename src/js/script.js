// HAMBURGER MENU
const burgerBtn = document.querySelector('.nav__burger-btn');
const mobileLinks = document.querySelector('.nav__mobile-links');
const navShadow = document.querySelector('.nav__shadow');
// CURRENT YEAR IN FOOTER
const footerYear = document.querySelector('.footer__current-year');

const navToggle = () => {
	mobileLinks.classList.toggle('show-links');
	navShadow.classList.toggle('show-shadow');
	burgerBtn.classList.toggle('rotate-burger-btn');
};

// --- ---  

const handleCurrentYear = () => {
	const currentYear = new Date().getFullYear();
    footerYear.textContent = currentYear
};

handleCurrentYear();

burgerBtn.addEventListener('click', navToggle);
navShadow.addEventListener('click', navToggle);
