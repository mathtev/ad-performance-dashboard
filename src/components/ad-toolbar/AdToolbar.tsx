import React from "react";
import { AdFilters } from "../../pages";
import { AdType } from "../../api";

const SELECT_OPTIONS: { value: AdType | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "image", label: "Image" },
  { value: "text", label: "Text" },
  { value: "video", label: "Video" },
];

interface AdToolbarProps {
  filters: AdFilters;
  setFilters: (filters: AdFilters) => void;
}

export const AdToolbar: React.FC<AdToolbarProps> = ({
  filters,
  setFilters,
}) => {
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "all") {
      setFilters({ type: undefined });
      return;
    }

    setFilters({ type: e.target.value as AdType });
  };

  return (
    <div className="flex justify-between items-center py-2">
      <h1 className="text-2xl font-bold">Ad Performance Dashboard</h1>
      <select value={filters.type} onChange={handleFilterChange}>
        {SELECT_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
