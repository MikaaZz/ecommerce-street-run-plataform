'use client'
import React, { createContext, useState } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  // Add any other fields if required
}

interface DBUserContextProps {
  user: User | null;
  getUser: (id: string) => void;
  updateUser: (user: User) => void;
  // Add more methods as required
}

const DBUserContext = createContext<DBUserContextProps | null>(null);

interface DBUserProviderProps {
  children: React.ReactElement | React.ReactElement[];
}

const DBUserProvider: React.FunctionComponent<DBUserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const getUser = async (id: string) => {
    // Fetch and set the user based on ID
    // setUser(fetchedUser);
  };

  const updateUser = (updatedUser: User) => {
    // Update the user information
    setUser(updatedUser);
  };

  return (
    <DBUserContext.Provider value={{ user, getUser, updateUser }}>
      {children}
    </DBUserContext.Provider>
  );
};

export { DBUserProvider, DBUserContext };
