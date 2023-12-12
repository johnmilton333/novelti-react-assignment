

import React, { useState } from 'react';




const UserList = ({ users, onDeleteUser, onEditUser }) => {
  const [editingUserId, setEditingUserId] = useState(null);
  const [editedUserData, setEditedUserData] = useState(null);

  const handleEditClick = (userId) => {
    setEditingUserId(userId);
    
    const userToEdit = users.find((user) => user.id === userId);
   
    setEditedUserData(userToEdit);
  };

  const handleSaveClick = () => {
  
    onEditUser(editedUserData);

    setEditingUserId(null);
    setEditedUserData(null);
  };

  const handleCancelClick = () => {
  
    setEditingUserId(null);
    setEditedUserData(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
 
    setEditedUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="user-list">
      <h2>User List</h2>
      {users.map((user) => (
        <div className="user-card" key={user.id}>
          {editingUserId === user.id ? (
            <>
              <p>
                <strong>Name:</strong>{' '}
                <input
                  type="text"
                  name="firstName"
                  value={editedUserData.firstName}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="lastName"
                  value={editedUserData.lastName}
                  onChange={handleChange}
                />
              </p>
              <p>
                <strong>Email:</strong>{' '}
                <input
                  type="text"
                  name="email"
                  value={editedUserData.email}
                  onChange={handleChange}
                />
              </p>
              <p>
                <strong>Mobile:</strong>{' '}
                <input
                  type="text"
                  name="mobile"
                  value={editedUserData.mobile}
                  onChange={handleChange}
                />
              </p>
              <p>
                <strong>Address 1:</strong>{' '}
                <input
                  type="text"
                  name="address1"
                  value={editedUserData.address1}
                  onChange={handleChange}
                />
              </p>
              <p>
                <strong>Address 2:</strong>{' '}
                <input
                  type="text"
                  name="address2"
                  value={editedUserData.address2}
                  onChange={handleChange}
                />
              </p>
              <p>
                <strong>State:</strong>{' '}
                <input
                  type="text"
                  name="state"
                  value={editedUserData.state}
                  onChange={handleChange}
                />
              </p>
              <p>
                <strong>Country:</strong>{' '}
                <input
                  type="text"
                  name="country"
                  value={editedUserData.country}
                  onChange={handleChange}
                />
              </p>
              <p>
                <strong>Zip Code:</strong>{' '}
                <input
                  type="text"
                  name="zipCode"
                  value={editedUserData.zipCode}
                  onChange={handleChange}
                />
              </p>
              <div className="user-actions">
                <button onClick={handleSaveClick}>Save</button>
                <button onClick={handleCancelClick}>Cancel</button>
              </div>
            </>
          ) : (
            <>
              <p>
                <strong>Name:</strong> {user.firstName} {user.lastName}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Mobile:</strong> {user.mobile}
              </p>
              <p>
                <strong>Address 1:</strong> {user.address1}
              </p>
              <p>
                <strong>Address 2:</strong> {user.address2}
              </p>
              <p>
                <strong>State:</strong> {user.state}
              </p>
              <p>
                <strong>Country:</strong> {user.country}
              </p>
              <p>
                <strong>Zip Code:</strong> {user.zipCode}
              </p>
              <div className="user-actions">
                <button onClick={() => onDeleteUser(user.id)}>Delete</button>
                <button onClick={() => handleEditClick(user.id)}>Edit</button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default UserList;

