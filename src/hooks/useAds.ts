import { useEffect, useState } from "react";
import { AdFilters } from "../pages";
import { AdsApi, AdVM } from "../api";

export const useAds = (filters: AdFilters) => {
  const [ads, setAds] = useState<AdVM[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchAds = async () => {
      setIsLoading(true);
      try {
        const ads = await AdsApi.list(filters.type);
        setAds(ads);
      } catch (error) {
        console.error("Error fetching ads:", error);
        // consider adding more error handling below...
      } finally {
        setIsLoading(false);
      }
    };

    fetchAds();
  }, [filters]);

  return { ads, isLoading };
};
