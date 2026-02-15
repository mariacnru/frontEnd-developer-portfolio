import { lazy, Suspense } from "react";
// import FAQAcordion from "./FAQAcordion";

const FAQAcordion = lazy(() => import("./FAQAcordion"));

function FAQ() {
  return (
    <>
      <h2 className="text-center text-3xl mt-10">سوالات پر تکرار</h2>
      <div className="FAQ-co overflow-hidden">
        <div className="relative">
          <div className="absolute blur-[8rem] rounded-full w-70 h-70 -bg-linear-60 from-indigo-500 from-60% via-cyan-500 to-20% to-sky-500"></div>

          <span className="text-sky-500 text-sm">FAQ</span>
          <p className="text-3xl">
            <span className="text-sky-400">سوالاتی</span> <br />
            که ممکنه براتون پیش بیاد
          </p>
          <p className="text-sm dark:text-gray-400 w-2xs">
            اگر سوال دیگه ای داشته باشید میتونید از طریق راه های ارتباطی با من
            در ازتباط باشید 😊🙏🏻
            <a
              href="tel:0933 604 9409"
              className="text-sky-400 text-xs block hover:underline underline-offset-2"
              style={{ direction: "ltr" }}
            >
              0933 604 9409
            </a>
          </p>
        </div>
        <Suspense>
          <FAQAcordion />
        </Suspense>
      </div>
    </>
  );
}

export default FAQ;
