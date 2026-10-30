import React, { useState } from "react";

function Pagination() {
  const animals = [
    "cat",
    "dog",
    "elephant",
    "lion",
    "tiger",
    "puma",
    "leopard",
    "zebra",
    "horse",
    "squirrel",
  ];

  const [page, setPage] = useState(1);
  const PAGE_SIZE = 3;

  const totalPages = Math.ceil(animals.length / PAGE_SIZE);
  
  const paginatedAnimals = animals.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE,
  );
  console.log(paginatedAnimals);
  return (
    <div>
      <ul>
        {paginatedAnimals.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        prev
      </button>
      <button onClick={() => setPage(page + 1)} disabled={page === totalPages }>next</button>
    </div>
  );
}

export default Pagination;
