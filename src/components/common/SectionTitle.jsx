export default function SectionTitle({
  title,
  subtitle,
  underlineStyle = 1,
  className = "",
}) {
  const getUnderlineClass = () => {
    if (underlineStyle === 1) {
      return "after:bg-underline1 after:w-80 after:xl:w-[620px]";
    }
    return "after:bg-underline2 after:w-[186px] after:xl:w-[349px]";
  };

  return (
    <div
      className={`mb-6 space-y-4 text-center xl:mb-20 xl:space-y-2 ${className}`}
    >
      <h4
        className={`afterDecoration relative text-h4 ${getUnderlineClass()} after:-bottom-1.5 after:left-1/2 after:-z-10 after:h-[18px] after:-translate-x-1/2 after:bg-contain xl:text-h1 after:xl:h-[35px]`}
      >
        {title}
      </h4>
      <p className="font-bold leading-[1.2rem] tracking-[0.04rem] xl:text-h5">
        {subtitle}
      </p>
    </div>
  );
}
