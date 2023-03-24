import React from "react";
import { Wallet } from "../atoms/Wallet";

export const Header = ({ address }) => {
  return (
    <div className="flex border-b-2 border-gray-200 px-12 py-6 flex-row-reverse">
      <Wallet address={address} />
    </div>
  );
};
