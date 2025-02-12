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
  },
  secondary: {
    DEFAULT: "#EF4323",
    1: "#EF4323",
    2: "#F26348",
    3: "#F6927F",
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
          // 裝飾元素
          ...Object.entries({
            titlePaw: "url('@/assets/decorations/paw/titlePaw.svg')",
            underline: "url('@/assets/decorations/underline/underline.svg')",
            baseline: "url('@/assets/decorations/menu/baseline.svg')",
            bgShadow: "url('@/assets/decorations/bgShadow/bgShadow.svg')",
          }),

          // 波浪背景
          ...Array.from({ length: 5 }, (_, i) => [
            `wave${i + 1}`,
            `url('@/assets/decorations/wave/wave${i + 1}.svg')`,
          ]),

          // 人物插圖
          ...Array.from({ length: 4 }, (_, i) => [
            `person${i + 1}`,
            `url('@/assets/decorations/illust/person${i + 1}.svg')`,
          ]),

          // 捐贈頁面
          ...Object.entries({
            donation_banner:
              "url('@/assets/images/donation/donation_banner.jpg')",
            donation_paw: "url('@/assets/images/donation/donation_paw.svg')",
            donation_paw_sm:
              "url('@/assets/images/donation/donation_paw_sm.svg')",
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
