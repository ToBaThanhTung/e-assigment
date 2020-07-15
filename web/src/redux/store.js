import { configureStore } from '@reduxjs/toolkit';
import users from './reducers/users.js';

const store = configureStore({
  reducer: {
    users,
  },
});
export default store;
