import React, { Suspense } from "react";
import UserTable from "./UserTable";
import Link from "next/link";

interface Props {
  searchParams: { sortOrder: string };
}

const UserPage = async ({ searchParams: { sortOrder } }: Props) => {
  // console.log(sortOrder);
  return (
    <div>
      <h1>Users list</h1>
      <Link href="/users/new" className="btn mr-2">
        New User
      </Link>
      <Suspense
        fallback={<span className="loading loading-spinner loading-xs"></span>}
      >
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </div>
  );
};

export default UserPage;
