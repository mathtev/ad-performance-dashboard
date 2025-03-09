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
  const { ads, isLoading } = useAds(filters);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading ads...</p>
      </div>
    );
  }

  return (
    <>
      <AdStatistics ads={ads} />
      <AdList ads={ads} />
    </>
  );
};
