// src/components/PrivateRoutes.jsx
import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoutes({ user, children }) {
  return user ? children : <Navigate to="/signin" />;
}

export default PrivateRoutes;
