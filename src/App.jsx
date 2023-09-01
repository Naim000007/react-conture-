import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(10);
  function addvalue(){
    setCount(count+1) 
    let a = count
    // console.log(a);
    if (a== 20)
      setCount(15)
    }
  
  function removevalue(){
    
    setCount(count-1)
    if (count == 0){
      setCount(15)
    }

  }


  return (
    <>
      <h1>Counter</h1>
      <h2>Counter value is {count}</h2>
      <button onClick={addvalue}>ADD value</button>
      <button onClick={removevalue}>Remove value</button>
      <p>value is {count}</p>
      <small>value is {count}</small>
    </>
  )
  }

export default App
