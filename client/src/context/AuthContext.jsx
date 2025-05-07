import { createContext, useState, useEffect, use } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user')) || null);
  const [userType, setUserType] = useState('');
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);
  return (
    <AuthContext.Provider value={{ user, setUser,userType,setUserType }}>
      {children}
    </AuthContext.Provider>
  );
};