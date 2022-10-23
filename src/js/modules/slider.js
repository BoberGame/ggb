import Swiper, { Navigation, Pagination, Scrollbar, Keyboard, A11y } from 'swiper';


const sliderInit = () => {
  const swiperProducts = new Swiper('.swiper-products', {
    modules: [Navigation, Keyboard, A11y],
    observer: true,
    observerParents: true,
    navigation: {
      enabled: false,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
    },
    breakpoints: {
      992: {
        navigation: {
          enabled: true,
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    },
  });

  const swiperSellers = new Swiper('.swiper-sellers', {
    modules: [Navigation, Scrollbar, Keyboard, A11y],
    observer: true,
    observerParents: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
    },
    spaceBetween: 30,
    slidesPerView: 1,
    // centeredSlides: true,
    // centeredSlidesBounds: true,
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
        centeredSlides: true,
        centeredSlidesBounds: true,
      },

      992: {
        slidesPerView: 4,
        // centeredSlides: true,
        // centeredSlidesBounds: true,
      },
    },

  });

  const reviewsSwiper = new Swiper('.swiper-reviews', {
    modules: [Navigation, Scrollbar, Keyboard, A11y],
    observer: true,
    observerParents: true,
    navigation: {
      enabled: false,
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
    },
    spaceBetween: 20,
    slidesPerView: 1,
    breakpoints: {
      576: {
        slidesPerView: 1.3,
      },
      768: {
        slidesPerView: 2.3,
      },
      992: {
        slidesPerView: 3.3,
        navigation: {
          enabled: true,
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    },
  });

  const socialsSwiper = new Swiper('.swiper-socials', {
    modules: [Navigation, Scrollbar, Keyboard, A11y],
    observer: true,
    observerParents: true,
    navigation: {
      enabled: false,
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
    },
    spaceBetween: 20,
    slidesPerView: 1,
    breakpoints: {
      446: {
        slidesPerView: 1.5,
      },
      576: {
        slidesPerView: 2.5,
      },
      768: {
        slidesPerView: 3.5,
      },
      992: {
        slidesPerView: 4.5,
        navigation: {
          enabled: true,
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    },
  });

  const imgSwiperEl = document.querySelector('.swiper-img');

  if (imgSwiperEl) {
    const imgSwiper = new Swiper('.swiper-img', {
      modules: [Scrollbar, Keyboard, A11y],
      observer: true,
      observerParents: true,
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
      a11y: {
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
      },
      spaceBetween: 10,
      slidesPerView: 3,
    });
    let init = false;
    const swiperMode = () => {
      // eslint-disable-next-line max-len
      const mobile = window.matchMedia('(min-width: 0px) and (max-width: 768px)');
      // eslint-disable-next-line max-len
      const tablet = window.matchMedia('(min-width: 769px) and (max-width: 1024px)');
      const desktop = window.matchMedia('(min-width: 1025px)');
      if (mobile.matches) {
        console.log(init);
        if (!init) {
          init = true;
          imgSwiper;
        }
      } else if (tablet.matches || desktop.matches) {
        imgSwiper.destroy();
        init = false;
      }
    };

    window.addEventListener('load', () => {
      swiperMode();
    });
    window.addEventListener('resize', () => {
      swiperMode();
    });
  }


};

export default sliderInit;
