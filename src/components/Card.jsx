// src/components/ProductCard.js
import React, { useState } from "react";

const ProductCard = ({ product }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription((prev) => !prev);
  };

  const truncatedDescription = product?.description?.slice(0, 20);

  return (
    <div className="bg-white border rounded shadow-md p-4">
      <img
        src={product?.image}
        alt={product?.name}
        className="w-full h-48 object-cover"
      />
      <h3 className="text-lg font-semibold my-2">{product?.title}</h3>
      <p className="text-gray-700 text-sm mb-2">
        {showFullDescription ? product?.description : truncatedDescription}
        {product?.description?.length > 20 && (
          <span
            className="text-blue-500 cursor-pointer ml-1"
            onClick={toggleDescription}
          >
            {showFullDescription ? "Read Less" : "Read More"}
          </span>
        )}
      </p>
      <div className="flex justify-between items-center">
        <span className="text-lg font-semibold text-blue-500">
          ${product?.price}
        </span>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
