import React from "react";

interface Props {
  params: { id: number; photoid: number };
}

const UserPhotoPage = ({ params: { id, photoid } }: Props) => {
  return (
    <div>
      from user{id}, PhotoPage {photoid}
    </div>
  );
};

export default UserPhotoPage;
