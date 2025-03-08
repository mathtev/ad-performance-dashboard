import { AdVM } from "../../api";
import { renderAd } from "../ad-list/GridLayout.utils";

export const AdRenderer: React.FC<{ ad: AdVM }> = ({ ad }) => {
  return renderAd(ad);
};
