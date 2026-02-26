import React, { lazy, Suspense, useState } from "react";
import blogPosts from "../../Data/blogPosts";
import PostCard from "./components/PostCard";
import BlogHead from "./components/BlogHead";

const Pagination = lazy(() => import("./components/Pagination"));

function BlogPage() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 3;

  const filtered = blogPosts.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase()),
  );

  const totalPages = Math.ceil(filtered.length / perPage); // 10 ÷ 3 = 4 pages
  const start = (page - 1) * perPage;
  const end = start + perPage;
  const currentPosts = filtered.slice(start, end);
  return (
    <>
      <BlogHead searchValue={search} setSearchValue={setSearch} />

      <div className="mx-20 my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {currentPosts.map((p) => (
          <PostCard key={p.id} {...p} />
        ))}
        {currentPosts.length === 0 && (
          <p className="col-span-3 text-center text-gray-500">
            مقاله‌ای پیدا نشد.
          </p>
        )}
      </div>

      {totalPages > 1 && (
        <Suspense
          fallback={
            <div className="text-center text-gray-400 my-5">
              در حال بارگذاری...
            </div>
          }
        >
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </Suspense>
      )}
    </>
  );
}

export default BlogPage;
