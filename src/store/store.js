// configureStore.js
import { configureStore } from '@reduxjs/toolkit';
import wordReducer from '../Features/dict/wordSlice';

const store = configureStore({
  reducer: {
    word: wordReducer,
    // Add other reducers if needed
  },
});

export default store;


