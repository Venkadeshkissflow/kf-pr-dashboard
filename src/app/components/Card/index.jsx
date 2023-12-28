"use client";

import Image from "next/image";
import PropTypes from "prop-types";

import { Card } from "@tremor/react";

ReviewerInfoCard.PropTypes = {
  title: PropTypes.string,
  avatar: PropTypes.string,
  className: PropTypes.string,
};

export default function ReviewerInfoCard({ title, avatar, className }) {
  function handleOnClick() {
    console.log("clicked");
  }

  return (
    <div className={`cursor-pointer`} onClick={handleOnClick}>
      <Card
        onClick={handleOnClick}
        className={`animate-swipeIn flex gap-4 p-2 ${className}`}
      >
        <Image
          style={{ borderRadius: "50%", backgroundColor: "white" }}
          src={avatar}
          width={70}
          height={70}
          alt="Author profile"
        />
        <div className="flex items-center col-span-3 font-semibold text-l min-w-40 text-ellipsis	">
          {title}
        </div>
      </Card>
    </div>
  );
}
