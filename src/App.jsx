import './App.css'
import {useState} from 'react'

function InfoForm(){
  const [name,setName] =useState("");
  const [email,setEmail] = useState("");
  const [form, setForm]=useState("");

  const handle=(e)=>{
    setName(e.target.value);
  }

  const eHandle=(e)=>{
    setEmail(e.target.value);
  }

  const submitHandle=(e)=>{
    e.preventDefault();
    setForm({name, email});

    setName("");
    setEmail("");
  }

  return(
    <div>
      <form onSubmit={submitHandle}>
        <p>이름 : <input type="text" value={name} onChange={handle}></input></p>
        <p>이메일 : <input type="text" value={email} onChange={eHandle}></input></p>
        <button type="submit">제출하기</button>
      </form>
      {form && (<p> 제출 : {form.name} {form.email} </p>)}
    </div>
  ) 
}



const App = () => {
  return (
    <InfoForm/>
  )
}

export default App