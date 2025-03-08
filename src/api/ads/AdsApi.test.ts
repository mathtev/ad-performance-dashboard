import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";
import { AdsApi } from "./AdsApi";
import { AdVM } from "./types";

// filepath: c:\Users\mrychlik\Desktop\inne\Ads\ad-performance-dashboard\src\api\ads\AdsApi.test.ts

const ADS_API_URL = "https://example.com/api/ads";

const mockAds: AdVM[] = [
  {
    id: 1,
    type: "image",
    impressions: 15000,
    clicks: 300,
    ctr: 2,
    url: "https://picsum.photos/300/250?random=1",
  },
  {
    id: 2,
    type: "text",
    impressions: 9000,
    clicks: 180,
    ctr: 2,
    headline: "Flash Sale!",
    description: "Limited-time discounts on all items.",
  },
  {
    id: 3,
    type: "video",
    impressions: 6000,
    clicks: 120,
    ctr: 2,
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];

describe("AdsApi", () => {
  beforeAll(() => {
    vi.stubEnv("VITE_ADS_API_URL", ADS_API_URL);

    globalThis.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockAds),
      } as Response)
    );
  });

  afterAll(() => {
    vi.unstubAllEnvs();
  });

  it("should fetch ads successfully", async () => {
    const ads = await AdsApi.list();
    expect(ads).toEqual(mockAds);
    expect(fetch).toHaveBeenCalledWith(ADS_API_URL);
  });

  it("should call the ads API with the correct type", async () => {
    const type = "image";

    await AdsApi.list(type);
    expect(fetch).toHaveBeenCalledWith(`${ADS_API_URL}?type=${type}`);
  });

  it("should throw an error if the network response is not ok", async () => {
    globalThis.fetch = vi.fn(() =>
      Promise.resolve({
        ok: false,
      } as Response)
    );

    await expect(AdsApi.list()).rejects.toThrow("Network response was not ok");
  });
});
