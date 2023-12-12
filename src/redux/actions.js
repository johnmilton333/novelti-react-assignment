// redux/actions.js
export const createUser = (userData) => ({
    type: 'CREATE_USER',
    payload: userData,
  });
  
  export const updateUser = (userId, userData) => ({
    type: 'UPDATE_USER',
    payload: { userId, userData },
  });
  