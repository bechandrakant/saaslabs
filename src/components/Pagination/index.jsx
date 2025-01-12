import React from "react";
import "./style.css";

const Pagination = ({ currentPage, setCurrentPage, totalPage }) => {
  let pages = Array.from({ length: totalPage }, (_, i) => i + 1);

  return (
    <div className="pagination-container">
      {currentPage > 1 && (
        <button
          onClick={() => {
            setCurrentPage(currentPage - 1);
          }}
        >
          Previous
        </button>
      )}
      <div
        className="pagination"
        onClick={(e) => {
          setCurrentPage(Number(e.target.innerText));
        }}
      >
        {pages.map((pageNumber) => (
          <button
            key={pageNumber}
            className={pageNumber === currentPage ? "active" : ""}
          >
            {pageNumber}
          </button>
        ))}
      </div>
      {currentPage < totalPage && <button>Next</button>}
    </div>
  );
};

export default Pagination;
