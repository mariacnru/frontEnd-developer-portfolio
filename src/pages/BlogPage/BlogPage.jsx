import React from "react";
import blogPosts from "../../Data/blogPosts";
import PostCard from "./components/PostCard";

function BlogPage() {
  return (
    <div className="mx-20 my-10 grid grid-cols-3 gap-5">
      {blogPosts.map((item) => (
        <PostCard key={item.id} {...item} />
      ))}
    </div>
  );
}

export default BlogPage;
