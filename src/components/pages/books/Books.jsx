import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook, fetchData } from '../../../redux/books/booksSlice';
import './books.css';
import AddNewBook from './addNewBook';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.bookstore);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  const bookLists = books.booklist.map((book, index) => ({
    ...book,
    item_id: book.item_id,
    key: `${book.item_id}-${index}`,
  }));

  return (
    <div className="book">
      <div className="book-section">
        {bookLists.map((book) => (
          <div key={book.key} className="book-section-one">
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
                  '--clr': '#379cf6',
                  '--num': 65,
                }}
              >
                <svg>
                  <circle cx={40} cy={40} r={40} />
                  <circle cx={40} cy={40} r={40} />
                </svg>
              </div>
              <div className="output">
                <h3>64%</h3>
                <span>Completed</span>
              </div>
            </div>
            <div className="vh2" />

            <div className="update-progress">
              <span>CURRENT CHAPTER</span>
              <h4>Introduction</h4>

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
