const NavigationButtons = () => (
  <div className="hidden hover:cursor-pointer 3xl:block">
    <div className="swiper-button-next absolute !-right-20 !top-[175px] !mt-0 !size-20 bg-arrowNext bg-cover after:hidden hover:cursor-pointer" />
    <div className="swiper-button-prev absolute !-left-20 !top-[175px] !mt-0 !size-20 bg-arrowPrev bg-cover after:hidden" />
  </div>
);

export default NavigationButtons;
