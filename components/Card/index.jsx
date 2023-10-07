import Image from "next/image";

import { Card } from "@tremor/react";

export default function CardComponent({ reviewerInfo }) {
  const { name, avatarUrl, totalReviewedPr, avgReviewTime } = reviewerInfo;

  return (
    <Card>
      <Image
        src="/profile.png"
        width={50}
        height={50}
        alt="Picture of the author"
      />
      <span>{name}</span>
      <span>Total reviewed pr: {totalReviewedPr}</span>
      <span>Average reviewed time : {avgReviewTime}</span>
    </Card>
  );
}
