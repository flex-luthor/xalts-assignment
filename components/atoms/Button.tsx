import React from "react";

export const Button = ({ title, onClick }) => {
  return (
    <button
      className="m-4 bg-red-900 hover:bg-red-800 px-4 py-2 text-white font-bold"
      onClick={onClick}
    >
      {title}
    </button>
  );
};
