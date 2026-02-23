import React, { useContext } from "react";
import { ThemeContext } from "../../../context/Theme";

function ContactWays() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="ContactWays">
      <div className="card">
        <div>
          <span className="card-span">ارتباط از طریق ایمیل</span>
          <a href="mail:mariacnru@gmail.com" className="text-sm hover:underline hover:text-sky-500 transition">
            mariacnru@gmail.com
          </a>
        </div>
        <img
          src={
            theme === "light"
              ? "/SVGIcons/arrow-narrow-left.svg"
              : "/SVGIcons/arrow-narrow-left-white.svg"
          }
          alt="icon"
        />
      </div>

      <div className="card">
        <div>
          <span className="card-span">ارتباط از طریق شماره تماس</span>
          <a href="tel:09336049409" className="text-sm hover:underline hover:text-sky-500 transition">
            <bdi> 0933 60 49 409</bdi>
          </a>
        </div>
        <img
          src={
            theme === "light"
              ? "/SVGIcons/arrow-narrow-left.svg"
              : "/SVGIcons/arrow-narrow-left-white.svg"
          }
          alt="icon"
        />
      </div>

      <div className="card">
        <div>
          <span className="card-span">موقعیت مکانی </span>
          <a href="mail:mariacnru@gmail.com" className="text-sm hover:underline hover:text-sky-500 transition">
            ایران,تهران{" "}
          </a>
        </div>
        <img
          src={
            theme === "light"
              ? "/SVGIcons/arrow-narrow-left.svg"
              : "/SVGIcons/arrow-narrow-left-white.svg"
          }
          alt="icon"
        />
      </div>
    </div>
  );
}

export default ContactWays;
