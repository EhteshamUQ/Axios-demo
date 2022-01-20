import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DisplayUsers from "./components/DisplayUsers";
import AddUser from "./components/AddUser";
import DeleteUser from "./components/DeleteUser";
function App() {
  return (
    <div>
      <DisplayUsers />
      <AddUser />
      <DeleteUser />
    </div>
  );
}

export default App;
