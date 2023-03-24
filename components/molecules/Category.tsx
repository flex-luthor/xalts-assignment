import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { CategoryHeader } from "../atoms/CategoryHeader";
import { CategoryItem } from "../atoms/CategoryItem";

const Category = () => {
  const router = useRouter();
  return (
    <div className="pl-6 pr-3 py-2 border-b-2">
      <CategoryHeader title={"Production"} isOpen={true} />
      <div>
        <Link href="/dashboard">
          <CategoryItem
            title={"Dashboard"}
            icon={
              router.route === "/dashboard"
                ? "/dashboard-active.svg"
                : "/dashboard.svg"
            }
            isActive={router.route === "/dashboard"}
          />
        </Link>

        <Link href="/tokens">
          <CategoryItem
            title={"Tokens"}
            icon={
              router.route === "/tokens" ? "/tokens-active.svg" : "/tokens.svg"
            }
            isActive={router.route === "/tokens"}
          />
        </Link>
      </div>
    </div>
  );
};

export default Category;
