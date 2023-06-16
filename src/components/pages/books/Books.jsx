import React from 'react';
import './books.css';
import AddNewBook from './addNewBook';

const Books = () => (
  <>

    <div className="book">
      <div className="book-section">

        {/* .........FIRST CARD........ */}

        <div className="book-section-one">
          <div className="action-section">
            <span>Action</span>
            <h2>The Hunger Games</h2>
            <p>Suzanne Collins</p>
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
              <h3>64%</h3>
              <span>Completed</span>
            </div>
          </div>
          <div className="vh2" />

          <div className="update-progress">
            <span>CURRENT CHAPTER</span>
            <h4>Chapter 17</h4>

            <button type="button">UPDATE PROGRESS</button>

          </div>
        </div>

        {/* .........SECOND CARD.......... */}

        <div className="book-section-one">
          <div className="action-section">
            <span>Science Fiction</span>
            <h2>Dune</h2>
            <p>Frank Herbert</p>
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
                '--num': 8,
              }}
            >
              <svg>
                <circle cx={70} cy={70} r={70} />
                <circle cx={70} cy={70} r={70} />
              </svg>
            </div>
            <div className="output">
              <h3>8%</h3>
              <span>Completed</span>
            </div>
          </div>
          <div className="vh2" />

          <div className="update-progress">
            <span>CURRENT CHAPTER</span>
            <h4>
              Chapter 3:
              `A lesson Learned`
            </h4>

            <button type="button">UPDATE PROGRESS</button>

          </div>
        </div>

        {/* .........SECOND CARD.......... */}

        <div className="book-section-one">
          <div className="action-section">
            <span>Economy</span>
            <h2>
              Capital in the
              <br />
              Twenty-First Century
            </h2>
            <p>Suzanne Collins</p>
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
                '--num': 0,
              }}
            >
              <svg>
                <circle cx={70} cy={70} r={70} />
                <circle cx={70} cy={70} r={70} />
              </svg>
            </div>
            <div className="output">
              <h3>0%</h3>
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
      </div>
      <AddNewBook />
    </div>
  </>
);

export default Books;
