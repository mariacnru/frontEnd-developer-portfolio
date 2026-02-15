import React from "react";
import { footerContact } from "../../Data/footer";

function Contact() {
  return (
    <ul className="hidden sm:flex mx-auto gap-5 border border-gray-400 w-fit rounded-md p-2">
      {footerContact.map((contact) => (
        <li
          key={contact.id}
          className="flex justify-center items-center gap-2 text-sm cursor-pointer"
        >
          <a href={contact.href}>{contact.content}</a>
          <span className="text-indigo-500">
            <img src={contact.Icon} alt="footer-icon" width={17} />
          </span>
        </li>
      ))}
    </ul>
  );
}

export default Contact;
