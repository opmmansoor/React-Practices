import React, { useState } from 'react'

function SearchFilter() {
    const [search, setSearch] = useState("");
    const [catoger, setCatoger] = useState("");

    const fruits = [{"id": "1", "name":"Mango", "category": "M"},                          
                    {"id": "2", "name":"Apple","category": "A"},
                    {"id": "3", "name":"Banana", "category": "B"},
                    {"id": "4", "name":"Amble","category": "A"},
                    {"id": "5", "name":"Cabege", "category": "C"},
                    {"id": "6", "name":"Mango", "category": "M"},
                    {"id": "7", "name":"Pinapple","category": "A"},
                    {"id": "8", "name":"Banana", "category": "B"},
                    {"id": "9", "name":"Plum","category": "A"},
                    {"id": "10", "name":"Orange", "category": "O"}];

    const filteredProduct = fruits.filter((item) => {
        const searchMatch = item.name.toLowerCase().includes(search.toLowerCase());

        const categoryMatch = catoger === "" || item.category === catoger;

        return searchMatch && categoryMatch;
    })
    

  return (
    <div>
        <h2>Product List</h2>

        <input type="text"
               placeholder='Search Here'
               value={search} 
               onChange={(e) => setSearch(e.target.value)}/>


        <select value={catoger} 
                onChange={(e) => setCatoger(e.target.value)}>
            <option value="">All</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="O">O</option>
            <option value="M">M</option>
        </select>

        <ul>{filteredProduct.map((item) => (
            <li key={item.id}>{item.name}</li>
        ))}</ul>
      
    </div>
  )
}

export default SearchFilter
