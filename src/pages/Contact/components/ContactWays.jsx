import React from "react";

function ContactWays() {
  return (
    <div className="ContactWays">
      <div className="card">
        <div className="">
          <span className="block text-gray-500 text-sm">
            ارتباط از طریق ایمیل
          </span>
          <a href="mail:mariacnru@gmail.com" className="text-sm">
            mariacnru@gmail.com
          </a>
        </div>
        <img
          src="/public/SVGIcons/arrow-narrow-left.svg"
          alt="icon"
          className=""
        />
      </div>

      <div className="card">
        <div className="">
          <span className="block text-gray-500 text-sm">
            ارتباط از طریق شماره تماس
          </span>
          <a href="tel:09336049409" className="text-sm">
            0933 60 49 409
          </a>
        </div>
        <img
          src="/public/SVGIcons/arrow-narrow-left.svg"
          alt="icon"
          className=""
        />
      </div>

      <div className="card">
        <div className="">
          <span className="block text-gray-500 text-sm">موقعیت مکانی </span>
          <a href="mail:mariacnru@gmail.com" className="text-sm">
            ایران,تهران{" "}
          </a>
        </div>
        <img
          src="/public/SVGIcons/arrow-narrow-left.svg"
          alt="icon"
          className=""
        />
      </div>
    </div>
  );
}

export default ContactWays;
