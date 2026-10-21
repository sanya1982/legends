'use strict';
document.addEventListener('DOMContentLoaded', () => {
	const legendsItems = document.querySelector('.legends__items'),
		legendsItem = legendsItems.querySelectorAll('.legends__item'),
		videoBg = document.querySelector('.video__bg'),
		video = document.querySelector('.video'),
		imgClose = document.querySelector('.img__close'),
		swipeArea = document.getElementById('swipeArea'),
		sidebar = document.getElementById('sidebar'),
		closeBtn = document.getElementById('closeBtn');

	let touchStartX = 0;
	let touchEndX = 0;
	const videoDb = ['video/hypo.mp4', 'video/garvey.mp4', 'video/geberden.mp4', 'video/riva.mp4', 'video/fuster.mp4'];
	const promoDB = ['promo/prod.jpg', 'promo/nol.jpg', 'promo/prod.jpg', 'promo/nol.jpg', 'promo/prod.jpg'];

	
	const minSwipeDistance = 50;

	legendsItem.forEach((item, i) => {
		console.log(item, i);
		item.addEventListener('click', () => {
			console.log(item);
			video.src = videoDb[i];
			imgClose.src = promoDB[i];
			videoBg.classList.add('active');
			video.play();

			swipeArea.addEventListener('touchstart', (e) => {
				touchStartX = e.changedTouches[0].screenX;
			}, { passive: true });

			
			swipeArea.addEventListener('touchend', (e) => {
				touchEndX = e.changedTouches[0].screenX;
				handleSwipe();
			}, { passive: true });

			
			function handleSwipe() {
				
				if (touchStartX - touchEndX > minSwipeDistance) {
					video.pause();
					sidebar.classList.add('active'); 
				}
			}

			
			imgClose.addEventListener('click', () => {
				location.reload();
			});

		});
	});
})