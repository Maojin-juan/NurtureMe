export default function SectionTitle({ title, subtitle, className = "" }) {
  return (
    <div
      className={`mb-6 space-y-4 text-center xl:mb-20 xl:space-y-2 ${className}`}
    >
      <h4 className="afterDecoration relative text-h4 after:-bottom-1.5 after:left-1/2 after:-z-10 after:h-[18px] after:w-80 after:-translate-x-1/2 after:bg-[url('/assets/svg/underline/underline1.svg')] after:bg-contain xl:text-h1 after:xl:h-[34px] after:xl:w-[620px]">
        {title}
      </h4>
      <p className="font-bold leading-[1.2rem] tracking-[0.04rem] xl:text-h5">
        {subtitle}
      </p>
    </div>
  );
}
