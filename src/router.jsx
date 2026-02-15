import HomePage from "./pages/Home//HomePage";
import AboutUsPage from "./pages/About//AboutUsPage";
import PortfolioLayout from "./components/Layout/PortfolioLayout";
import { createBrowserRouter } from "react-router";
import SamplesPage from "./pages/Samples/SamplesPage";
import ContactPage from "./pages/Contact/ContactPage";
import BlogPage from "./pages/BlogPage/BlogPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PortfolioLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "home", element: <HomePage /> },
      { path: "about", element: <AboutUsPage /> },
      { path: "samples", element: <SamplesPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "blog", element: <BlogPage /> },
    ],
  },
]);

export default router;
