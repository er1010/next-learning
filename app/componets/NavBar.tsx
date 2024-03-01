"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const { status, data: session } = useSession();

  return (
    <div className="navbar bg-base-100">
      <Link href="/" className="btn btn-ghost text-xl">
        Home
      </Link>
      <Link href="/users" className="btn btn-ghost text-xl">
        User
      </Link>
      <Link href="/admin" className="btn btn-ghost text-xl">
        Admin
      </Link>
      <Link href="/upload" className="btn btn-ghost text-xl">
        Upload
      </Link>

      {status === "authenticated" ? (
        <div className="text-xl text-cyan-100">
          {session?.user?.name}
          <Link href="/api/auth/signout" className="ml-3 text-lg btn">
            Sign Out
          </Link>
        </div>
      ) : (
        <Link href="/api/auth/signin" className="btn btn-ghost text-xl">
          Signin
        </Link>
      )}
    </div>
  );
};

export default NavBar;
