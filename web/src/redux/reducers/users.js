import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  auth: false,
  username: null,
  fullName: null,
  email: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    ...initialState,
  },
  reducers: {
    login(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    logout(state, action) {},
    updateUser(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

const { actions, reducer } = usersSlice;

const { login, logout, updateUser } = actions;

export { login, logout, updateUser };

export default reducer;
