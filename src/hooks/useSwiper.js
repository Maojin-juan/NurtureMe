import { useEffect, useRef, useState } from "react";
import Swiper from "swiper";

export const useSwiper = (config) => {
  const swiperRef = useRef(null);
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    if (!swiperRef.current) return;

    try {
      const swiperInstance = new Swiper(swiperRef.current, {
        ...config,
        // 確保在組件卸載時停止自動播放
        on: {
          ...config.on,
          beforeDestroy: () => {
            if (config.autoplay) {
              swiperInstance.autoplay.stop();
            }
          },
        },
      });

      setSwiper(swiperInstance);

      return () => {
        // 清理工作
        if (swiperInstance) {
          swiperInstance.destroy(true, true); // true, true 表示完全清除
        }
      };
    } catch (error) {
      console.error("Swiper 初始化失敗:", error);
    }
  }, [config]);

  // 提供更多實用的方法
  const methods = {
    // 更新 Swiper
    update: () => swiper?.update(),
    // 暫停自動播放
    pauseAutoplay: () => swiper?.autoplay?.pause(),
    // 繼續自動播放
    resumeAutoplay: () => swiper?.autoplay?.resume(),
  };

  return { swiperRef, swiper, ...methods };
};
