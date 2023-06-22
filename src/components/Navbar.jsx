import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => (
  <div className="navbar">
    <nav>
      <Link className="logo" to="/">Bookstore CMS</Link>

      <ul>
        <li className="book-nav">
          <Link to="/">Books</Link>
        </li>
        <li className="categories-nav">
          <Link to="/categories">Categories</Link>
        </li>
      </ul>
      <button type="button" className="login">

        <FontAwesomeIcon icon={faUser} />
      </button>
    </nav>

  </div>
);

export default Navbar;
