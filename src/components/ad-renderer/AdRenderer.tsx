import { AdVM } from "../../api";
import { renderAd } from "./AdRenderer.utils";

export const AdRenderer: React.FC<{ ad: AdVM }> = ({ ad }) => {
  return renderAd(ad);
};
