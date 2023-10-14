import scrollLock from 'scroll-lock';
import { menuToggle } from "../../js/libs/menuToggle";

(() => {
	const header = document.querySelector('.header');
	if(!header) return;
	
	const vh = window.visualViewport.height * 0.01;
	const navi = header.querySelector('.header__menu');
	const toggles = header.querySelectorAll('.header__toggle, .header__close');
	
	const menu = menuToggle(navi, toggles, {
		scrollLock: scrollLock,
		omitToClose: '.modal',
		class: 'opened'
	});

	window.addEventListener('scroll', () => {
		header.classList[window.scrollY > 30 ? 'add': 'remove']('header_filled');
	});

	// открытие и закрытие меню, свайпом на мобильных устройствах
	navi.addEventListener('swiped-left', (e) => menu.menuClose(e));

	// решение проблемы 100vh для меню на мобильных устройствах
	document.documentElement.style.setProperty('--vh', `${vh}px`);
	
	window.visualViewport.addEventListener('resize', (e) => {
		requestAnimationFrame(() => {
			document.documentElement.style.setProperty('--vh', `${e.target.height * 0.01}px`);
		});
	});

})();