import React, { useState } from "react";
import "tailwindcss/tailwind.css";

import CardComponent from "../../components/Card";
import { MOCK_DATA } from "../mockdata";
import { Header } from "../../components";

export default function ReviewersList() {
  const [reviewersList, setReviewersList] = useState(MOCK_DATA);
  return (
    <div className="grid grid-rows-[auto-1fr] h-screen">
      <div>
        <Header />
        <div className="h-10">toolbar</div>
      </div>

      <section className="h-full overflow-auto p-4">
        {reviewersList.map((reviewerInfo) => (
          <CardComponent reviewerInfo={reviewerInfo} key={reviewerInfo.id} />
        ))}
      </section>
    </div>
  );
}
