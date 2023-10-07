import { handleSignOut } from "../../utils";

export default function Header({ leftRenderer }) {
  return (
    <div>
      <div className="flex justify-between items-center bg-gray-800 p-4">
        <div className="flex items-center">
          {leftRenderer && leftRenderer}
          <h1 className="text-white font-bold">PR Dashboard</h1>
        </div>
        <div className="flex items-center">
          <button className="bg-red-500 text-white px-4 py-2" onClick={handleSignOut}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
