import React from "react";
import { AdFilters } from "./Dashboard.types";
import { useAds } from "../../hooks";
import { AdList, AdStatistics } from "../../components";

interface DashboardContentProps {
  filters: AdFilters;
}

export const DashboardContent: React.FC<DashboardContentProps> = ({
  filters,
}) => {
  const ads = useAds(filters);

  return (
    <>
      <AdStatistics ads={ads} />
      <AdList ads={ads} />
    </>
  );
};
