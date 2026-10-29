import React, { useState } from 'react'

function SelectOption() {

    const [values, setValues] = useState("");

  return (
    <div>
        <h2>Select Vehcle</h2>

        <select value={values}
                 onChange={(e) => setValues(e.target.value)}>
            <option value="">Select Option</option>
            <option value="Car">Car</option>
            <option value="Bike">Bike</option>
            <option value="Jeep">Jeep</option>
            <option value="Bus">Bus</option>
        </select>

        <h3>Selected : { values}</h3>
      
    </div>
  )
}

export default SelectOption
