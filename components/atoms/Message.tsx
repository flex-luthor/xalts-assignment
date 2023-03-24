import Image from "next/image";
import React, { useEffect } from "react";

export const Message = ({ content, handleMessageClose }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      handleMessageClose();
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="flex items-center absolute top-8 left-1/3 bg-red-900 py-4 px-6">
      <span className="text-white font-semibold mr-6">{content}</span>
      <button onClick={handleMessageClose}>
        <Image src="/close.svg" width={24} height={24} alt={"close"} />
      </button>
    </div>
  );
};
