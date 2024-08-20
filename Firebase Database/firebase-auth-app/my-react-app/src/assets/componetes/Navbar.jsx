// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase-config";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Navbar({ user }) {
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <nav>
      <Link to="/">Home</Link>
      {user && <Link to="/dashboard">Dashboard</Link>}
      {user ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <Link to="/signin">Sign In</Link>
      )}
    </nav>
  );
}

export default Navbar;
