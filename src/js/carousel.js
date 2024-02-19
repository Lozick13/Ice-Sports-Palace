export function carousel() {
  const back = document.querySelector('#carousel-back');
  const forward = document.querySelector('#carousel-forward');
  const counter = document.querySelector('.carousel__counter_now');
  const counterQuantity = document.querySelector('.carousel__counter');
  const items = document.querySelectorAll('.carousel__item');
  const itemsContainer = document.querySelector('.carousel__items');
  const countItems = items.length;

  back.disabled = true;
  counterQuantity.insertAdjacentHTML('beforeend', countItems);

  forward.addEventListener('click', () => {
    swipeCarousel('forward');
  });

  back.addEventListener('click', () => {
    swipeCarousel('back');
  });

  for (let i = 1; i <= items.length; i++) {
    items[i - 1].addEventListener('click', () => {
      if (window.matchMedia('(min-width: 1440px)').matches) {
        swipeCarousel(i);
      }
    });
  }

  function swipeCarousel(way) {
    let count = +counter.textContent;
    const oldCount = count;

    forward.disabled = true;
    back.disabled = true;

    counter.style.animation = 'countSwitch 1s ease forwards';
    count = way === 'forward' ? count + 1 : way === 'back' ? count - 1 : way;

    const gapWidth = parseInt(getComputedStyle(itemsContainer).gap);
    const itemWidth = parseInt(getComputedStyle(items[0]).width);
    const line = window.matchMedia('(min-width: 1440px)').matches
      ? (gapWidth * (countItems - 1) + itemWidth * countItems - 1240) / (countItems - 1)
      : gapWidth + itemWidth;
    const coord = line * (count - 1);

    itemsContainer.style.right = coord + 'px';

    setTimeout(() => {
      counter.textContent = '0' + count;
    }, 500);

    setTimeout(() => {
      counter.style.animation = 'none';
      forward.disabled = count === countItems ? true : false;
      back.disabled = count === 1 ? true : false;

      items[oldCount - 1].classList.remove('carousel__item_active');
      items[count - 1].classList.add('carousel__item_active');
    }, 1000);
  }
}
