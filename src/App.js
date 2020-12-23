import React,{useState} from "react";
import Form from "./components/form";
import Table from "./components/table";
import "./App.css";

function App() {
  const initialUsers = JSON.parse(localStorage.getItem('users'))
  
  const [users,setUser] = useState(initialUsers)
  return (
    <div>
      <Form users={users} setUser={setUser}/>
      <Table users={users}/>
    </div>
  );
}

export default App;
