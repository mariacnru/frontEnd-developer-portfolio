import { Outlet, ScrollRestoration } from "react-router";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import PhoneNavbar from "../PhoneNavbar/PhoneNavbar";

function PortfolioLayout() {
  return (
    <div>
      <ScrollRestoration />
      <section>
        <Navbar />
        <PhoneNavbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </section>
    </div>
  );
}

export default PortfolioLayout;
