import { AdType, AdVM } from "./types";

export class AdsApi {
  static async list(type?: AdType): Promise<AdVM[]> {
    const url = new URL(import.meta.env.VITE_ADS_API_URL);
    if (type) {
      url.searchParams.append("type", type);
    }

    const response = await fetch(url.toString());

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const adsJson: AdVM[] = await response.json();
    return adsJson;
  }
}
