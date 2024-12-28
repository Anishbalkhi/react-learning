import React, {useState}from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const increament= ()=>{
        setCount(count+1)
    }
    
    const Decreament= ()=>{
        setCount(count-1)
    }
    
    const Reset = ()=>{
        setCount(0)
    }
    

  return (
    <div className='counter'>
      <p className='value'>{count}</p>
      <button className='counter-button' onClick={increament}>Increament</button>
      <button className='counter-button' onClick={Reset}>Reset</button>
      <button className='counter-button' onClick={Decreament}>Decreament</button>
      
    </div>
  )
}


export default Counter
