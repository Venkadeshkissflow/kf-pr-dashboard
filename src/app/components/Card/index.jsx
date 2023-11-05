"use client";

import Image from "next/image";

import { Card } from "@tremor/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ReviewerInfoCard({
  reviewerInfo,
  isClickable,
  userProfile,
}) {
  const { name, totalReviewedPr, avgReviewTime, profileUrl, avatarUrl } =
    reviewerInfo;
  const router = useRouter();

  function handleOnClick() {
    // if (isClickable) router.push(`./reviewerinfo/${reviewerInfo.id}`);
    console.log("clicked");
  }

  return (
    <div className="cursor-pointer" onClick={handleOnClick}>
      <Card onClick={handleOnClick} className="animate-swipeIn flex gap-4 p-2">
        <Image
          style={{ borderRadius: "50%" }}
          src={userProfile}
          width={70}
          height={70}
          alt="Author profile"
        />
        <div className="grid grid-cols-3 w-full">
          <div className="col-span-3 font-semibold text-l">{name}</div>
          {/* <div className="col-span-1 font-normal text-base">
          Total reviewed pr: <span>{totalReviewedPr}</span>
        </div>
        <div className="col-span-1 font-normal text-base">
          Average reviewed time : <span>{avgReviewTime}</span>
        </div> */}
        </div>
      </Card>
    </div>
  );
}
