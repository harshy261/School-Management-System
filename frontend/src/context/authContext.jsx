// ./src/context/AuthContext.js

import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null); // Initialize with null or initial user state

  const login = (userData) => {
    // Logic to authenticate user and set currentUser
    setCurrentUser(userData);
  };

  const logout = () => {
    // Logic to clear user session
    setCurrentUser(null); // Clear currentUser
    // Additional logic to clear any stored tokens or session details
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
