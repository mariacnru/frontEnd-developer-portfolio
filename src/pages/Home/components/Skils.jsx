import skils from "../../../Data/skils";
import SkilsBox from "./SkilsBox";

function Skils() {
  return (
    <div className="mt-15 p-4 relative z-40">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-linear-to-r from-indigo-500 via-cyan-500 to-sky-500 rounded-full blur-[140px] opacity-60 -z-10"></div>

      <>
        <h2 className="text-2xl text-center mt-10 font-morabba-medium">
          مهارت های خلاقانه من
        </h2>
        <p className="skill-description">
          مهارت های من به عنوان توسعه دهنده فرانت شامل زبان های برنامه نویسی و
          کتابخانه ها و ...
        </p>
      </>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-self-center gap-4 my-10">
        {skils.map((skil) => (
          <SkilsBox key={skil.id} {...skil} />
        ))}
      </div>
    </div>
  );
}

export default Skils;
