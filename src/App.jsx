import './App.css'
import {useState} from 'react'

function LikeButton(){
  const colors = ["red","gray"];
  const [count,setCount] = useState(0);
  const [colorArrange,setColorArrange] = useState(colors[0]);

  const likeHandle =()=>{
    setCount(count+1);
    setColorArrange(colors[(count+1) % colors.length]);
  }
  return(
    <>
      <button onClick={likeHandle} style={{backgroundColor: colorArrange}} ></button>
      <p>좋아요수 : {count}</p>
    </>
  )
}
const App = () => {
  return (
    <LikeButton/>
  )
}

export default App