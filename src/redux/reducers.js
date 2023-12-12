// redux/reducers.js
const initialState = {
    users: [], // Initial state for users
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CREATE_USER':
        // Logic to create a new user
        return { ...state, users: [...state.users, action.payload] };
      case 'UPDATE_USER':
        // Logic to update a user
        return {
          ...state,
          users: state.users.map((user) =>
            user.id === action.payload.userId ? { ...user, ...action.payload.userData } : user
          ),
        };
      // ... other cases for handling actions
      default:
        return state;
    }
  };
  
  export default userReducer;
  