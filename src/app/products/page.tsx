"use client";
import { useSession } from "next-auth/react";

export default function Products() {
  const { data: session } = useSession();

  return (
    <>
      <h1>Products</h1>

      {session !== undefined &&
      session !== null &&
      session.user !== undefined &&
      session.user !== null &&
      session.user ? (
        <h2>
          Hi, {session.user.email} <br />
        </h2>
      ) : (
        "Unauthorized"
      )}
    </>
  );
}
