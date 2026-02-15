function HeroBox() {
  return (
    <div className="hero-box">
      <div className="flex flex-col gap-4">
        <span className="text-2xl font-semibold">
          <span className="text-indigo-500">+</span>10
        </span>
        <p className="text-xs text-gray-700">کتابخانه ریکتی و جاوااسکریپت</p>
      </div>

      <div className="flex flex-col gap-4">
        <span className="text-2xl font-semibold">
          <span className="text-indigo-500">+</span>4
        </span>
        <p className="text-xs text-gray-700">پروژه متنوع</p>
      </div>

      <div className="flex flex-col gap-4">
        <span className="text-2xl font-semibold">
          <span className="text-indigo-500">+</span>10
        </span>
        <p className="text-xs text-gray-700">کتابخانه ریکتی و جاوااسکریپت</p>
      </div>
    </div>
  );
}

export default HeroBox;
