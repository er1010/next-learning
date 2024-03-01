"use client";
import React from "react";

const ProductCard = () => {
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => console.log("clicked!")}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
