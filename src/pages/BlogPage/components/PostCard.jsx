import React from "react";
import { Link, NavLink } from "react-router";

function PostCard({
  id,
  title,
  slug,
  excerpt,
  content,
  coverImage,
  category,
  tags,
  author,
  date,
  readingTime,
  featured,
}) {
  return (
    <div className="post-card">
      <div
        className="w-full h-48 px-2 flex items-center justify-center rounded-lg text-white font-bold overflow-hidden"
        style={{
          background:
            category === "JavaScript"
              ? `radial-gradient(circle at 20% 30%, #facc15, transparent 40%),
           radial-gradient(circle at 80% 70%, #f97316, transparent 50%),
           radial-gradient(circle at 50% 50%, #f59e0b, transparent 60%)`
              : category === "CSS"
                ? `radial-gradient(circle at 30% 40%, #a78bfa, transparent 40%),
           radial-gradient(circle at 70% 60%, #ec4899, transparent 50%),
           radial-gradient(circle at 50% 50%, #0ea5e9, transparent 60%)`
                : category === "React"
                  ? `radial-gradient(circle at 25% 35%, #38bdf8, transparent 40%),
           radial-gradient(circle at 75% 65%, #3b82f6, transparent 50%),
           radial-gradient(circle at 50% 50%, #6366f1, transparent 60%)`
                  : `radial-gradient(circle at 20% 30%, #9ca3af, transparent 40%),
           radial-gradient(circle at 80% 70%, #6b7280, transparent 50%),
           radial-gradient(circle at 50% 50%, #d1d5db, transparent 60%)`,
        }}
      >
        <span className="text-xl z-10 font-[QurovademoRegular]">
          {category}
        </span>
      </div>

      <div className="text-xs mt-5 absolute left-5">
        {tags.map((item) => (
          <span
            key={item}
            className="px-4 py-1 mx-1 rounded-full bg-white/20 backdrop-blur-md shadow-lg"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="w-full mt-4 text-sm">
        <h4 className="font-semibold">{title}</h4>
        <p className="text-gray-500 text-xs mt-2 pb-5">{excerpt}</p>
        <div className="reading-time">
          <p className="">{date}</p>
          <p className="">زمان مطالعه : {readingTime}</p>
        </div>
      </div>
      <Link
        to={`/blog/${id}`}
        className="mt-2 w-full text-center bg-linear-to-b from-indigo-400 to-indigo-600 px-2 py-2 text-gray-200 rounded-md"
      >
        <button className="cursor-pointer">مشاهده مقاله</button>
      </Link>
    </div>
  );
}

export default PostCard;
