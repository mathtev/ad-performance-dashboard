import React from "react";

export const ImageRenderer: React.FC<{ url?: string }> = ({ url = "" }) => {
  return (
    <img
      className={"object-cover w-full h-full"}
      alt="Ad image content"
      src={url}
    />
  );
};
