 import { useState } from 'react'
import './App.css'
 
 export default function Counter() {

    const [count, setCount] = useState(0)

    const handleCount =()=>{
        // alert('btn clicked')
        // setCount(5)
        const newCount = count+1;
        setCount(newCount);
    }

    const counterStyle ={
        border: '1px solid yellow'
    }
    return (
        <div style={counterStyle}>
          <h3>Count: {count}</h3>
          <button className="btn" onClick={handleCount}>Add</button>
        </div>
    )
}