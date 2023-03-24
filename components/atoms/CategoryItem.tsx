import Image from "next/image";
import React from "react";

export const CategoryItem = ({ title, icon, isActive }) => {
  return (
    <div
      className={
        isActive
          ? "flex px-4 py-3 -ml-2 rounded-lg items-center bg-gray-200"
          : "flex px-4 py-3 -ml-2 items-center"
      }
    >
      <Image
        src={icon}
        width={28}
        height={28}
        alt={`icon-${icon}`}
        className="mr-6"
      />
      <span
        className={
          isActive
            ? "font-semibold text-red-900"
            : "font-semibold text-gray-500"
        }
      >
        {title}
      </span>
    </div>
  );
};
