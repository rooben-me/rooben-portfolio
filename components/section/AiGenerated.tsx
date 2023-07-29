import Link from "next/link";
import React from "react";

const AiGenerated = () => {
  return (
    <div className="flex items-center justify-center">
      <Link href="/ai-artwork">
        <a
          className="py-5 px-10 bg-primary-main text-white shadow-md font-medium rounded-xl"
          style={{ fontWeight: 600 }}
        >
          Show AI Images
        </a>
      </Link>
    </div>
  );
};

export default AiGenerated;
