import Swiper from 'swiper';
// import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { Autoplay, Pagination } from 'swiper/modules';

(() => {

	new Swiper(".hero__slider", {
		// modules: [ Autoplay, EffectFade, Pagination ],
		modules: [ Autoplay, Pagination ],
		spaceBetween: 0,
		loop: true,
		speed: 2000,
		// effect: "fade",
		// fadeEffect: { crossFade: true },
		autoplay: { 
			delay: 10000,
			disableOnInteraction: true
		},
		pagination: {
			el: '.hero__pagination',
			bulletClass: 'hero__dot',
			bulletActiveClass: 'active',
			clickable: true,
		}
	});
	
})();