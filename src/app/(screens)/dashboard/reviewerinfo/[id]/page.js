import React from "react";
import Image from "next/image";
import Link from "next/link";
import "tailwindcss/tailwind.css";
import { useRouter, useParams } from "next/navigation";
import { Card, Title, LineChart } from "@tremor/react";

import { Header, Toolbar, ReviewerInfoCard } from "../../../components/index";
import { MOCK_REVIEWERINFO } from "../../mockdata";

export default function ReviewersInfo() {
  const router = useRouter();
  const pathName = useParams();
  console.log(router, pathName, "router");

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

  console.log(MOCK_REVIEWERINFO[pathName.id].reviews);
  const reviewedPrInfo = MOCK_REVIEWERINFO[pathName.id].reviews;

  const valueFormatter = (number) =>
    `$ ${new Intl.NumberFormat("us").format(number).toString()}`;

  return (
    <div className="h-screen flex flex-col">
      <Header
        pageTitle={"Reviewer info"}
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
            // valueFormatter={valueFormatter}
            // yAxisWidth={40}
          />
        </Card>
        <Card>
          <Title>Reviewer pr's</Title>
          {reviewedPrInfo.map((prInfo) => {
            return <Link href={``}>{prInfo}</Link>;
          })}
        </Card>
      </div>
    </div>
  );
}
