import './App.css'

const members = [
  {id: "1", name: "김호준", job: "디자이너"},
  {id: "2", name: "이민수", job: "개발자"},
  {id: "3", name: "박지영", job: "PM"}
];


function CardList({members}){
  return (
    <div style={{display:"flex",gap:"40px"}}>
      {members.map((person)=>(
        <div key={person.id} style={{border : "1px solid gray", padding:"12px 60px", borderRadius:"8px"}}>
          <p>{person.name}</p>
          <p>{person.job}</p>
        </div>
      ))}
    </div>
  )
}

const App = () => {
  return (
    <CardList members={members}/>
  )
}

export default App