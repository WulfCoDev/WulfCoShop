// AuthContext.jsx

import React, { createContext, useContext, useState } from 'react';
import * as api from '../../utils/api'; // your API functions are here

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  
  const login = async (username, password, token) => {
   
    localStorage.setItem('token', token);

    
    const allUsers = await api.fetchAllUsers();
    
    
    const matchedUser = allUsers.find(user => user.username === username && user.password === password);

    if (matchedUser) {
      
      const userDetails = await api.fetchSingleUser(matchedUser.id);
      
      setCurrentUser({
        id: userDetails.id,
        username: userDetails.username,
       
      });
    }
  };


  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
