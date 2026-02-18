import React from "react";

function HeroIntro() {
  return (
    <div className="HeroIntro">
      <span className="welcome">
        به دنیای خلاقانه من خوش آمدید !
      </span>
      <h2 className="text-3xl font-[Digi-Titr]">من مریم احمدآبادی هستم</h2>
      <p className="text-sm text-gray-600 text-wrap">
        من یک توسعه‌دهنده فرانت‌اند در حال رشد هستم که تمرکزم روی ساخت رابط‌های
        کاربری تمیز، قابل دسترس و بهینه است. با JavaScript مدرن، React و
        Tailwind CSS کار می‌کنم و به مفاهیمی مثل performance، ساختار استاندارد
        کد و تجربه کاربری اهمیت زیادی می‌دهم. در حال حاضر به صورت مستمر در حال
        یادگیری و پیاده‌سازی پروژه‌های واقعی هستم تا مهارت‌های فنی و حل مسئله
        خودم را تقویت کنم. هدف من تبدیل شدن به یک توسعه‌دهنده حرفه‌ای وب است که
        بتواند تجربه‌ای سریع، روان و قابل اعتماد برای کاربران ایجاد کند.
      </p>

      <div className="flex justify-between items-center w-full text-lg border-y border-indigo-700 h-20">
        <span className="flex items-center gap-2 font-semibold">
          <img src="/SVGIcons/plus.svg" alt="plus-icon" width={17} /> 2 سال
          سابقه کار
        </span>
        <span className="flex items-center gap-2 font-semibold">
          <img src="/SVGIcons/plus.svg" alt="plus-icon" width={17} /> 4 نمونه
          کار
        </span>
        <span className="flex items-center gap-2 font-semibold">
          <img src="/SVGIcons/plus.svg" alt="plus-icon" width={17} /> همیشه
          آپدیت
        </span>
      </div>
    </div>
  );
}

export default HeroIntro;
