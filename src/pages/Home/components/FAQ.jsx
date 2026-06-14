import { lazy, Suspense } from "react";

const FAQAcordion = lazy(() => import("./FAQAcordion"));

function FAQ() {
  return (
    <div className="mt-10 px-4">
      <h2 className="text-center text-3xl font-morabba-medium">
        سوالات پر تکرار
      </h2>

      <div className="FAQ-co overflow-hidden mt-6 relative">
        {/* 🔥 Blur background */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-linear-to-r from-indigo-500 via-cyan-500 to-sky-500 rounded-full blur-[120px] opacity-60"></div>

        {/* Content */}
        <div className="relative z-10">
          <span className="text-sky-500 text-sm">FAQ</span>

          <p className="text-3xl font-morabba-medium">
            <span className="text-sky-400">سوالاتی</span> <br />
            که ممکنه براتون پیش بیاد
          </p>

          <p className="text-sm dark:text-gray-400 max-w-xs mt-2">
            اگر سوال دیگه‌ای داشته باشید می‌تونید از طریق راه‌های ارتباطی با من
            در ارتباط باشید 😊🙏🏻
            <a
              href="tel:09120000000"
              className="text-sky-400 text-xs block hover:underline underline-offset-2"
              style={{ direction: "ltr" }}
            >
              0912 000 0000
            </a>
          </p>
        </div>

        {/* Accordion */}
        <div className="relative z-10 mt-5">
          <Suspense fallback={null}>
            <FAQAcordion />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
