import './App.css'
import {useState} from 'react'

function TextInput(){
  const [text,setText] =useState("");
  const handle = (e)=>{
    setText(e.target.value);
  }
  
  return(
    <form>
      <input type="text" value={text} onChange={handle}/>
      <p>입력한 텍스트: {text}</p>
    </form>
  )
}

const App = () => {
  return (
    <TextInput/>
  )
}

export default App