import React ,{ useState } from "react"

function PaginationDynamic  () {
    const [animals, setAnimals] = useState([
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
    "monkey",
     ]);

    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(3);

    const totalPages = Math.ceil(animals.length / pageSize);

    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    const paginatedAnimals = animals.slice(startIndex, endIndex);

// Generate page numbers
    const pageNumbers = Array.from(
        { length: totalPages },
        (_, index) => index + 1
    );

    return (
        <div>
            <h2>Animal Pagination</h2>

{/* Dynamic page size */}
            {/* <label> Items Per page </label>

            <select value={pageSize}
                    onChange={(e) => {
                        setPageSize(Number(e.target.value));
                        setPage(1);
                    }}>

                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={5}>5</option>
                <option value={10}>10</option>
            </select> */}

            <ul>
                {paginatedAnimals.map((item,index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            <button onClick={() => setPage(page - 1)}
                    disabled={page === 1}>
                Prev
            </button>

            {pageNumbers.map((number) => (
                <button key={number}
                        onClick={() => setPage(number)}
                        
                        style={{ backgroundColor: page === number ? "blue" : "white",
                                color: page === number ? "white" : "black", margin: "5px"
                        }}>
                    {number}
                </button>
            ))}

            <button onClick={() => setPage(page + 1)}
                    disabled={page === totalPages}>
                Next
            </button>

            <p>Page {page} of {totalPages}</p>
        </div>
    )
}
export default PaginationDynamic