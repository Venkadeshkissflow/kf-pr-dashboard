import "tailwindcss/tailwind.css";

import {
  Header,
  Toolbar,
  ReviewerInfoCard,
} from "../../../components/index.jsx";

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

export default async function ReviewersList({ projects }) {
  const reviewersList = await getReviewersList();
  console.log(reviewersList, "projects");

  // const [reviewersList, setReviewersList] = useState(MOCK_DATA);
  // const [searchTerm, setSearchTerm] = useState("");

  // const handleSearch = (event) => {
  //   const searchValue = event.target.value;
  //   setSearchTerm(searchValue);
  //   if (searchValue === "") {
  //     setReviewersList(MOCK_DATA);
  //   }
  //   setReviewersList((list) => {
  //     return list.filter((data) => data.name.includes(searchValue));
  //   });
  //   console.log(event.target.value);
  // };

  return (
    <div className="h-screen flex flex-col">
      <Header pageTitle={"Reviewers list"} />
      <Toolbar
        title={"User list"}
        searchTerm={""}
        // handleSearch={() => console.log("search")}
      />
      <div className="h-full overflow-y-auto gap-4	grid auto-rows-max p-4">
        {reviewersList.map((reviewerInfo) => (
          <ReviewerInfoCard
            isClickable={true}
            reviewerInfo={reviewerInfo}
            key={reviewerInfo.id}
          />
        ))}
      </div>
    </div>
  );
}
