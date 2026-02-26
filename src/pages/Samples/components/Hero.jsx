import React from "react";

function Hero() {
  return (
    <div>
      <div className="samples-hero">
        <span className="samples-hero-span">نمونه کار ها</span>

        <img
          src="/SVGIcons/samples.svg"
          alt="icon"
          className="bg-indigo-500 p-2 rounded-sm mt-10"
        />

        <h2 className="text-2xl font-[Digi-Titr] mt-5">
          برای مشاهده نمونه کار ها اسکرول کنید
        </h2>
        <p className="mt-3 text-center text-sm opacity-50">
          مجموعه‌ای از پروژه‌های طراحی و توسعه وب که با تمرکز بر کیفیت، جزئیات و
          تجربه کاربری پیاده‌سازی شده‌اند.
        </p>
        <button className="flex items-center gap-2 text-xs text-white bg-indigo-600 p-2 my-5 rounded-sm hover:bg-indigo-700 transition cursor-pointer">
          <img
            src="/SVGIcons/phone.svg"
            alt="phone-icon"
            className="text-white -rotate-90"
            width={15}
            loading="lazy"
          />
          تماس با من
        </button>
      </div>
    </div>
  );
}

export default Hero;
