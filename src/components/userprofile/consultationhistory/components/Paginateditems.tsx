import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Historycard from "./Historycard";

function Items({ currentItems }: { currentItems: any[] }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item, index) => (
          <Historycard key={index} item={item} />
        ))}
    </>
  );
}

export default function PaginatedItems({
  itemsPerPage,
  items,
}: {
  itemsPerPage: number;
  items: any;
}) {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
  
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        previousLinkClassName="pagination__link"
        nextLinkClassName="pagination__link"
        disabledClassName="pagination__link--disabled"
        activeClassName="pagination__link--active"
      />
    </>
  );
}
