// src/components/UserForm.jsx
import React, { useState } from "react";
import { db } from "../firebase-config";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";

const UserForm = ({ user, isEditing, setIsEditing }) => {
  const [title, setTitle] = useState(user?.title || "");
  const [price, setPrice] = useState(user?.price || "");
  const [description, setDescription] = useState(user?.description || "");
  const [category, setCategory] = useState(user?.category || "");
  const [image, setImage] = useState(user?.image || "");

  const usersCollectionRef = collection(db, "users");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = { title, price, description, category, image };

    if (isEditing) {
      const userDoc = doc(db, "users", user.id);
      await updateDoc(userDoc, newUser);
      setIsEditing(false);
    } else {
      await addDoc(usersCollectionRef, newUser);
    }

    setTitle("");
    setPrice("");
    setDescription("");
    setCategory("");
    setImage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button type="submit">{isEditing ? "Update" : "Add"} User</button>
    </form>
  );
};

export default UserForm;
