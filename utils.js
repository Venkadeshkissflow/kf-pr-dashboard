import { signIn, signOut } from "next-auth/react";

async function handleSignIn() {
  await signIn("google");
}

async function handleSignOut() {
  await signOut({redirect: true, callbackUrl: "/"});
}

export { handleSignIn, handleSignOut };
