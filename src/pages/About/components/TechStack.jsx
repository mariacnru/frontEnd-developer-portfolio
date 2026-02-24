import TechStackCarf from "./TechStackCarf";
import techStack from "../../../Data/techStack";

function TechStack() {
  return (
    <>
      <h2 className="text-center mt-40 mb-15 text-2xl">مهارت‌های فنی</h2>

      <div className="flex flex-wrap gap-2">
        {techStack.map((item) => (
          <TechStackCarf key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}

export default TechStack;
