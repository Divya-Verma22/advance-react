
import React from 'react';
import { FcDeleteDatabase } from 'react-icons/fc';
import { useDispatch } from 'react-redux';
import { remove } from './Slice/cartSlice';
import { toast } from 'react-hot-toast';

const Item = ({ item }) => {
  const dispatch = useDispatch();

  function removeCart() {
    dispatch(remove(item.id));
    toast.error("Item removed from cart");
  }

  return (
    <div className="item flex items-center gap-4 border-b p-4">
      {/* Product Image */}
      <div>
        <img
          src={item.image}
          alt={item.title}
          width="100"
          height="100"
          className="object-contain"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1">
        <h1 className="font-semibold">{item.title}</h1>
        <p className="text-sm text-gray-600">{item.description}</p>
      </div>

      {/* Price + Delete */}
      <div className="flex items-center gap-4">
        <p className="font-bold">₹{item.price}</p>
        <button
          onClick={removeCart}
          className="text-red-500 hover:scale-110 transition"
        >
          <FcDeleteDatabase size={24} />
        </button>
      </div>
    </div>
  );
};

export default Item;
