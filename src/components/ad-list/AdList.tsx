import React from "react";
import { AdVM } from "../../api";
import { GridLayout } from "./GridLayout";

export const AdList: React.FC<{ ads: AdVM[] }> = ({ ads }) => {
  return (
    <div>
      <GridLayout ads={ads} />
    </div>
  );
};
