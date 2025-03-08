import { AdVM } from "../../api";
import { AdRenderer } from "../ad-renderer/AdRenderer";

const AdTypeTag: React.FC<{ type: string }> = ({ type }) => {
  return (
    <div
      className={"absolute bg-gray-100 text-black rounded-md px-2 top-2 left-2"}
    >
      <span className="text-xs font-bold">{type}</span>
    </div>
  );
};

const TextTypeTag: React.FC<{ type: string }> = ({ type }) => {
  return (
    <div
      className={"absolute bg-gray-100 text-black rounded-md px-2 top-6 left-6"}
    >
      <span className="text-xs font-bold">{type}</span>
    </div>
  );
};

export const GridCell: React.FC<{ ad: AdVM }> = ({ ad }) => {
  return (
    <div className="shadow-sm bg-white rounded-lg overflow-hidden">
      <div className="relative  h-50 w-full">
        <AdRenderer ad={ad} />
        {ad.type === "text" ? (
          <TextTypeTag type={ad.type} />
        ) : (
          <AdTypeTag type={ad.type} />
        )}
      </div>
      <div className="grid grid-cols-3 gap-8 p-4 text-xs">
        <div className="flex flex-col gap-y-1">
          <span className="text-gray-500">Impressions</span>
          <span className="font-bold">{ad.impressions}</span>
        </div>
        <div className="flex flex-col gap-y-1">
          <span className="text-gray-500">Clicks</span>
          <span className="font-bold">{ad.clicks}</span>
        </div>
        <div className="flex flex-col gap-y-1">
          <span className="text-gray-500">CTR</span>
          <span className="font-bold">{ad.ctr}</span>
        </div>
      </div>
    </div>
  );
};
