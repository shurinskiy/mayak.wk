import scrollLock from 'scroll-lock';
import { makeModalFrame } from "../../js/libs/modal";

(() => {

	makeModalFrame({ 
		select: '.gallery__image', 
		scrollLock,
		open: function(modal, el) {
			this.insertAdjacentHTML('beforeend', el.querySelector('.gallery__text').outerHTML);
		}
	});
})();