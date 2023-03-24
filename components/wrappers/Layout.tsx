import Head from "next/head";
import Image from "next/image";
import { PropsWithChildren } from "react";
import { Meta } from "../others/Meta";
import { Nav } from "../molecules/Nav";

export const Layout = (props: PropsWithChildren) => {
  return (
    <div className="flex flex-row min-h-screen w-full bg-white">
      <Meta />
      <Nav />
      {props.children}
    </div>
  );
};
