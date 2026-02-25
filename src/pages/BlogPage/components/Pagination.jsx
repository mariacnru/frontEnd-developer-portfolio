import React from "react";

function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="flex justify-center gap-2 my-10">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 rounded-sm border border-gray-200 text-sm disabled:opacity-50"
      >
        قبلی
      </button>

      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          onClick={() => onPageChange(i + 1)}
          className={`px-3 py-1 border border-gray-200 rounded-sm text-sm ${
            currentPage === i + 1 ? "bg-blue-500 text-white" : ""
          }`}
        >
          {i + 1}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 rounded-sm border border-gray-200 text-sm disabled:opacity-50"
      >
        بعدی
      </button>
    </div>
  );
}

export default Pagination;
