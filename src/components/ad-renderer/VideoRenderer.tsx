import React from "react";

export const VideoRenderer: React.FC<{ url?: string }> = ({ url = "" }) => {
  return (
    <video controls className="object-cover w-full h-full">
      <source src={url} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};
