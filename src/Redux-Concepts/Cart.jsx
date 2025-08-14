import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Item from './Item';

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 p-6">
      {cart.length > 0 ? (
        <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto">
          
          {/* Cart Items Section */}
          <div className="flex-1 space-y-4">
            {cart.map((item, index) => (
              <Item key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          {/* Summary Section */}
          <div className="bg-white shadow-lg rounded-xl p-6 w-full md:w-80 border border-green-200">
            <h2 className="text-green-600 text-xl font-bold mb-2">Your Cart</h2>
            <h3 className="font-semibold text-gray-700">SUMMARY</h3>
            <p className="mt-2 text-gray-600">
              Total items: <span className="font-medium">{cart.length}</span>
            </p>

            <div className="mt-8">
              <p className="text-lg font-bold text-gray-800">
                Total Amount: <span className="text-green-600">₹{totalAmount}</span>
              </p>
              <button className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg shadow transition-all">
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Empty Cart Section */
        <div className="flex flex-col items-center justify-center min-h-[70vh] gap-y-4">
          <h1 className="text-2xl font-bold text-gray-800">Your Cart is Empty</h1>
          <NavLink to="/">
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow transition-all">
              Shop Now
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart;
