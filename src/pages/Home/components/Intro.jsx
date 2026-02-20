import HeroBox from "./HeroBox";

function Intro() {
  return (
    <div className="intro-co">
      <div className="intro-content">
        <span data-aos="fade-up" className="intro-hello">
          سلام به شما ✨🤗
        </span>
        <h1 className="intro-title">
          متخصص توسعه‌دهنده فرانت‌اند | React & Modern Web Technologies
        </h1>
        <h2 className="text-4xl font-[Digi-Titr] text-center">
          ساخت تجربه‌های سریع، مدرن و کاربرپسند{" "}
        </h2>
        <p className="text-sm text-gray-700 text-wrap">
          توسعه‌دهنده فرانت‌اند با تمرکز بر ساخت اپلیکیشن‌های سریع، مقیاس‌پذیر و
          کاربرپسند با کدنویسی تمیز و قابل نگهداری.
          {/*           
           متخصص توسعه‌دهنده فرانت‌اند
          با تخصص در React.js و کتابخانه‌های مدرن، دارای تجربه در ساخت
          اپلیکیشن‌های وب مقیاس‌پذیر، پویا و کاربرپسند. متعهد به نوشتن کدهای
          تمیز، قابل نگهداری و با تمرکز بر تجربه کاربری برتر و کارایی عالی. */}
        </p>
        <div className="flex flex-wrap items-center gap-5">
          <button className="intro-contact-btn">دانلود رزومه (CV)</button>
          <button className="intro-contact-btn">
            <img
              src="/SVGIcons/phone.svg"
              alt="phone-icon"
              className="text-white -rotate-90"
              width={15}
              loading="lazy"
            />
            تماس با من
          </button>
          <button className="intro-portfolio">
            نمونه کار ها
            <img
              src="/SVGIcons/arrow-narrow-left.svg"
              alt="arrow-left"
              width={17}
              loading="lazy"
            />
          </button>
        </div>
        <HeroBox />
      </div>
    </div>
  );
}

export default Intro;
