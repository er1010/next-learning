"use client";

import React from "react";
import { CldUploadWidget } from "next-cloudinary";

const UploadPage = () => {
  return (
    <CldUploadWidget
      options={{
        sources: ["local", "url", "unsplash"],
        multiple: true,
        maxFiles: 5,
      }}
      uploadPreset="hqicqfnn"
    >
      {({ open }) => {
        return (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload an Image
          </button>
        );
      }}
    </CldUploadWidget>
  );
};

export default UploadPage;
