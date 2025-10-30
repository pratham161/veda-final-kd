import React from 'react';
import { Navigate } from 'react-router-dom';

// Simulated auth getter (replace with your real auth logic)
const getAuth = () => {
  const user = JSON.parse(localStorage.getItem("user")); // or from context
  return {
    isAuthenticated: !!user,
    role: user?.role || null
  };
};

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { isAuthenticated, role } = getAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default ProtectedRoute;
