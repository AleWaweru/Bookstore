import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../../../redux/books/booksSlice';
import './books.css';

import AddNewBook from './addNewBook';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.bookstore.books);

  return (
    <div className="book">
      <div className="book-section">
        {books.map((book) => (
          <div key={book.item_id} className="book-section-one">
            <div className="action-section">
              <span>{book.category}</span>
              <div className="book-title">
                <h2>{book.title}</h2>
                <h2 className="title2">{book.title2}</h2>
              </div>
              <p>{book.author}</p>
              <div className="book-changes">
                <button type="button" id="comment">
                  Comment
                </button>
                <div className="vh" />
                <button
                  type="button"
                  id="remove"
                  onClick={() => {
                    dispatch(removeBook(book.item_id));
                  }}
                >
                  Remove
                </button>
                <div className="vh" />
                <button type="button" id="edit">
                  Edit
                </button>
              </div>
            </div>
            <div className="progress">
              <div
                className="percentage"
                style={{
                  '--clr': 'rgb(59, 59, 245)',
                  '--num': 65,
                }}
              >
                <svg>
                  <circle cx={70} cy={70} r={70} />
                  <circle cx={70} cy={70} r={70} />
                </svg>
              </div>
              <div className="output">
                <h3>{book.percentage}</h3>
                <span>Completed</span>
              </div>
            </div>
            <div className="vh2" />

            <div className="update-progress">
              <span>CURRENT CHAPTER</span>
              <h4>{book.chapter}</h4>

              <button type="button">UPDATE PROGRESS</button>
            </div>
          </div>
        ))}

        <AddNewBook />
      </div>
    </div>
  );
};

export default Books;
