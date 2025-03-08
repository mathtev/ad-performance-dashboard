import React from "react";

export const TextRenderer: React.FC<{
  headline?: string;
  description?: string;
}> = ({ headline = "", description = "" }) => {
  return (
    <div className="px-6 pt-16 flex flex-col gap-y-4">
      <span className="text-lg font-bold">{headline}</span>
      <p className="line-clamp-2">{description}</p>
    </div>
  );
};
