import React,{useState} from 'react'

const State = () => {
    const [count,setCount]=useState(0)
    const countIncre=()=>{
        setCount(count+1)
    }
    const countDecre=()=>{
        setCount(count-1)
    }
  return (
    <div>
        <h1>count:{count}</h1>
        <button onClick={countIncre}>+</button>
        <button onClick={countDecre}>-</button>
      
    </div>
  )
}

export default State
