import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Books from './components/pages/books/Books';
import Categories from './components/pages/Category/Categories';

const App = () => (
  <div className="App">
    <Navbar />
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/categories" element={<Categories />} />

    </Routes>
  </div>
);

export default App;
