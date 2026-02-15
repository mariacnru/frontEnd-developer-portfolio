import { Outlet, ScrollRestoration } from "react-router";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function PortfolioLayout() {
  return (
    <div>
      <ScrollRestoration />
      <section>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </section>
    </div>
  );
}

export default PortfolioLayout;
