import ContactBtn from "./ContactBtn";
import navbar from "../../Data/navbar";
import { NavLink } from "react-router";

function NavList() {
  return (
    <ul className="hidden sm:flex items-center gap-5 text-sm">
      <li className="">
        <ContactBtn />
      </li>
      {navbar.map((item) => (
        <li key={item.id}>
          <NavLink
            to={item.href}
            className={({ isActive }) =>
              isActive
                ? "bg-indigo-50 rounded-t-sm py-1 px-2 border-b-2 border-indigo-700 dark:text-stone-800 transition-all duration-300"
                : "border-0 transition-all duration-75"
            }
          >
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default NavList;
