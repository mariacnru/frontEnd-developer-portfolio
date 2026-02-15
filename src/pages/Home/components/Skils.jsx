import skils from "../../../Data/skils";
import SkilsBox from "./SkilsBox";

function Skils() {
  return (
    <div className="mt-15 p-4 relative z-40">
      <div className="absolute left-70 bottom-40 blur-[8rem] rounded-full w-175 h-75 -z-10 -bg-linear-60 from-indigo-500 from-60% via-cyan-500 to-20% to-sky-500"></div>
      <>
        <h2 className="text-2xl text-center mt-10">مهارت های خلاقانه من</h2>
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
