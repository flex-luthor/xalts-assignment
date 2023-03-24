import Image from "next/image";
import React from "react";

export const CategoryHeader = ({ title, isOpen }) => {
  return (
    <div className="flex justify-between w-full mb-6 mt-2">
      <div className="flex flex-col">
        <span className="font-semibold text-gray-500">Production</span>
      </div>
      <div>
        <Image src="/down-icon.svg" width={20} height={10} alt="down-icon" />
      </div>
    </div>
  );
};
