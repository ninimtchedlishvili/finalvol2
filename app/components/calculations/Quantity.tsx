"use client"
import React from "react";
import { useState } from "react";


const Quantity = () => {
const [quantity, setQuantity] = useState(1);

  return (
    <div className="text-white flex items-center justify-center font-medium w-1/2 rounded-lg px-5 py-2.5 ">
      <div className="flex items-center justify-center gap-4 ">
        <button
          className="text-white bg-gray-800 hover:bg-gray-700 p-1 rounded-full transition duration-200 ease-in-out transform hover:scale-105 w-20 "
          onClick={() => setQuantity(quantity - 1)}
          disabled={quantity <= 1}
        >
          -
        </button>
        <div className="text-white font-2xl flex justify-center">
          <p>
            {quantity}
          </p>
        </div>
        <button
          className="text-white bg-gray-800 hover:bg-gray-700 p-1 rounded-full transition duration-200 ease-in-out transform hover:scale-105 w-20 "
          onClick={() => setQuantity(quantity + 1)}
        >
          +
        </button>
      </div>
    </div>

   
  );
};

export default Quantity;
