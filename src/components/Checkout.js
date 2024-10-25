import React, { useState } from 'react';

const Checkout = ({ total }) => {
  const [userDetails, setUserDetails] = useState({ name: '', address: '' });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleCheckout = () => {
    if (userDetails.name && userDetails.address) {
      alert(`Thank you, ${userDetails.name}! Your order has been placed.`);
      setIsSuccess(true);
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div>
      {isSuccess ? (
        <h2 className="text-green-600">Checkout successful!</h2>
      ) : (
        <div className="flex flex-col mt-4">
          <input
            type="text"
            placeholder="Name"
            value={userDetails.name}
            onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
            className="border p-2 mb-2"
          />
          <input
            type="text"
            placeholder="Address"
            value={userDetails.address}
            onChange={(e) => setUserDetails({ ...userDetails, address: e.target.value })}
            className="border p-2 mb-2"
          />
          <button
            onClick={handleCheckout}
            disabled={total === 0}
            className={`bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition ${total === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
