'use client'
import React from 'react';

import CreateUser from '@/components/CreateUser';
import { useAllUsers } from '@/shared/context/AllUsersContextProps ';



export default function Home() {
  const { allUsers, getAllUsers } = useAllUsers();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CreateUser />
      <ul>
        {allUsers.map((user) => (
          <li key={user.id}>
            <div className="flex items-center">
              <div className="ml-2">
                <p className="text-sm text-gray-200 font-medium">{user.name}</p>
                <p className="text-xs text-gray-500">{user.email}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}
