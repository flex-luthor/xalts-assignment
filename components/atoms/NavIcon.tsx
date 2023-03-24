import Image from "next/image";
import React from "react";

const NavIcon = ({ src, isActive }) => {
  return (
    <div
      className={
        isActive ? "p-5 bg-black/30 cursor-pointer" : "p-5 cursor-pointer"
      }
    >
      <Image src={src} height={20} width={20} alt={`image-${src}`} />
    </div>
  );
};

export default NavIcon;
