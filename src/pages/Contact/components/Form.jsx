import React from "react";

function Form() {
  return (
    <div className="bg-white p-5 rounded-lg">
      <div className="space-x-5">
        <input
          type="text"
          placeholder="نام و نام خانوادگی"
          className="border border-stone-300 bg-stone-50 py-1 px-2 rounded-sm"
        />
        <input
          type="email"
          name=""
          id=""
          placeholder="ایمیل"
          className="border border-stone-300 bg-stone-50 py-1 px-2 rounded-sm"
        />
        <input
          type="text"
          placeholder="شماره تماس"
          className="border border-stone-300 bg-stone-50 py-1 px-2 rounded-sm"
        />
      </div>
      <textarea
        name=""
        id=""
        placeholder="توضیحات"
        className="border border-stone-300 bg-stone-50 py-1 px-2 rounded-sm resize-none"
      />
    </div>
  );
}

export default Form;
