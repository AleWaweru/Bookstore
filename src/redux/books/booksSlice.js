import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/lBC1u0w8Y5NTm74FEW9B/books/';

const initialState = {
  booklist: [],
  isLoading: false,
  error: null,
};

export const fetchData = createAsyncThunk('books/fetchData', async () => {
  const response = await axios.get(url);
  return response.data;
});

export const addBookToApi = createAsyncThunk('books/addBookToApi', async (bookInfo) => {
  try {
    const response = await axios.post(url, bookInfo);
    return response.data;
  } catch (error) {
    throw new Error('Failed to add book');
  }
});

export const removeBook = createAsyncThunk('books/removeBook', async (bookId) => {
  try {
    await axios.delete(url + bookId);
    return bookId;
  } catch (error) {
    throw new Error('Failed to remove book');
  }
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const bookTitle = action.payload[0];
      const bookAuthor = action.payload[1];
      const newBook = {
        item_id: uuidv4(),
        title: bookTitle,
        author: bookAuthor,
        category: 'Action',
      };

      state.booklist = [...state.booklist, newBook];
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      state.booklist = state.booklist.filter((book) => book.item_id !== bookId);
    },
  },

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
      });
  },
});

export const { addBook } = booksSlice.actions;

export default booksSlice.reducer;
