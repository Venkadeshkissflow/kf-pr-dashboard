import React, { useState } from "react";

import Link from "next/link";

//tremor components
import { Card, ProgressBar } from "@tremor/react";

import { MOCK_DATA } from "../mockdata";

export default function ReviewersList() {
  const [reviewersList, setReviewersList] = useState(MOCK_DATA);
  return (
    <div>
      <div>reviewers list</div>
      <Link href="/">Back to home</Link>
      {reviewersList.map((reviewersInfo, index) => (
        <Card key={index} className="max-w-xs mx-auto">
          <Link href="/dashboard/reviewer-info">info card</Link>
          <ProgressBar value={32} className="mt-2" />
          <span>{reviewersInfo.name}</span>
        </Card>
      ))}
    </div>
  );
}
