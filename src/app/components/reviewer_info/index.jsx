import React, { useEffect, useState } from "react";

import { Card, Title, LineChart } from "@tremor/react";

import { Header, Toolbar, ReviewerInfoCard } from "..";
import { getUserProfilePic } from "@/app/common";

const MOCK_USERINFO = {
  saravanan10393: {
    totalReviewedPr: 2,
    reviews: [
      {
        pullRequestId: "PR_kwDOEwhtk8491p9nf",
        reviewTime: 1722000,
        commentsCount: 0,
        submittedAt: "2022-08-23T16:33:59.000Z",
      },
      {
        pullRequestId: "PR_kwDOEwmmhk84910CYr",
        reviewTime: 492000,
        commentsCount: 0,
        submittedAt: "2022-08-25T17:30:33.000Z",
      },
    ],
  },
  saravanadn10393: {
    totalReviewedPr: 2,
    reviews: [
      {
        pullRequestId: "PR_kwDOEwhtdk8491p9nf",
        reviewTime: 861000,
        commentsCount: 0,
        submittedAt: "2022-08-23T16:33:59.000Z",
      },
      {
        pullRequestId: "PR_kwDOEwmdmhk84910CYr",
        reviewTime: 246000,
        commentsCount: 0,
        submittedAt: "2022-08-25T17:30:33.000Z",
      },
    ],
  },
  "10221219.0": {
    totalReviewedPr: 4,
    reviews: [
      {
        pullRequestId: "PR_kwDOFek3hs5bFRLG",
        reviewTime: 13636000,
        commentsCount: 0,
        submittedAt: "2023-09-25T09:34:27.000Z",
      },
      {
        pullRequestId: "PR_kwDOFek3hs5cQnX0",
        reviewTime: 72325000,
        commentsCount: 0,
        submittedAt: "2023-10-10T09:32:26.000Z",
      },
      {
        pullRequestId: "PR_kwDOFek3hs5cfkJM",
        reviewTime: 9688000,
        commentsCount: 0,
        submittedAt: "2023-10-11T12:47:12.000Z",
      },
      {
        pullRequestId: "PR_kwDOFek3hs5cmHOm",
        reviewTime: 876000,
        commentsCount: 0,
        submittedAt: "2023-10-12T06:41:09.000Z",
      },
    ],
  },
};

export function ReviewersInfo({ userInfo }) {
  const [userDetails, setUserDetails] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(function onInit() {
    // fetch(
    //   `https://pr-stats.deveditor.workers.dev/pr-stats/api/author/${userInfo.id}`
    //   // {
    //   //   method: "GET",
    //   //   withCredentials: true,
    //   //   crossorigin: true,
    //   //   mode: "no-cors",
    //   //   "Access-Control-Allow-Origin": "*",
    //   // }
    // ).then((reviewerInfo) => {
    //   console.log("reviewerslist", data);
    //   setUserDetails(reviewerInfo?.reviews);
    //   setLoading(false);
    // });
    setUserDetails(MOCK_USERINFO[userInfo.id]);
    setLoading(false);
  }, []);

  function getFormattedDate(originalData) {
    const date = new Date(originalData);

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");

    return `${day}/${month}/${year}`;
  }

  const formattedData = userDetails.reviews.map(
    function formatteDataForClientSide(prInfo) {
      return {
        ...prInfo,
        submittedAt: getFormattedDate(prInfo.submittedAt),
      };
    }
  );

  const sumOfCommentsCount = userDetails.reviews.reduce(
    (accumulator, { commentsCount }) => {
      return accumulator + commentsCount;
    },
    0
  );

  const sumOfReviewTime = userDetails.reviews.reduce(
    (accumulator, { reviewTime }) => {
      return accumulator + reviewTime;
    },
    0
  );

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <>
      <div className="h-auto overflow-y-auto grid auto-rows-max p-4 gap-4">
        <ReviewerInfoCard
          reviewerInfo={{
            name: "demo1",
            avatarUrl: "",
            totalReviewedPr: "24",
            avgReviewTime: "12hrs",
          }}
          isClickable={false}
          userProfile={getUserProfilePic(userInfo.name)}
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
          {userDetails.map((prInfo) => {
            return <div>{prInfo.pullRequestId}</div>;
          })}
        </Card>
      </div>
    </>
  );
}
