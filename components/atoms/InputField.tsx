import React from "react";

export const InputField = ({ value, onChange, placeholder }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      className="flex-1 border-2 border-gray-300 py-1 px-2 w-96 m-4 font-semibold text-gray-500"
      placeholder={placeholder}
    />
  );
};
