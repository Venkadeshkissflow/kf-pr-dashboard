import React, { useState } from "react";
import "tailwindcss/tailwind.css";

import { MOCK_DATA } from "../mockdata";
import { Header } from "../../components";

export default function ReviewersList() {
  const [reviewersList, setReviewersList] = useState(MOCK_DATA);
  return (
    <section>
      <Header />
    </section>
  );
}
