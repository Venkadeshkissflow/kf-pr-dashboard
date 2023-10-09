import { SessionProvider } from "next-auth/react";

import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";

import "tailwindcss/tailwind.css";

import styles from "../styles/Home.module.css";
import { handleSignIn } from "../utils";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <PrivateComponent>
        <Component {...pageProps} />
      </PrivateComponent>
    </SessionProvider>
  );
}

function PrivateComponent({ children }) {
  const { data: session, status: sessionStatus } = useSession();
  const router = useRouter();

  const authorized = sessionStatus === "authenticated";
  const unAuthorized = sessionStatus === "unauthenticated";
  const loading = sessionStatus === "loading";

  if (loading) {
    return <div className={styles.container}>Loading app...</div>;
  }

  // if (unAuthorized && router.pathname !== "/") {
  //   router.push({
  //     pathname: "/",
  //     query: { returnUrl: router.asPath },
  //   });
  //   return;
  // }

  return authorized ? (
    children
  ) : (
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
