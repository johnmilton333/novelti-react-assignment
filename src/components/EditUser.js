// components/EditUser.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import UserForm from './UserForm';
import { updateUser } from '../redux/actions';

const EditUser = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();

  const handleSubmit = (userData) => {
    // Dispatch action to update the user
    dispatch(updateUser(userId, userData));
  };

  return (
    <div>
      <h1>Edit User</h1>
      <UserForm onSubmit={handleSubmit} />
    </div>
  );
};

export default EditUser;
