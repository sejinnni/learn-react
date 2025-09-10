import './App.css'
import {useState} from 'react'

function Message({count}){

  return(
      <div style={{display:"flex",gap:"20px"}}>
        메시지<div style={{ backgroundColor:"red", padding:"0 12px", borderRadius:"4px"}}>{count === 0 ? 0 : count > 99 ? `99+` : count}</div>
      </div>
  )
}

const App = () => {
  return (
   <div style={{display:"flex",gap:"20px"}}>
    <Message count={0}/>
    <Message count={5}/>
    <Message count={100}/>
   </div> 
    

  )
}

export default App