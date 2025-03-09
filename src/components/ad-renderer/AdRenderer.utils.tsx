import { AdVM } from "../../api";
import { ImageRenderer } from "./ImageRenderer";
import { TextRenderer } from "./TextRenderer";
import { VideoRenderer } from "./VideoRenderer";

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
