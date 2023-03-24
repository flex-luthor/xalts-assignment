import Image from "next/image";
import React from "react";

const Org = () => {
  return (
    <div className="pl-6 pr-3 py-2 flex justify-between items-center border-b-2">
      <div className="flex flex-col">
        <span className="font-semibold text-gray-500">Organization</span>
        <span className="font-bold text-red-900">ECM</span>
      </div>
      <div>
        <Image src="/org-icon.png" width={48} height={32} alt="org-icon" />
      </div>
    </div>
  );
};

export default Org;
