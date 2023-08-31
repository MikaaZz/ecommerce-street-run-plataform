'use client'
import React, { createContext, useContext, useState, useEffect } from "react";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AllUsersContextProps {
  allUsers: User[];
  getAllUsers: () => void;
}


const AllUsersContext = createContext<AllUsersContextProps | null>(null);

const useAllUsers = () => {
  const context = useContext(AllUsersContext);
  if (!context) {
    throw new Error('useAllUsers must be used within an AllUsersProvider');
  }
  return context;
};

interface AllUsersProviderProps {
  children: React.ReactElement | React.ReactElement[];
}

const AllUsersProvider: React.FunctionComponent<AllUsersProviderProps> = ({ children, }) => {
  const [allUsers, setAllUsers] = useState<User[]>([]);

  const getAllUsers = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setAllUsers(data.data.users);
      } else {
        console.error('Server responded with an error:', response.status);
      }
    } catch (error) {
      console.error('There was an error fetching the users', error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <AllUsersContext.Provider value={{ allUsers, getAllUsers }}>
      {children}
    </AllUsersContext.Provider>
  );
};

export { AllUsersProvider, useAllUsers };
