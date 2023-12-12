// ParentComponent.js

import React, { useState } from 'react';
import UserList from './UserList';

const ParentComponent = () => {
  const [users, setUsers] = useState([]);

  // Define the onCreateUser function
  const handleCreateUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <div>
      {/* Other components or content */}
      <UserList onCreateUser={handleCreateUser} users={users} />
    </div>
  );
};

export default ParentComponent;
