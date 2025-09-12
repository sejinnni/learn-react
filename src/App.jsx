import './App.css'
import {useState} from 'react'

const fruits =["사과","바나나","오렌지","포도"];

function FruitList({fruits}){
  return(
    <div>
      {fruits.map((fruit,index)=>(
        <ul key={index}>
          <li>{fruit}</li>
        </ul>
      ))}
    </div>
  )
}

const App = () => {
  return (
    <FruitList fruits={fruits}/>
  )
}

export default App