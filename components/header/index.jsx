import Head from "next/Head";

export default function Header({ back }) {
  return (
    <Head>
      <div>
        <div className="flex justify-between items-center bg-gray-800 p-4">
          {back && <div>{back}</div>}
          <h1 className="text-white font-bold">PR Dashboard</h1>
          <div className="flex items-center">
            <button className="bg-red-500 text-white px-4 py-2">Logout</button>
          </div>
        </div>
      </div>
    </Head>
  );
}
