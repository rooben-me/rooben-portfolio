import React from "react";

import PhotoAlbum from "react-photo-album";
import photos from "../common/photos";
import NextJsImage from "../common/NextJsImage";

const AiGenerated = () => {
  return (
    <PhotoAlbum
      photos={photos}
      layout="rows"
      defaultContainerWidth={1200}
      sizes={{
        size: "calc(100vw - 40px)",
        sizes: [
          { viewport: "(max-width: 299px)", size: "calc(100vw - 10px)" },
          { viewport: "(max-width: 599px)", size: "calc(100vw - 20px)" },
          { viewport: "(max-width: 1199px)", size: "calc(100vw - 30px)" },
        ],
      }}
    />
  );
};

export default AiGenerated;
