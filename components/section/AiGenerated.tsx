import Link from "next/link";
import React from "react";
import { Title, Text } from "../common/Typography";

const AiGenerated = () => {
  return (
    <section
      id="ai-artwork"
      className="mt-24 p-4 xl:p-0 flex flex-col items-center justify-center w-full mx-auto max-w-[68rem]"
    >
      <div
        style={{
          backgroundImage: `url('/image/abstract/ai-crystal.webp')`,
        }}
        className="w-full relative p-4 overflow-hidden rounded-2xl bg-opacity-30 bg-no-repeat bg-right-bottom bg-cover ring-1 ring-indigo-900 flex items-center justify-center flex-col py-16"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
        <Title className="text-white z-10">AI Artwork</Title>

        <Text className="text-white z-10 -mb-4">
          Includes Ai generated images and artwork
        </Text>

        <div className="mt-6 lg:mt-12 w-full z-10">
          <div className="flex items-center justify-center">
            <Link href="/ai-artwork">
              <a className="creative-button creative-button--calypso mt-8 lg:mt-4">
                <span>View all Images</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiGenerated;
