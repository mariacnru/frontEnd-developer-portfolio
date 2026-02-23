import React from "react";

function FormContact() {
  return (
    <div className="contact-form">
      <div className="w-full flex flex-col gap-4">
        <input
          type="text"
          placeholder="نام و نام خانوادگی"
          className="form-input"
        />
        <input type="text" placeholder="ایمیل" className="form-input" />
        <textarea
          name=""
          id=""
          placeholder="متن پیام"
          className="form-textarea"
        ></textarea>
      </div>
      <button type="submit" className="form-btn">
        ارسال
      </button>
    </div>
  );
}

export default FormContact;
