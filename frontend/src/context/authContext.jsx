import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (role, formData) => {
    // Mock login logic
    
    setUser({ role, ...formData });
    // In a real app, you would also set a token here
  };

  const logout = () => {
    setUser(null);
    // In a real app, you would also remove the token here
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
