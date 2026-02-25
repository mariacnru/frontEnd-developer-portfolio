import React from "react";

function BlogHead({ searchValue, setSearchValue }) {
  return (
    <div
      className="blog-head"
    >
      <span className="text-xs text-gray-500 border border-gray-400 px-4 py-2 rounded-full">
        وبلاگ
      </span>

      <div className="mt-2 mb-6">
        <h2 className="blog-title">
          جدیدترین مقالات و نکات برنامه‌نویسی
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          در این وبلاگ آخرین مقالات، آموزش‌ها و نکات کاربردی درباره
          برنامه‌نویسی، وب و تکنولوژی را دنبال کنید.
        </p>
      </div>

      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="جستجو در مقالات..."
        className="w-2xs px-4 py-1 text-sm rounded-lg border border-gray-300 focus:shadow-xl transition-shadow duration-300 outline-none"
      />
    </div>
  );
}

export default BlogHead;
