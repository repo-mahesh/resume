// wordSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  highlightedWord: '',
  meaning: '',
  status: 'idle',
  error: null,
};

// {"title":"No Definitions Found","message":"Sorry pal, we couldn't find definitions for the word you were looking for.}

// Thunk for fetching meaning from API
export const fetchMeaning = createAsyncThunk('word/fetchMeaning', async (selectedWord) => {
  try {
    const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${selectedWord}`);
    const deliver = response.data[0].meanings[0].definitions[0].definition

    return deliver; 
  } catch (error) {
    throw error;
  }
});

// Slice
const wordSlice = createSlice({
  name: 'word',
  initialState,
  reducers: {
    setHighlightedWord: (state, action) => {
      state.highlightedWord = action.payload;
      state.meaning = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMeaning.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMeaning.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.meaning = action.payload;
      })
      .addCase(fetchMeaning.rejected, (state, action) => {
        state.status = 'failed';
        state.meaning = 'Meaning Not Found';
        state.error = action.error.message;
      });
  },
});

export const { setHighlightedWord } = wordSlice.actions;

export default wordSlice.reducer;
