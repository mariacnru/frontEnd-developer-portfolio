import { Link } from "react-router";
import { footerList } from "../../Data/footer";

function Lsit() {
  return (
    <ul className="flex items-center gap-4 text-sm">
      {footerList.map((item) => (
        <li key={item.id}>
          <Link
            to={item.href}
            className="hover:text-indigo-500 cursor-pointer transition"
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Lsit;
