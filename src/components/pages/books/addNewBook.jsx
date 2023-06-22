import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../../redux/books/booksSlice';

const AddNewBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const URL_API = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/lBC1u0w8Y5NTm74FEW9B/books/';

    const newBook = {
      item_id: uuidv4(),
      title,
      author,
      category: 'Action',
      percentage: '64%',
      chapter: 'Introduction',
    };

    // Add the new book to the store and the API
    try {
      await axios.post(URL_API, newBook);
      dispatch(addBook(newBook));
      setTitle('');
      setAuthor('');
    } catch (error) {
      // console.error(error);
      // Handle error adding book
    }
  };

  return (
    <div className="addBook-container">
      <div className="hl" />
      <h2>ADD NEW BOOK</h2>
      <div className="addBook-content">
        <input
          className="input-text"
          type="text"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="drop-down-input"
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="button" className="addBtn" onClick={handleSubmit}>
          Add Book
        </button>
      </div>
    </div>
  );
};

export default AddNewBook;
