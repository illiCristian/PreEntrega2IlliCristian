import React from "react";
import { HiShoppingCart } from "react-icons/hi";

const CardWidget = ({ cantidad }) => {
  return (
    <div className="m-4 flex">
      <button className="mx-2 mt-1 text-2xl transition-all duration-500 dark:text-white dark:hover:text-orange-800">
        <HiShoppingCart />
      </button>
      <p className="text-2xl font-bold text-black transition-all duration-500 dark:text-gray-300">
        <strong>{cantidad}</strong>{" "}
      </p>
    </div>
  );
};

export default CardWidget;
