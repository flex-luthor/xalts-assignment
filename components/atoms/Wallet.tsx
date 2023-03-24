import Image from "next/image";
import React from "react";

const trimAddress = (address) => {
  return (
    address.slice(0, 6) +
    "...." +
    address.slice(address.length - 6, address.length)
  );
};

export const Wallet = ({ address }) => {
  return (
    <div className="bg-white p-4 pr-12 flex items-center shadow-md rounded">
      <Image
        src="/wallet-icon.svg"
        width={28}
        height={28}
        alt={"wallet-icon"}
        className="mr-6"
      />
      <span className="font-bold text-gray-500">
        {address ? trimAddress(address) : "Not connected"}
      </span>
    </div>
  );
};
