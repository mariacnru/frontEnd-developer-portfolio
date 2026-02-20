import React from "react";

function Banner() {
  return (
    <div className="banner">
      <img
        src="/images/contact/Icon Container message.png"
        alt="message-icon"
        width={40}
      />

      <div>
        <h2 className="text-2xl text-center font-semibold">
          با من در تماس باشید 🤗
        </h2>

        <p className="text-sm text-center text-gray-700 mt-2">
          اگر برای همکاری، پروژه جدید یا مشاوره سوالی دارید، خوشحال می‌شوم با هم
          صحبت کنیم.
        </p>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-3 items-center gap-5">
        <li className="">
          پاسخ‌گویی سریع
          <img src="/images/contact/bolt.png" alt="bolt-icon" width={20} />
        </li>

        <li className="">
          زمان‌بندی منعطف
          <img
            src="/images/contact/sparkles.png"
            alt="sparkles-icon"
            width={20}
          />
        </li>

        <li className="">
          پشتیبانی مستمر
          <img src="/images/contact/clock.png" alt="clock-icon" width={20} />
        </li>
      </ul>
    </div>
  );
}

export default Banner;
