import Image from "next/image";

import { Card } from "@tremor/react";

export default function CardComponent({ reviewerInfo }) {
  const { name, avatarUrl, totalReviewedPr, avgReviewTime } = reviewerInfo;

  return (
    <Card className="flex gap-4 mb-4 p-2">
      <Image
        src="/avatar.jpg"
        width={70}
        height={70}
        alt="Picture of the author"
      />
      <div class="grid grid-cols-3 w-full">
        <div class="col-span-3 font-semibold text-l">{name}</div>
        <div class="col-span-1 font-normal text-base">
          Total reviewed pr: {totalReviewedPr}
        </div>
        <div class="col-span-1 font-normal text-base">
          Average reviewed time : {avgReviewTime}
        </div>
      </div>
    </Card>
  );
}
