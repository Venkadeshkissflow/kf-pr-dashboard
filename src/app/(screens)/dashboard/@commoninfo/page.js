// import { PERIOD_BASE_FILTER } from "@/app/common";

const PERIOD_BASE_FILTER = {
  LAST_30DAYS: { id: "last-30days", label: "last 30 days" },
  LAST_15DAYS: { id: "last-15days", label: "last 15 days" },
  LAST_ONEWEEK: { id: "last-1week", label: "last 1 week" },
};

async function getContributors(id) {
  console.log(id, "params api test");
  const res = await fetch(
    `https://api.github.com/repos/Venkadeshkissflow/kf-pr-dashboard/contributors`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch reviewerInfo");
  }

  return res.json();
}

export default async function CommonInfo() {
  const contributorsList = await getContributors();

  console.log(contributorsList, "contributorsList");
  return (
    <>
      <header className="flex justify-end w-full border-b-2 p-2">
        <select className="border-2 p-2 rounded-lg">
          {Object.values(PERIOD_BASE_FILTER).map((filterInfo) => {
            return (
              <option key={filterInfo.id} value={filterInfo.id}>
                {filterInfo.label}
              </option>
            );
          })}
        </select>
      </header>
      {/* <h1>Common info</h1> */}
      <div className="flex justify-around p-4">
        <InfoCard
          title={"Total Contributors"}
          value={contributorsList.length}
        />
        <InfoCard
          title={"Total Contributors"}
          value={contributorsList.length}
        />
        <InfoCard
          title={"Total Contributors"}
          value={contributorsList.length}
        />
      </div>
    </>
  );
}

function InfoCard({ title, value }) {
  return (
    <div className="border-2 rounded-lg min-w-40">
      <div className="flex border-b-2 justify-center font-semibold p-3">
        {title}
      </div>
      <div className="h-12 flex justify-center items-center">{value}</div>
    </div>
  );
}
