import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Counter from './counter'
import Batsman from './batsman'
import Users from './users'
import Friends from './friends'

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())

const fetchFriends = async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    return res.json();
}

function App() {

  const friendPromise = fetchFriends();

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

      {/* friends */}
      <Suspense fallback={<h3>Friends are coming...</h3>}>
        <Friends friendPromise={friendPromise}></Friends>
      </Suspense>

      {/* users */}
      <Suspense fallback={<h3>loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>
      
      {/* batsman */}
      <Batsman></Batsman>


      {/* counter */}
      <Counter></Counter>
      
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
