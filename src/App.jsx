import './App.css'
import {useState} from 'react'

function TapButton(){
  const [content,setConent]=useState(0);
  const homeHandle=()=>{
    setConent(1);
  }
  const productHandle=()=>{
    setConent(2);
  }
  const callHandle=()=>{
    setConent(3);
  }

  return(
    <>
      <div>
        <button onClick={homeHandle}>홈</button>
        <button onClick={productHandle}>상품</button>
        <button onClick={callHandle}>고객문의</button>
      </div>
      <div>
        {content === 1 && <p>홈 화면입니다.</p>}
        {content === 2 && <p>제품 상세화면입니다.</p>}
        {content === 3 && <p> 문의 화면입니다.</p>}
      </div>

    </>
  )
}
const App = () => {
  return (
    <TapButton/>
  )
}

export default App