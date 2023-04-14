import { configureStore } from '@reduxjs/toolkit';
import reducers from './user';

const store = configureStore({
  reducer: {
    user: reducers,
  },
});

export default store;