const sliderDots = document.querySelectorAll('.dots__button');
const slider = document.querySelector('.slider');

const removeActiveDots = () => {
  sliderDots.forEach(dot => dot.classList.remove('dots__button--active'));
};

const changePosition = (dot) => {
  const position = dot.getAttribute('data-pos');
  const translateValue = `translateX(${position})`;
  slider.style.transform = translateValue;
  dot.classList.add('dots__button--active');
};

sliderDots.forEach(dot => {
  dot.addEventListener('click', () => {
    removeActiveDots();
    changePosition(dot);
  });
});
