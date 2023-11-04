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

  function getFormattedDate(originalData) {
    const date = new Date(originalData);

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");

    return `${day}/${month}/${year}`;
  }

  const formattedData = reviewedPrInfo.map(function formatteDataForClientSide(
    prInfo
  ) {
    return {
      ...prInfo,
      submittedAt: getFormattedDate(prInfo.submittedAt),
    };
  });

  const sumOfCommentsCount = reviewedPrInfo.reduce(
    (accumulator, { commentsCount }) => {
      return accumulator + commentsCount;
    },
    0
  );

  const sumOfReviewTime = reviewedPrInfo.reduce(
    (accumulator, { reviewTime }) => {
      return accumulator + reviewTime;
    },
    0
  );

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
          isClickable={false}
        />
        <div className="flex gap-4">
          <Card>
            <div></div>
            <Title>Comments count</Title>
            <div className="font-bold	text-lg text-cyan-600	">
              {sumOfCommentsCount}
            </div>
          </Card>
          <Card>
            <div></div>
            <Title>Review time</Title>
            <div className="font-bold	text-lg text-lime-600	">
              {sumOfReviewTime}
            </div>
          </Card>
        </div>
        <Card>
          <Title>Reviewer chart</Title>
          <LineChart
            className="mt-6"
            data={formattedData}
            index="submittedAt"
            categories={["reviewTime", "commentsCount"]}
            colors={["lime", "cyan"]}
            // valueFormatter={axisFormatter}
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
