import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../../redux/books/booksSlice';

const AddNewBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author) return;
    dispatch(addBook([title, author]));
    setTitle('');
    setAuthor('');
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
