import React,{ useEffect, useRef, useState }from 'react'

const Ref2 = () => {
    const [inputVal,setInputVal] = useState("");
    const count = useRef(0);

    useEffect(()=>{
        count.current = count.current+1;
    })
    
  return (
    <div>
      <input type="text" onChange={(e)=>setInputVal(e.target.value)}/>
      <h1>Count : {count.current}</h1>
    </div>
  )
}

export default Ref2