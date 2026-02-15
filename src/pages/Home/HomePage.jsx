import React, { Suspense, lazy } from "react";
import Intro from "./components/Intro";

const Skils = lazy(() => import("./components/Skils"));
const FAQ = lazy(() => import("./components/FAQ"));

function HomePage() {
  return (
    <>
      <Intro />
      <Suspense fallback={<div>Loading...</div>}>
        <Skils />
        <FAQ />
      </Suspense>
    </>
  );
}

export default HomePage;
