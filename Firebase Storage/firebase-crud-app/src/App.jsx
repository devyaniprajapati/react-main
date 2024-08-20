// src/App.jsx
import React, { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

function App() {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="App">
      <h1>Firebase CRUD App</h1>
      <UserForm user={user} isEditing={isEditing} setIsEditing={setIsEditing} />
      <UserList setUser={setUser} setIsEditing={setIsEditing} />
    </div>
  );
}

export default App;
