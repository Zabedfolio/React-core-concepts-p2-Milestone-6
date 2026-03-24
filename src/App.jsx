import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  function handleClick(){
    alert("I am Clicked")
  }

  const handleClick3 = () => {
    alert("click 3")
  }

  const handleSum = (num)=>{
    const newNum = num+5;
    alert(newNum);
  }

  return (
    <>
      <h3>Vite + React</h3>
      
      {/* using regular function */}
      <button className='btn' onClick={handleClick}>Click Me</button>
      <button className='btn' onClick={handleClick3}>Click Me2</button>

      {/* shortcut- using arrow function */}
      <button className='btn' onClick={()=>alert('click 4')}>Click 4</button>

      {/* sum */}
      <button className='btn' onClick={()=>handleSum(7)}>Sum</button>
    </>
  )
}

export default App
