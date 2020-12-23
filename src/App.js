import React,{useState} from "react";
import Form from "./components/form";
import Table from "./components/table";
import "./App.css";

function App() {
  const [users,setUser] = useState([])
  return (
    <div>
      <Form users={users} setUser={setUser}/>
      <Table users={users}/>
    </div>
  );
}

export default App;
