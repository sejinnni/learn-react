import './App.css'
import {useState} from 'react'



const products = [
  {id: "1", name: "노트북", price: 1200000,category:"전자제품"},
  {id: "2", name: "키보드", price: 80000,category:"전자제품"},
  {id: "3", name: "의자", price: 2000000,category:"가구"},
  {id: "4", name: "책상", price: 50000000,category:"가구"},
];

function TabButton(){
  const [state,setState] = useState("전자제품");

  const handle=()=>{
    setState("전자제품");
  }

  const FHandle=()=>{
    setState("가구");
  }

  return(
    <>
    <div style={{padding: "20px"}}>
      <button onClick={handle} style={{margin: "12px"}}>전자제품</button>
      <button onClick={FHandle} style={{margin: "12px"}}>가구</button>
    </div>
    <div>
      {state === "전자제품" && <ProductList category="전자제품"/>}
      {state === "가구" && <ProductList category="가구"/>}
    </div>
    </>
  )
}

function ProductList({category}){
  // console.log(category) //가구 전자제품 return 아무거나 다 나옴 
  const filterProduct = products.filter(
  (product)=>product.category === category
  )
  return(
    filterProduct.map((product)=>
      <div key = {product.id}  style={{display:"flex", justifyContent:"space-between"}}>
        <p style={{color:"#ffffff"}}>{product.name}</p>
        <p style={{color:"lightblue"}}>{product.price}</p>
      </div>)
  )
}


const App = () => {
  return (
    <>  
      <TabButton/>
    </>

  )
}

export default App