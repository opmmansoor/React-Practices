import React, { useState } from 'react'

function Search() {

    const [search, setSearch] = useState("")

    const fruits = [{"id": "1", "name":"Mango", "category": "M"}, 
                    {"id": "2", "name":"Apple","category": "A"},
                    {"id": "3", "name":"Banana", "category": "B"},
                    {"id": "4", "name":"Amble","category": "A"},
                    {"id": "5", "name":"Cabege", "category": "C"}];

    const searchMatch  = fruits.filter((item) => 
        item.name.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div>
      <input type="text"
             placeholder='Search Product'
             value={search}
             onChange={(e) => setSearch(e.target.value)}/>

      <ul>{searchMatch.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
      </ul>       
    </div>
  )
}
export default Search
