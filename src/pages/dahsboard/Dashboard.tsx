import React from "react";
import { AdFilters } from "./Dashboard.types";
import { DashboardContent } from "./DashboardContent";
import { AdToolbar } from "../../components";

export const Dashboard: React.FC = () => {
  const [filters, setFilters] = React.useState<AdFilters>({
    type: undefined,
  });

  return (
    <div className="bg-gray-50 absolute inset-0 xl:px-44 lg:px-36 md:px-16 sm:px-8 px-4">
      <AdToolbar filters={filters} setFilters={setFilters} />
      <DashboardContent filters={filters} />
    </div>
  );
};
