import WOW from 'wow.js';
// burger-menu
const burgerMenu = document.querySelector('.js-menu');
const page = document.body;

function openMenu() {
	burgerMenu.classList.add('js-menu--open');
	page.classList.add('stop-scroll');
}
function closeMenu() {
	burgerMenu.classList.remove('js-menu--open');
	page.classList.remove('stop-scroll');
}

document.addEventListener('click', (e) => {
	if (e.target.closest('.menu__link') || e.target.closest('.js-menu-close'))
		closeMenu();
	if (e.target.closest('.js-burger')) openMenu();
});
document.addEventListener('keydown', (e) => {
	if (e.code === 'Escape') closeMenu();
});
// animation
new WOW().init();
