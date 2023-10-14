import React, { useState } from "react";
import Image from "next/image";
import "tailwindcss/tailwind.css";
import { useRouter } from "next/navigation";

import { Header, Toolbar, CardComponent } from "../../../components/index";

export default function ReviewersInfo() {
  const router = useRouter();

  return (
    <div className="h-screen flex flex-col">
      <Header
        leftRenderer={
          <div
            className="flex mr-2"
            onClick={() => {
              router.back();
            }}
          >
            <Image
              src="/back.svg"
              alt="Back icon"
              width={24}
              height={24}
              className="cursor-pointer"
            />
          </div>
        }
      />
      <Toolbar title={"User info"} enableSearch={false} />
      <div className="h-full overflow-y-auto grid auto-rows-max p-4">
        <CardComponent
          reviewerInfo={{
            name: "demo1",
            avatarUrl: "",
            totalReviewedPr: "24",
            avgReviewTime: "12hrs",
          }}
        />
      </div>
    </div>
  );
}
