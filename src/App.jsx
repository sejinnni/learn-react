import './App.css'
import {useState} from 'react'

function Button({status, style}){
  return(
    <>
    <button style={style}>
      { status > 0 ? "구매하기" : status < 0 ? "품절" : "출시예정" } </button>
    </>
  )
}

const App = () => {
  return (
    <div style={{display:"flex", gap:"20px"}}>
      <Button status={1} style={{backgroundColor:"#007bff"}}/>
      <Button status={-1} style={{backgroundColor:"#6c757d"}} />
      <Button status={0} style={{backgroundColor:"#6f42c1"}}/>
    </div>
  )
}

export default App