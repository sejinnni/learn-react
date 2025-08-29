import './App.css'
import {useState} from 'react'

const Counter = () => {
  const [number,setNumber] = useState(0);
  const handleClick=()=>{
    setNumber(number+1);
  }
  return(
    <div>
      <button onClick={handleClick}>number :{number} </button>
    </div>
  );
}

const App = () => {

  return (
    <>
       <Counter/>
    </>
  )
}

export default App
