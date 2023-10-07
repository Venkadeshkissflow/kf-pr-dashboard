import Image from "next/image";

import { Card } from "@tremor/react";

export default function CardComponent({ reviewerInfo }) {
  const { name, avatarUrl, totalReviewedPr, avgReviewTime } = reviewerInfo;

  return (
    <Card className="flex gap-4 mb-4">
      <Image
        className="rounded"
        src="/vercel.png"
        width={50}
        height={50}
        alt="Picture of the author"
      />
      <div className="grid grid-rows-[auto-1fr]">
        <span>{name}</span>
        <span>Total reviewed pr: {totalReviewedPr}</span>
        <span>Average reviewed time : {avgReviewTime}</span>
      </div>
    </Card>
  );
}
