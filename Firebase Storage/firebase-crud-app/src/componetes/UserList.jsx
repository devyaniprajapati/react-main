// src/components/UserList.jsx
import React, { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

const UserList = ({ setUser, setIsEditing }) => {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const fetchUsers = async () => {
    const data = await getDocs(usersCollectionRef);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const handleDelete = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
    fetchUsers();
  };

  const handleEdit = (user) => {
    setUser(user);
    setIsEditing(true);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Users List</h2>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.title}</h3>
          <p>Price: {user.price}</p>
          <p>Description: {user.description}</p>
          <p>Category: {user.category}</p>
          <img src={user.image} alt={user.title} width="100" />
          <button onClick={() => handleEdit(user)}>Edit</button>
          <button onClick={() => handleDelete(user.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default UserList;
