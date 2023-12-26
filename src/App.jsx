import { useState } from 'react'
import './App.css'
import Hero from './Components/hero'
import { Route,Routes } from 'react-router-dom'
import Navbar from './Components/navbar'
import Home from './Components/Home'
import Signup from './Components/Signup'

function App() {
  const[income,setincome] = useState(""); //income
  const[income_submit,setincome_submit] = useState(false) //??????????
  const[expenses,setexpense] = useState([]);

  return (
    <>
    <Navbar />
    <Routes>  
      <Route path="/login" element={<Hero />} />
      <Route path='/' element={<Home income={income} setincome={setincome} income_submit={income_submit} setincome_submit={setincome_submit} expenses={expenses} setexpense={setexpense} /> } />
      <Route path='/Signup' element={<Signup /> } />
    </Routes>
    </>
  )
}

export default App
