import Image from "next/image";
import React from "react";

const AiImagePreview = () => {
  const range = (n) => Array.from({ length: n }, (_, index) => index);

  return (
    <div className="grid grid-cols-3 lg:grid-cols-6 gap-8">
      {range(6).map((index) => (
        <div
          key={index}
          className="ring-2 ring-purple-600/50 rounded-full h-12 w-12 "
        >
          <Image
            width={50}
            height={50}
            className="rounded-full"
            src={`/image/section/ai/ai-img-small-${index + 1}.png`}
            alt="ai image preview"
          />
        </div>
      ))}
    </div>
  );
};

export default AiImagePreview;
