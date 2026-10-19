'use strict';
document.addEventListener('DOMContentLoaded', () => {
  const legendsItems = document.querySelector('.legends__items'),
  legendsItem = legendsItems.querySelectorAll('.legends__item'),
  videoBg = document.querySelector('.video__bg'),
  video = document.querySelector('.video');

  legendsItem.forEach((item, i) => {
    console.log(item, i);
    item.addEventListener('click', () => {
      console.log(item);
      videoBg.classList.add('active');
      video.play();
      
    });
  });
})