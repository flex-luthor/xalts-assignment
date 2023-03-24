import Image from "next/image";
import React from "react";
import NavIcon from "../atoms/NavIcon";

export const Nav = () => {
  return (
    <div className="bg-red-900 flex flex-col justify-between">
      <div className="flex flex-col items-center">
        <NavIcon src="./home.svg" isActive={false} />
        <NavIcon src="./world.svg" isActive={false} />
        <NavIcon src="./dollar.svg" isActive={true} />
      </div>
      <div className="flex flex-col items-center">
        <NavIcon src="./notification.svg" isActive={false} />
        <NavIcon src="./profile.svg" isActive={false} />
      </div>
    </div>
  );
};
