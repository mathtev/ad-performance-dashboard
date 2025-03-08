import React, { useMemo } from "react";
import { AdVM } from "../../api";
import { getAdStatistics } from "./AdStatistics.utils";

export const AdStatistics: React.FC<{ ads: AdVM[] }> = ({ ads }) => {
  const stats = useMemo(() => getAdStatistics(ads), [ads]);

  return (
    <div className="py-6 w-full text-xs grid xl:grid-cols-3 md:grid-cols-2 gap-6">
      <div className="shadow-sm bg-white rounded-lg overflow-hidden p-4">
        <div className="flex flex-col gap-y-1">
          <span className="text-gray-500">Total impressions</span>
          <span className="font-bold text-2xl">{stats.totalImpressions}</span>
        </div>
      </div>
      <div className="shadow-sm bg-white rounded-lg overflow-hidden p-4">
        <div className="flex flex-col gap-y-1">
          <span className="text-gray-500">Total clicks</span>
          <span className="font-bold text-2xl">{stats.totalClicks}</span>
        </div>
      </div>
      <div className="shadow-sm bg-white rounded-lg overflow-hidden p-4">
        <div className="flex flex-col gap-y-1">
          <span className="text-gray-500">Average CTR</span>
          <span className="font-bold text-2xl">{stats.averageCTR}%</span>
        </div>
      </div>
    </div>
  );
};
