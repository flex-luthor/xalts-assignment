import Head from "next/head";
import Image from "next/image";
import { PropsWithChildren } from "react";
import { Meta } from "../others/Meta";
import { Nav } from "../molecules/Nav";

export const Card = (props: PropsWithChildren) => {
  return (
    <div className="flex max-w-[700px] flex-row bg-white mx-12 mt-4 rounded-md shadow-md">
      {props.children}
    </div>
  );
};
