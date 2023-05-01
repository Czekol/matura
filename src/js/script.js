// HAMBURGER MENU
const body = document.querySelector('body');
const burgerBtn = document.querySelector('.nav__burger-btn');
const navMobile = document.querySelector('.nav__mobile');
const mobileNavLinks = document.querySelectorAll('.nav__mobile-link');
const navShadow = document.querySelector('.nav__shadow');
// ALL BTNS IN OFFER
const offerBtns = document.querySelectorAll('.offers__card-btn');
// CURRENT YEAR IN FOOTER
const footerYear = document.querySelector('.footer__current-year');
// HANDLE-OBSERVER
const nav = document.querySelector('.nav');
const whiteSections = document.querySelectorAll('.section');
// SCROLLSPY
// const scrollspySections = document.querySelectorAll('.scrollspySection');
// const desktopNavLinks = document.querySelectorAll('.nav__desktop-link');
const navToggle = () => {
	navMobile.classList.toggle('show-links');
	navShadow.classList.toggle('show-shadow');
	burgerBtn.classList.toggle('rotate-burger-btn');
	body.classList.toggle('stop-scrolling');
};

mobileNavLinks.forEach(link => link.addEventListener('click', navToggle));

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

// --- ---

const handleObserver = () => {
	const currentSection = window.scrollY;

	whiteSections.forEach(section => {
		if (section.classList.contains('white-section') && section.offsetTop <= currentSection + nav.clientHeight) {
			nav.classList.add('border-bottom');
		} else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection + nav.clientHeight) {
			nav.classList.remove('border-bottom');
		}
	});
};

// --- ---

// const scrollSpy = () => {
// 	scrollspySections.forEach(section => {
// 		let top = window.scrollY;
// 		let offset = section.offsetTop - 150;
// 		let height = section.offsetHeight;
// 		let id = section.getAttribute('id');

// 		if (top >= offset && top < offset + height) {
// 			desktopNavLinks.forEach(link => {
// 				link.classList.remove('active');
// 				document.querySelector(`.nav__desktop-link[href*=${id}]`).classList.add('active');

// 				// document.querySelector('.nav__desktop-link[href*='+id+']').classList.add('active');

// 			});
// 		}
// 	});
// };

burgerBtn.addEventListener('click', navToggle);
navShadow.addEventListener('click', navToggle);
offerBtns.forEach(btn => btn.addEventListener('click', selectingOffer));
window.addEventListener('scroll', handleObserver);

// window.addEventListener('scroll', scrollSpy);
