import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

function Home() {
    return <h2>Home Page</h2>
}

function About() {
    return <h2>This is About Page</h2>
}

function Router() {
  return (
    <div>
        <BrowserRouter>
           <nav>
             <Link to="/"> Home </Link>
             <Link to="/About"> About </Link>
           </nav>

           <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/About" element={<About/>}/>
           </Routes>
        </BrowserRouter>
      
    </div>
  )
}

export default Router
