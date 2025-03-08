import { AdVM } from "../../api";

export const getAdStatistics = (ads: AdVM[]) => {
  console.log("innnnnnnnnn");
  if (!ads.length) {
    return {
      totalClicks: 0,
      totalImpressions: 0,
      averageCTR: 0,
    };
  }

  const totals = ads.reduce(
    (acc, ad) => {
      acc.totalClicks += ad.clicks;
      acc.totalImpressions += ad.impressions;
      acc.totalCTR += ad.ctr;
      return acc;
    },
    { totalClicks: 0, totalImpressions: 0, totalCTR: 0 }
  );

  return {
    totalClicks: totals.totalClicks,
    totalImpressions: totals.totalImpressions,
    averageCTR: Math.round((totals.totalCTR / ads.length) * 100) / 100,
  };
};
