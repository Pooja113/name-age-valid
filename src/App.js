import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [usersList, setusersList] = useState([]);
  const addUserHander = (uName,uAge) =>{
    setusersList((prevState)=>{
      return [...prevState, {name: uName,age: uAge,id: Math.random().toString()}]
    })
  }
  return (
    <div className="App">
      <AddUser onAddUser = {addUserHander}/>
      <UserList users ={usersList}/>
    </div>
  );
}

export default App;
