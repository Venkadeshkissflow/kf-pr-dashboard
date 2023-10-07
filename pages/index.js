import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import "tailwindcss/tailwind.css";

import styles from "../styles/Home.module.css";
import { handleSignIn } from "../utils";
import Welcome from "../components/landingpage";

export default function Home() {
  const { data: session, status: sessionStatus } = useSession();
  const router = useRouter();

  const authorized = sessionStatus === "authenticated";
  const unAuthorized = sessionStatus === "unauthenticated";
  const loading = sessionStatus === "loading";

  if (session) {
    return (
      <Welcome user={session.user} />
    );
  } else {
    return (
      <div className={styles.container}>
        <button className={styles.googleButton} onClick={handleSignIn}>
          <span className="flex items-center gap-2">
            <Image
              src="/google.svg"
              alt="google icon"
              width={24}
              height={24}
              className="cursor-pointer"
            />
            Sign in with Google
          </span>
        </button>
      </div>
    );
  }
}
