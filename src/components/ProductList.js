import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import products from '../products.json';
import ProductItem from './ProductItem';

const ProductList = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const categories = [...new Set(products.map(product => product.category))];

  return (
    <div className="p-4">
      {categories.map(category => (
        <div key={category} className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {products
              .filter(product => product.category === category)
              .map(product => (
                <ProductItem key={product.id} product={product} onAddToCart={handleAddToCart} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
