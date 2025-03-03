import { Autoplay, Navigation, Pagination } from "swiper/modules";

const baseConfig = {
  modules: [Navigation, Pagination, Autoplay],

  loop: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    hideOnClick: false,
  },

  grabCursor: true,
  preventClicks: true,
  preventClicksPropagation: true,
};

export const swiperConfigs = {
  // 首頁團隊輪播
  team: {
    ...baseConfig,
    slidesPerView: 1,
    spaceBetween: 24,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1400: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  },

  // 新聞輪播
  news: {
    ...baseConfig,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
    autoplay: {
      delay: 4000,
    },
  },

  // 領養輪播
  adoption: {
    ...baseConfig,
    slidesPerView: 1,
    spaceBetween: 16,
    breakpoints: {
      768: { slidesPerView: 2 },
      1200: { slidesPerView: 4 },
    },
    autoplay: {
      delay: 3500,
    },
  },

  // 商品輪播
  product: {
    ...baseConfig,
    slidesPerView: 1,
    spaceBetween: 24,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1400: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  },
};
