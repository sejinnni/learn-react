import './App.css'
import {useState} from 'react'

function ProductList(){
  const [state,setState] = useState([]);

  const products = [
    {id : 1, name :"사과", price :"1000"},
    {id : 2, name :"바나나", price :"2000"},
    {id : 3, name :"딸기", price :"3000"},
  ]

  const addCart = (product)=>{
    setState([...state,product]);
  }

  const deleteCart = (id)=>{
    setState(state.filter((product)=> product.id !== id))
  }
  return (
    <>
      <div>
        <h2>상품목록</h2>
        <button onClick={addCart}>추가버튼</button>
      </div>
      <div>
        <h2>장바구니</h2>
        <button onClick={deleteCart}>제거버튼</button>
      </div>
      <p>총액 : </p>
    </>
  )
}

const App = () => {
  return (
    <> 
      <ProductList/>
    </>

  )
}

export default App