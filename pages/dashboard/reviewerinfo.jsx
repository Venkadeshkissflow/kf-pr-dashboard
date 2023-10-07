import React, { useState } from "react";
import Image from "next/image";
import "tailwindcss/tailwind.css";
import { useRouter } from "next/navigation";

import { Header, Toolbar } from "../../components";

export default function ReviewersList() {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = () => {};
  const router = useRouter();

  return (
    <div>
      <Header
        leftRenderer={
          <div
            className="flex mr-2"
            onClick={() => {
              router.back();
            }}
          >
            <Image
              src="/back.svg"
              alt="Back icon"
              width={24}
              height={24}
              // className="cursor-pointer"
            />
          </div>
        }
      />
      <Toolbar
        title={"User info"}
        searchTerm={searchTerm}
        handleSearch={handleSearch}
      />
    </div>
  );
}
