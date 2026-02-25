import React from "react";

function BlogHead() {
  return (
    <div
      style={{ animation: "opacity 0.8s linear" }}
      className="bg-white mx-20 my-10 flex flex-col items-center gap-5 px-4 py-8 rounded-2xl"
    >
      <span className="text-sm text-gray-500 border border-gray-400 px-2 py-1 rounded-full">
        وبلاگ
      </span>

      {/* تیتر و توضیح  */}
      <div className="mt-2 mb-6">
        <h2 className="text-3xl text-center font-bold text-gray-900">
          جدیدترین مقالات و نکات برنامه‌نویسی
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          در این وبلاگ آخرین مقالات، آموزش‌ها و نکات کاربردی درباره
          برنامه‌نویسی، وب و تکنولوژی را دنبال کنید.
        </p>
      </div>

      {/* فیلد جستجو */}
      <input
        type="text"
        placeholder="جستجو در مقالات..."
        className="w-2xs px-4 py-1 text-sm rounded-lg border border-gray-300 focus:shadow-xl transition-shadow duration-300 outline-none"
      />
    </div>
  );
}

export default BlogHead;
