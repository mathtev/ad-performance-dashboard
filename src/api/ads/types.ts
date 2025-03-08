export type AdType = "image" | "text" | "video";

export interface AdVM {
  id: number;
  type: AdType;
  impressions: number;
  clicks: number;
  ctr: number;
  url?: string;
  headline?: string;
  description?: string;
}
