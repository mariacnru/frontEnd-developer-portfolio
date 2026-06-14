import HeroBox from "./HeroBox";

function Intro() {
  return (
    <div className="intro-co">
      <div className="intro-content">
        <span data-aos="fade-up" className="intro-hello">
          MariaDev 👩🏻‍💻
        </span>
        <h1 className="intro-title">
          متخصص توسعه‌دهنده فرانت‌اند | React & Modern Web Technologies
        </h1>
        <h2 className="intro-text">ساخت تجربه‌های سریع، مدرن و کاربرپسند</h2>
        <p className="intro-desceription text-center">
          توسعه‌دهنده فرانت‌اند با تمرکز بر ساخت اپلیکیشن‌های سریع، مقیاس‌پذیر و
          کاربرپسند با کدنویسی تمیز و قابل نگهداری.
        </p>
        <div className="flex flex-wrap items-center gap-5">
          <button className="intro-contact-btn">دانلود رزومه (CV)</button>
          <button className="intro-contact-btn">
            <img
              src="/frontEnd-developer-portfolio/SVGIcons/phone.svg"
              alt="phone-icon"
              className="text-white -rotate-90"
              width={15}
              loading="lazy"
            />
            تماس با من
          </button>
        </div>
        <HeroBox />
      </div>
    </div>
  );
}

export default Intro;
