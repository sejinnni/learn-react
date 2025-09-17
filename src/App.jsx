import './App.css'
import {useState} from 'react'
import {useEffect} from "react";

 function Timer(){
  const [count,setCount] = useState(10);
  const [isRun, setIsRun]= useState(false);

  useEffect(()=>{
    console.log(isRun);
    if(!isRun) return;

    const Interval = setInterval(()=>{
      setCount(prevCount => {
        if (prevCount <= 1) {
          setIsRun(false);
          return 0;
        }
        return prevCount - 1;
      });
    },1000)

    return()=>clearInterval(Interval);
  },[isRun]);
  
  const handle=()=>{
    console.log('시작버튼');
    setIsRun(true);
  }

  return(
    <>
      <h2>{count}</h2>
      <button onClick={handle}>시작</button>
    </>
  )
 }



const App = () => {
  return (
    <Timer/>
  )
}

export default App