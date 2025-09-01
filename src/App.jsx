import './App.css'
import {useState} from 'react'

function ToggleButton(){
  const [isOn,setState] = useState(0);
  const handleClick=()=>{
    setState(!isOn)
  }

  return(
    <>
    <button onClick={handleClick}>
      {isOn ? "on" : "off"}
    </button>
    </>
  )
}

const App = () => {
  return (
    <ToggleButton/>
  )
}

export default App
