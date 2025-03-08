import { AdVM } from "../../api";
import { GridCell } from "./GridCell";

export const GridLayout: React.FC<{ ads: AdVM[] }> = ({ ads }) => {
  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-6">
      {ads.map((ad) => (
        <GridCell key={ad.id} ad={ad} />
      ))}
    </div>
  );
};
