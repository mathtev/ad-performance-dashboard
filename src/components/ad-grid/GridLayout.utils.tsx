import { AdVM } from "../../api";
import { ImageRenderer } from "../ad-renderer/ImageRenderer";
import { TextRenderer } from "../ad-renderer/TextRenderer";
import { VideoRenderer } from "../ad-renderer/VideoRenderer";

export const renderAd = (ad: AdVM) => {
  switch (ad.type) {
    case "image":
      return <ImageRenderer url={ad.url} />;
    case "video":
      return <VideoRenderer url={ad.url} />;
    case "text":
      return (
        <TextRenderer headline={ad.headline} description={ad.description} />
      );
    default:
      return null;
  }
};
