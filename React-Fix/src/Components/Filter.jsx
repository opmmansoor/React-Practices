import React, { useState } from 'react'

function Filter() {

    const [product, setProduct] = useState("");

    const fruits = [{"id": "1", "name":"Mango", "category": "M"}, 
                    {"id": "2", "name":"Apple","category": "A"},
                    {"id": "3", "name":"Banana", "category": "B"},
                    {"id": "4", "name":"Amble","category": "A"},
                    {"id": "5", "name":"Cabege", "category": "C"}];

    const filteredProduct = product === ""
            ? fruits
            : fruits.filter((item) => item.category === product)
  return (
    <div>
        <h2> Fruts Filter </h2>

        <select value={product}
                onChange={(e) => setProduct(e.target.value)}>

           <option value="">Select</option>
           <option value="A">A</option>
           <option value="B">B</option>
           <option value="C">C</option>
           <option value="M">M</option>
        </select>

        <ul>{filteredProduct.map((item) => (
            <li key={item.id}>{item.name}</li>
        ))}
        </ul>
      
    </div>
  )
}

export default Filter
