// components/CreateUser.js
import React from 'react';
import { useDispatch } from 'react-redux';
import UserForm from './UserForm';
import { createUser } from '../redux/actions';

const CreateUser = () => {
  const dispatch = useDispatch();

  const handleSubmit = (userData) => {
    // Dispatch action to create a new user
    dispatch(createUser(userData));
  };

  return (
    <div>
      <h1>Create User</h1>
      <UserForm onSubmit={handleSubmit} />
    </div>
  );
};

export default CreateUser;
