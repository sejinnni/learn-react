import './App.css'
import {useState} from 'react'


function ToggleButton(){
  const [state,setState] = useState(true);
  const handle=()=>{
    setState(!state)
  }

  return(
  <div>
    <button onClick={handle}>
      {state ?"Light" : "Dark"}
    </button>

    {state && <p style={{backgroundColor:"white", color:"black", padding:"12px 24px"}}>라이트 모드입니다.</p>}
    {!state && <p style={{backgroundColor:"black", color:"white", padding:"12px 24px"}}>다크 모드입니다.</p>}
  </div>

  )
}

const App = () => {
  return (
    <>  
    <ToggleButton/>
    </>

  )
}

export default App