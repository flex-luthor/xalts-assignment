import React from "react";
import { PropsWithChildren } from "react";
import { Sidebar } from "../molecules/Sidebar";

export const SidebarLayout = (props: PropsWithChildren) => {
  return (
    <div className="bg-gradient-to-t from-red-100 to-red-100/30 w-full flex">
      <Sidebar />
      <div className="flex-1">{props.children}</div>
    </div>
  );
};
