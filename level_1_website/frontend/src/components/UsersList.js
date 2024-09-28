import React, { useEffect, useState} from 'react'
import {getAllUsers} from '../services/UserService';
//import { response } from 'express';

// src/components/UsersList.js
//import React, { useEffect, useState } from 'react';
//import { getAllUsers } from '../services/UserService';

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers()
      .then((response) => setUsers(response.data))
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  return (
    <div>
      <h2>Users List</h2>
      {users.length === 0 ? (
        <p>No users available.</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}
            style = {{
              color: 'magenta'
            }}>
              {user.name} ({user.email})
           
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UsersList;