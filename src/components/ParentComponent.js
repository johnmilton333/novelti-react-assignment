

import React, { useState } from 'react';
import UserForm from './UserForm';
import UserList from './UserList';

const ParentComponent = () => {
  const [users, setUsers] = useState([]);

  const handleCreateUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  const handleDeleteUser = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };

  const handleEditUser = (editedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === editedUser.id ? editedUser : user
    );
    setUsers(updatedUsers);
  };

  return (
    <div>
      <UserForm onCreateUser={handleCreateUser} />
      <UserList
        users={users}
        onDeleteUser={handleDeleteUser}
        onEditUser={handleEditUser}
      />
    </div>
  );
};

export default ParentComponent;
