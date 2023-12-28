"use client";

import Image from "next/image";
import PropTypes from "prop-types";

import { Card } from "@tremor/react";

ReviewerInfoCard.PropTypes = {
  title: PropTypes.string,
  avatar: PropTypes.string,
};

export default function ReviewerInfoCard({ title, avatar }) {
  function handleOnClick() {
    console.log("clicked");
  }

  return (
    <div className="cursor-pointer" onClick={handleOnClick}>
      <Card onClick={handleOnClick} className="animate-swipeIn flex gap-4 p-2">
        <Image
          style={{ borderRadius: "50%" }}
          src={avatar}
          width={70}
          height={70}
          alt="Author profile"
        />
        <div className="flex items-center">{title}</div>
      </Card>
    </div>
  );
}
