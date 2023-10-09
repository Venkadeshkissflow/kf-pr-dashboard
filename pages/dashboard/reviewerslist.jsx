import React, { useState } from "react";
import "tailwindcss/tailwind.css";

import CardComponent from "../../components/card";
import { MOCK_DATA } from "../mockdata";
import { Header, Toolbar } from "../../components";

export default function ReviewersList() {
  const [reviewersList, setReviewersList] = useState(MOCK_DATA);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    const searchValue = event.target.value;
    setSearchTerm(searchValue);
    if (searchValue === "") {
      setReviewersList(MOCK_DATA);
    }
    setReviewersList((list) => {
      return list.filter((data) => data.name.includes(searchValue));
    });
    console.log(event.target.value);
  };

  return (
    <div className="grid grid-rows-[auto-1fr] h-screen">
      <div>
        <Header />
        <Toolbar
          title={"User list"}
          searchTerm={searchTerm}
          handleSearch={handleSearch}
        />
      </div>
      <section className="h-full overflow-auto p-4">
        {reviewersList.map((reviewerInfo) => (
          <CardComponent reviewerInfo={reviewerInfo} key={reviewerInfo.id} />
        ))}
      </section>
    </div>
  );
}
