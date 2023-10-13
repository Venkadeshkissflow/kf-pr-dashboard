import React, { useState } from "react";
import "tailwindcss/tailwind.css";

import { MOCK_DATA } from "../mockdata";
import { Header, Toolbar, CardComponent } from "../../components";

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
    <div className="h-screen flex flex-col">
      <Header />
      <Toolbar
        title={"User list"}
        searchTerm={searchTerm}
        handleSearch={handleSearch}
      />
      <div className="h-full overflow-y-auto	grid auto-rows-max p-4">
        {reviewersList.map((reviewerInfo) => (
          <CardComponent reviewerInfo={reviewerInfo} key={reviewerInfo.id} />
        ))}
      </div>
    </div>
  );
}
