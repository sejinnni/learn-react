import './App.css'
import {useState} from 'react'

function TodoList(){
  const [todoList, setTodoList] = useState(["리액트 문제풀기", "포트폴리오 만들기"]);
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  }

  const addTodo = () => {
    if (input.trim() !== "") {
      setTodoList([...todoList, input]);
      setInput(""); // 입력 필드 초기화
    }
  }

  return(
    <>
    <input 
      type="text" 
      value={input} 
      onChange={handleInputChange}
      placeholder="할 일을 입력하세요"
    />
    <ul>
      {todoList.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
    <button onClick={addTodo}>추가</button>
    </>
  )
}

const App = () => {
  return (
    <TodoList/>
  )
}

export default App