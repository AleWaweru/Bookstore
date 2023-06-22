import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/lBC1u0w8Y5NTm74FEW9B/books/';

const initialState = {
  booklist: [],
  isLoading: false,
  error: null,
};

export const fetchData = createAsyncThunk('books/fetchData', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const addBookToApi = createAsyncThunk('books/addBookToApi', async (bookInfo) => {
  try {
    const response = await axios.post(API_URL, bookInfo);
    return response.data;
  } catch (error) {
    // console.error(error);
    throw new Error(`Failed to add book: ${error.message}`);
  }
});

export const removeBook = createAsyncThunk('books/removeBook', async (bookId) => {
  try {
    await axios.delete(API_URL + bookId);
    return bookId;
  } catch (error) {
    // console.error(error);
    throw new Error(`Failed to remove book: ${error.message}`);
  }
});

export const addBook = createAsyncThunk('books/addBook', async ({ title, author }) => {
  const newBook = {
    item_id: uuidv4(),
    title,
    author,
    category: 'Action',
    percentage: '64%',
    chapter: 'Introduction',
  };
  return newBook;
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.booklist = Object.entries(action.payload)
          .flatMap(([key, value]) => value.map((book) => ({ ...book, item_id: key })));
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addBookToApi.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        state.isLoading = true;
        state.booklist = state.booklist.filter((book) => book.item_id !== action.payload);
      })
      .addCase(removeBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.booklist.push(action.payload);
      })
      .addCase(addBook.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default booksSlice.reducer;
