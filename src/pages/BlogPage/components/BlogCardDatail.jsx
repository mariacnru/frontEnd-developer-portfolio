import { useParams } from "react-router";
import blogPosts from "../../../Data/blogPosts";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { useContext } from "react";
import { ThemeContext } from "../../../context/Theme";

function BlogCardDatail() {
  const { id } = useParams();
  const { theme } = useContext(ThemeContext);

  const post = blogPosts.find((post) => post.id === Number(id));

  if (!post) return <p>مقاله پیدا نشد</p>;

  return (
    <div className="mx-20 my-10">
      <div
        className="w-full h-48 px-2 mb-5 flex items-center justify-center rounded-lg text-white font-bold overflow-hidden"
        style={{
          background:
            post.category === "JavaScript"
              ? `radial-gradient(circle at 20% 30%, #facc15, transparent 40%),
           radial-gradient(circle at 80% 70%, #f97316, transparent 50%),
           radial-gradient(circle at 50% 50%, #f59e0b, transparent 60%)`
              : post.category === "CSS"
                ? `radial-gradient(circle at 30% 40%, #a78bfa, transparent 40%),
           radial-gradient(circle at 70% 60%, #ec4899, transparent 50%),
           radial-gradient(circle at 50% 50%, #0ea5e9, transparent 60%)`
                : post.category === "React"
                  ? `radial-gradient(circle at 25% 35%, #38bdf8, transparent 40%),
           radial-gradient(circle at 75% 65%, #3b82f6, transparent 50%),
           radial-gradient(circle at 50% 50%, #6366f1, transparent 60%)`
                  : `radial-gradient(circle at 20% 30%, #9ca3af, transparent 40%),
           radial-gradient(circle at 80% 70%, #6b7280, transparent 50%),
           radial-gradient(circle at 50% 50%, #d1d5db, transparent 60%)`,
        }}
      >
        <span className="text-xl z-10 font-[QurovademoRegular]">
          {post.category}
        </span>
      </div>
      <div className="">
        {post.tags.map((item) => (
          <span key={item} className="bg-white text-indigo-500 px-2 text-sm rounded-2xl mx-1">{item}</span>
        ))}
      </div>
      <div className="mt-10 space-y-10">
        <h2 className="text-2xl">موضوع : {post.title}</h2>
        <p className="border-r-4 border-indigo-500 pr-4">{post.content}</p>
        <SyntaxHighlighter
          language="javascript"
          style={theme === "dark" ? oneDark : oneLight}
        >
          {post.example}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default BlogCardDatail;
