import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import Books from './components/pages/books/Books';
import store from './redux/store';
import Categories from './components/pages/Category/Categories';

const App = () => (
  <div className="App">
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Provider>
  </div>
);

export default App;
