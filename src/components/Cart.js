import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, clearCart } from '../redux/cartSlice';
import Checkout from './Checkout';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} className="flex justify-between items-center mb-2 border-b pb-2">
              <div>
                <h3 className="font-bold">{item.name}</h3>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${(item.price * item.quantity).toFixed(2)}</p>
              </div>
              <button
                onClick={() => handleRemoveFromCart(item)}
                className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-4">
            <h3 className="text-lg font-bold">Total: ${totalPrice.toFixed(2)}</h3>
            <button
              onClick={handleClearCart}
              className="mt-2 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Clear Cart
            </button>
            <Checkout total={totalPrice} />
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
