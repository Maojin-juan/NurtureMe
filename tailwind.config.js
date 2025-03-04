/** @type {import('tailwindcss').Config} */

// 建立字體大小設定
const createFontSizes = () => {
  const sizes = {
    heading: "80px",
    h1: "64px",
    h2: "56px",
    h3: "40px",
    h4: "32px",
    h5: "28px",
    h6: "24px",
    h7: "20px",
    h8: "16px",
    "fs-1": "40px",
    "fs-2": "32px",
    "fs-3": "28px",
    "fs-4": "24px",
    "fs-5": "20px",
    "fs-6": "16px",
    "fs-7": "14px",
    "fs-8": "12px",
    "fs-9": "8px",
    "fs-10": "6px",
  };

  return Object.entries(sizes).reduce(
    (acc, [key, size]) => ({
      ...acc,
      [key]: [
        size,
        {
          // 如果是 fs 系列，使用不同的 lineHeight 和 letterSpacing
          lineHeight: key.startsWith("fs") ? "1.5" : "1.2",
          letterSpacing: key.startsWith("fs") ? "0.02em" : "0.04em",
          fontWeight: key.startsWith("fs") ? "400" : "700",
        },
      ],
    }),
    {},
  );
};

// 建立顏色設定
const colors = {
  primary: {
    DEFAULT: "#27337B",
    1: "#27337B",
    2: "#3E4D9C",
    3: "#7782B8",
    4: "#C3C8E1",
    5: "#E7E9F2",
  },
  secondary: {
    DEFAULT: "#EF4323",
    1: "#EF4323",
    2: "#F26348",
    3: "#F6927F",
  },
  grey: {
    2: "#6D6D6D",
  },
  highlight: {
    DEFAULT: "#FFEE75",
  },
};

export default {
  safelist: ["fixed"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
      "3xl": "1600px",
    },
    container: {
      center: true,
      padding: "24px",
      screens: {
        sm: "564px",
        md: "744px",
        lg: "984px",
        xl: "1164px",
        "2xl": "1344px",
      },
    },
    extend: {
      fontFamily: {
        sans: [
          '"Noto Sans TC"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      fontSize: createFontSizes(),
      colors,
      backgroundImage: {
        ...Object.fromEntries([
          // 頁面特定背景
          ...Object.entries({
            // HOME
            homeCompanion1:
              "url('@/assets/backgrounds/companion/home/companion-1.svg')",
            homeCompanion2:
              "url('@/assets/backgrounds/companion/home/companion-2.svg')",
            homeCompanion3:
              "url('@/assets/backgrounds/companion/home/companion-3.svg')",
            homeCompanion4:
              "url('@/assets/backgrounds/companion/home/companion-4.svg')",
            homeGuardianHeroHand:
              "url('@/assets/backgrounds/companion/home/hand.svg')",
            homeGuardianHeroPaws:
              "url('@/assets/backgrounds/companion/home/cat-paws.svg')",

            // ABOUT
            aboutCompanion1:
              "url('@/assets/backgrounds/companion/about/companion-1.svg')",
            aboutCompanion2:
              "url('@/assets/backgrounds/companion/about/companion-2.svg')",
            aboutShape: "url('@/assets/backgrounds/shapes/about/shape.svg')",
            aboutBanner: "url('@/assets/backgrounds/banner/about-banner.jpg')",

            // DONATION
            donationBanner:
              "url('@/assets/backgrounds/banner/donation-banner.jpg')",
          }),

          // 通用裝飾元素
          ...Object.entries({
            // 導航與選單
            navBaseline: "url('@/assets/backgrounds/nav/baseline.svg')",

            // 腳印裝飾
            pawsRow: "url('@/assets/backgrounds/patterns/paw/paws-row.svg')",
            pawsColShort:
              "url('@/assets/backgrounds/patterns/paw/paws-col-short.svg')",
            pawsColWide:
              "url('@/assets/backgrounds/patterns/paw/paws-col-wide.svg')",
            homeHeroPaw:
              "url('@/assets/backgrounds/patterns/paw/home-hero-paw.svg')",
            donateStepPaw:
              "url('@/assets/backgrounds/patterns/paw/donate-step-paw.svg')",

            // 底線裝飾
            underlineShort:
              "url('@/assets/backgrounds/underline/underline-short.svg')",
            underlineWide:
              "url('@/assets/backgrounds/underline/underline-wide.svg')",

            // 不規則形裝飾
            homeShape1: "url('@/assets/backgrounds/shapes/home/shape-1.svg')",
            homeShape2: "url('@/assets/backgrounds/shapes/home/shape-2.svg')",
            storeShape1: "url('@/assets/backgrounds/shapes/store/shape-1.svg')",
            storeShape2: "url('@/assets/backgrounds/shapes/store/shape-2.svg')",

            // 共用形狀
            titleShape:
              "url('@/assets/backgrounds/shapes/common/title-shape.svg')",

            // 箭頭導航
            arrowPrev: "url('@/assets/backgrounds/arrow/arrow-prev.svg')",
            arrowNext: "url('@/assets/backgrounds/arrow/arrow-next.svg')",
          }),
        ]),
      },

      animation: {
        //news跑馬燈
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
      },

      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" }, // 初始位置

          "100%": { transform: "translateX(-100%)" }, // 滾動到最左側
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" }, // 初始位置
          "100%": { transform: "translateX(0%)" }, // 滾動到最右側
        },
      },
    },
  },
};
