import React, { useState } from 'react'

function Form() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [Cpassword, SetCPassword] = useState("");
    const [mobile, setMobile] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name === "" || name.length > 10 ) {
            alert("Please enter your name")
        } else if (email === "") {
            alert("Please enter your Email")
        } else if (password.length > 6 ){
            alert("Password must be at least 6 characters")
        } else if (Cpassword !== password) {
            alert(" enter currect password")
        } else if (mobile === "") {
            alert("please Enter your mobile number")
        } else if ( mobile.length !== 10) {
            alert("Mobile number must be 10 Degit")
        } else { 
            alert("Singup Successful!")

            const user = {
                name,
                email,
                mobile,
            };
            localStorage.setItem("user", JSON.stringify(user));
        }
    }





  return (
    <div >
        <form onSubmit={handleSubmit}>
            <h1>Singup Form</h1>

            <label >Name: </label>
            <input type="text"
                    name='name'
                    placeholder='Enter Your Name' 
                    onChange={(e) => setName(e.target.value)}/>

                    <br/>

            <label >Email: </label>
            <input type="email"
                    name='email'
                    placeholder='Enter Email Address' 
                    onChange={(e) => setEmail(e.target.value)}/>

                    <br/>

            <label >Password: </label>
            <input type="password"
                    name='password'
                    placeholder='Entrer Password' 
                    onChange={(e) => setPassword(e.target.value)}/>

                    <br/>

            <label >Confirm Password: </label>
            <input type="password"
                    name='Confirm Password'
                    placeholder='Confirm Passwrd' 
                    onChange={(e) => SetCPassword(e.target.value)}/>

                    <br/>

            <label >Mobile: </label>
            <input type="tel"
                    name='number'
                    placeholder='Enter Mobile Number'
                    onChange={(e) => setMobile(e.target.value)}/>

                    <br/>

            <button type='submit'>
                Sing up
            </button>
        </form>
    </div>
  )
}

export default Form
