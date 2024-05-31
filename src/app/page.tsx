"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { data: session } = useSession();

  if (
    session !== undefined &&
    session !== null &&
    session.user !== undefined &&
    session.user !== null
  ) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <Link href="/products">Go to Products</Link>
        <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }

  return (
    <>
      <Link href="/products">Go to Products</Link>
      <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
