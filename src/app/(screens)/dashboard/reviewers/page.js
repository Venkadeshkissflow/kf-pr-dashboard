"use client";

import React, { useState } from "react";

import {
  Header,
  Toolbar,
  ReviewersInfo,
  ReviewerInfoCard,
} from "../../../components/index.jsx";

import { getUserProfilePic } from "@/app/common.js";

import styles from "./reviewers.module.css";

async function getReviewersList() {
  const reviewersListresponse = await fetch(
    "https://pr-stats.deveditor.workers.dev/pr-stats/api/author"
  );

  if (reviewersListresponse.status !== 200) {
    return [];
  }

  console.log(reviewersListresponse.status, "reviewersListresponse");

  return reviewersListresponse.json();
}

export default async function ReviewersDetails() {
  const reviewersList = await getReviewersList();
  console.log(reviewersList, "reviewersList");
  //   const [selectedUser, setSelectedUser] = React.useState({});

  return (
    <div className={styles.Wrapper}>
      <div className={styles.header}>
        <Header pageTitle={"Reviewers list"} />
      </div>
      <div className={styles.reviewerContainer}>
        <div className={styles.reviewerListContainer}>
          <div className={styles.list}>
            {reviewersList.map((reviewerInfo) => (
              <ReviewerInfoCard
                isClickable={true}
                reviewerInfo={reviewerInfo}
                key={reviewerInfo.id}
                userProfile={getUserProfilePic(reviewerInfo.name)}
              />
            ))}
          </div>
        </div>
        <div className={styles.reviewerInfo}>
          <div className={styles.reviwerdData}>
            <ReviewersInfo userInfo={reviewersList[0]} />
          </div>
        </div>
      </div>
    </div>
  );
}
