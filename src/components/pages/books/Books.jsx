import React from 'react';
import './books.css';
import AddNewBook from './addNewBook';

const Books = () => {
  const books = [
    {
      genre: 'Action',
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      chapter: 'Chapter 17',
      percentage: '64%',
    },
    {
      genre: 'Science Fiction',
      title: 'Dune',
      author: 'Frank Herbert',
      chapter: 'Chapter 3: A lesson Learned',
      percentage: '8%',
    },
    {
      genre: 'Economy',
      title: 'Capital in the ',
      title2: 'Twenty-First Century',
      author: 'Suzanne Collins',
      chapter: 'CURRENT CHAPTER',
      percentage: '0%',
    },
  ];

  return (

    <div className="book">
      <div className="book-section">

        {books.map((book) => (
          <div key={book.title} className="book-section-one">
            <div className="action-section">
              <span>{book.genre}</span>
              <div className="book-title">
                <h2>{book.title}</h2>
                <h2 className="title2">{book.title2}</h2>
              </div>
              <p>{book.author}</p>
              <div className="book-changes">
                <button type="button" id="comment">Comment</button>
                <div className="vh" />
                <button type="button" id="remove">Remove</button>
                <div className="vh" />
                <button type="button" id="edit">Edit</button>
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
