import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './redux/store';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const NotFound = () => (
  <div className="text-center p-4">
    <h2 className="text-2xl">404 Not Found</h2>
    <p>The page you are looking for does not exist.</p>
  </div>
);

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div className="max-w-screen-lg mx-auto p-4">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
