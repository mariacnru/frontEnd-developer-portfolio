import { href } from "react-router";

const footerList = [
  { id: 1, href: "/", title: "خانه" },
  { id: 2, href: "/about", title: "درباره من" },
  { id: 3, href: "/samples", title: "نمونه کار ها" },
  { id: 4, href: "/contact", title: "ارتباط با من" },
  { id: 5, href: "/blog", title: "وبلاگ" },
];

const footerContact = [
  {
    id: 1,
    Icon: "/SVGIcons/brand-telegram.svg",
    content: "maryam-ahmadabadi",
    href: "https://t.me/maryam_ahmadabadi",
  },
  {
    id: 2,
    Icon: "/SVGIcons/mail.svg",
    content: "mariacnru@gmail.com",
    href: "mailto:mariacnru@gmail.com",
  },
  {
    id: 3,
    Icon: "/SVGIcons/phone-calling.svg",
    content: "09336049409",
    href: "tel:09336049409",
  },
];

export { footerList, footerContact };
