import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-blue-500 p-4 text-white flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">
        Electronics Store
      </Link>
      <div>
        <Link to="/" className="mr-4 hover:underline">
          Products
        </Link>
        <Link to="/cart" className="relative hover:underline">
          Cart
          {cartItemCount > 0 && (
            <span className="ml-1 bg-red-500 text-white rounded-full px-2 py-0.5 text-xs">
              {cartItemCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
