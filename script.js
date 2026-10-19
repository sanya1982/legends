'use strict';
document.addEventListener('DOMContentLoaded', () => {
  const legendsItems = document.querySelector('.legends__items'),
  legendsItem = legendsItems.querySelectorAll('.legends__item'),
  videoBg = document.querySelector('.video__bg'),
  video = document.querySelector('.video'),
  imgClose = document.querySelector('.img__close');

  const swipeArea = document.getElementById('swipeArea');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('closeBtn');

let touchStartX = 0;
let touchEndX = 0;

// Минимальное расстояние в пикселях, которое нужно пролистать для срабатывания свайпа
const minSwipeDistance = 50; 

  legendsItem.forEach((item, i) => {
    console.log(item, i);
    item.addEventListener('click', () => {
      console.log(item);
      videoBg.classList.add('active');
      video.play();

      swipeArea.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

// Фиксируем координату, где палец оторвался от экрана
swipeArea.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
}, { passive: true });

// Анализируем направление движения
function handleSwipe() {
  // Если точка отрыва левее точки касания — это свайп справа налево
  if (touchStartX - touchEndX > minSwipeDistance) {
    video.pause();
    sidebar.classList.add('active'); // Показываем блок
  }
}

// Кнопка закрытия (убирает класс и прячет блок обратно вправо)
imgClose.addEventListener('click', () => {
  location.reload();
});

    });
  });
})