function HeroBox() {
  return (
    <div className="hero-box">
      <div className="flex justify-between items-center gap-4">
        <div className="bg-gray-700 flex items-center gap-2 p-2 rounded-sm">
          <span className="">Git</span>
          <img src="/public/images/hero/git.svg" alt="" width={30} />
        </div>
        <div className="bg-gray-700 flex items-center gap-2 p-2 rounded-sm">
          <span className="">GitHub</span>
          <img src="/public/images/hero/github.svg" alt="" width={30} />
        </div>
        <div className="bg-gray-700 flex items-center gap-2 p-2 rounded-sm">
          <span className="">React.js</span>
          <img src="/public/images/hero/react.svg" alt="" width={30} />
        </div>
        <div className="bg-gray-700 flex items-center gap-2 p-2 rounded-sm">
          <span className="">Tailwindcss</span>
          <img src="/public/images/hero/tailwindcss-48.png" alt="" width={30} />
        </div>
        <div className="bg-gray-700 flex items-center gap-2 p-2 rounded-sm">
          <span className="">Javascript [ES6]</span>
          <img src="/public/images/hero/js.svg" alt="" width={30} />
        </div>
        <div className="bg-gray-700 flex items-center gap-2 p-2 rounded-sm">
          <span className="">CSS 33</span>
          <img src="/public/images/hero/css.svg" alt="" width={30} />
        </div>
        <div className="bg-gray-700 flex items-center gap-2 p-2 rounded-sm">
          <span className="">HTML 5</span>
          <img src="/public/images/hero/html-5.svg" alt="" width={30} />
        </div>
      </div>
    </div>
  );
}

export default HeroBox;
