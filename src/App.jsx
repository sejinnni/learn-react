import './App.css'
import {useState} from 'react'

function ProductList(){
  const [state,setState] = useState([]);

  const products = [
    {id : 1, name :"사과", price :1000},
    {id : 2, name :"바나나", price :2000},
    {id : 3, name :"딸기", price :3000}
  ]

  const addCart = (product)=>{
    setState([...state,product]);
  }

  const deleteCart = (id)=>{
    setState(state.filter((product)=> product.id !== id))
  }
  return (
    <div style={{display:"flex", gap:"20px"}}>
      <div>
        <h2>상품목록</h2>
          {products.map((product)=>
          <div key={product.id}> 
            <p>{product.name}</p>
            <p>{product.price}</p>
            <button onClick={() => addCart(product)}>추가버튼</button>
          </div>
          )}
        </div>
      <div>
        <h2>장바구니</h2>
        {/* product가 찬 state에서 제거 되어야 하니까 */}
        {state.map((product) => (
          <div key={product.id}>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <button onClick={() => deleteCart(product.id)}>제거버튼</button>
          </div>
        ))}
        <p>총액 :{state.reduce((total,product)=>{
        return total + product.price
      },0)} </p>
      </div>
    </div>
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