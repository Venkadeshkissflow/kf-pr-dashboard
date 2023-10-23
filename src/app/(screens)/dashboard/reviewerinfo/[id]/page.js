import React from "react";

import { Card, Title, LineChart } from "@tremor/react";

import {
  Header,
  Toolbar,
  ReviewerInfoCard,
} from "../../../../components/index";

async function getReviewerInfo(id) {
  const response = await fetch(
    `https://pr-stats.deveditor.workers.dev/pr-stats/api/author/${id}`
  );

  if (response.status !== 200) {
    return {};
  }

  return response.json();
}

export default async function ReviewersInfo({ params }) {
  const reviewerInfo = await getReviewerInfo(params.id);
  const reviewedPrInfo = reviewerInfo.reviews;

  const chartdata = [
    {
      year: 1970,
      "Export Growth Rate": 2.04,
      "Import Growth Rate": 1.53,
    },
    {
      year: 1971,
      "Export Growth Rate": 1.96,
      "Import Growth Rate": 1.58,
    },
    {
      year: 1972,
      "Export Growth Rate": 1.96,
      "Import Growth Rate": 1.61,
    },
    {
      year: 1973,
      "Export Growth Rate": 1.93,
      "Import Growth Rate": 1.61,
    },
    {
      year: 1974,
      "Export Growth Rate": 1.88,
      "Import Growth Rate": 1.67,
    },
    //...
  ];

  return (
    <div className="h-screen flex flex-col">
      <Header moveBack={true} pageTitle={"Reviewer info"} />
      <Toolbar title={"User info"} enableSearch={false} />
      <div className="h-full overflow-y-auto grid auto-rows-max p-4 gap-4">
        <ReviewerInfoCard
          reviewerInfo={{
            name: "demo1",
            avatarUrl: "",
            totalReviewedPr: "24",
            avgReviewTime: "12hrs",
          }}
        />
        <Card>
          <Title>Reviewer chart</Title>
          <LineChart
            className="mt-6"
            data={reviewedPrInfo}
            index="submittedAt"
            categories={["reviewTime", "commentsCount"]}
            colors={["emerald", "gray"]}
          />
        </Card>
        <Card>
          <Title>Total reviewed pr: {reviewerInfo.totalReviewedPr}</Title>
          {reviewedPrInfo.map((prInfo) => {
            return <div>{prInfo.pullRequestId}</div>;
          })}
        </Card>
      </div>
    </div>
  );
}
