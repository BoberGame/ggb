const burger = () => {
  const burgerBtn = document.querySelector('.menu-burger');
  if (burgerBtn) {
    const burgerMenu = document.querySelector('.nav__wrapper');
    burgerBtn.addEventListener('click', (event) => {
      document.body.classList.toggle('no-scroll');
      burgerBtn.classList.toggle('active');
      burgerMenu.classList.toggle('active');
    });
  }
};

export default burger;
