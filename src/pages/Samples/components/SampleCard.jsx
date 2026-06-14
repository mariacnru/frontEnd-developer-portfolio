import portfolioProjects from "../../../Data/portfolioProjects";

function SampleCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-4">
      {portfolioProjects.map((item) => (
        <div
          key={item.id}
          className="sample-card w-full min-h-[320px] flex flex-col justify-between bg-white rounded-t-xl shadow-xl overflow-hidden"
        >
          {/* Text section */}
          <div className="p-5 space-y-2">
            <h2 className="font-morabba-medium">{item.title}</h2>
            <span className="text-gray-400 text-xs">{item.date}</span>
            <p className="text-sm text-gray-500">{item.description}</p>
          </div>

          {/* Image / bottom section */}
          <div className="w-full h-40 bg-sky-400 border-b-4 border-sky-700 rounded-t-2xl"></div>
        </div>
      ))}
    </div>
  );
}

export default SampleCard;
