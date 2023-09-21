import React, { useState,useRef } from 'react'

const Ref1 = () => {
    const inputvalue = useRef();
    
    const handleInputChange = () =>{
      inputvalue.current.focus();
    }
  return (
    <div>
      <h1>Sample component</h1>
      <input type="text" name="inp" id="" ref={inputvalue}/>
      <button onClick={handleInputChange}>Click</button>
    </div>
  )
}

export default Ref1