import Image from "next/image";
import React from "react";
import Branding from "../atoms/Branding";
import NavIcon from "../atoms/NavIcon";
import Org from "../atoms/Org";
import Category from "./Category";

export const Sidebar = () => {
  return (
    <div className="bg-white flex flex-col h-screen w-72 border-r-2 border-gray-200 shadow-lg">
      <Branding />
      <Org />
      <Category />
    </div>
  );
};
