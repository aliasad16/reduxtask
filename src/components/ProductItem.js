import React from 'react';

const ProductItem = ({ product, onAddToCart }) => {
  return (
    <div className="border p-4 rounded shadow-md">
      <img src={product.image} alt={product.name} className="w-full h-32 object-cover mb-2" />
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p className="text-gray-600">${product.price.toFixed(2)}</p>
      <button
        onClick={() => onAddToCart(product)}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;
