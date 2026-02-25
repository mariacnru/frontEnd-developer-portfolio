import React from "react";
import { NavLink } from "react-router";

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
    <div className="bg-white p-5 rounded-md text-sm">
      <img src="" alt="" />
      <div className="">
        <h4 className="font-semibold">{title}</h4>
        <p className="text-gray-500">{excerpt}</p>
      </div>
      <div className="mt-5">
        <span
          className={`${
            category === "JavaScript"
              ? "bg-yellow-500"
              : category === "CSS"
                ? "bg-purple-500"
                : category === "React"
                  ? "bg-sky-500"
                  : "bg-gray-500"
          } px-2 rounded-full text-xs text-white`}
        >
          {category}
        </span>
      </div>
      <div className="text-xs">
        <p className="">{date}</p>
        <p className="">زمان مطالعه : {readingTime}</p>
      </div>
      <div className="text-xs space-x-2 mt-5">
        {tags.map((item) => (
          <span
            key={item}
            className="bg-sky-200 px-2 rounded-full border border-sky-400"
          >
            {item}
          </span>
        ))}
      </div>
      <NavLink className="mt-2 bg-gray-200 border border-gray-400 px-2 py-1 rounded-sm">
        مشاهده مقاله
      </NavLink>
    </div>
  );
}

export default PostCard;
