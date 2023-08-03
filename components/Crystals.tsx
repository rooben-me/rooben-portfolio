import Image from "next/image";

import crystalImage from "../public/image/crystals.webp";

const Crystals = () => {
  return (
    <div className="absolute hidden sm:block top-0 inset-0 -z-10">
      <div className=" relative w-full min-h-screen">
        <figure className="absolute -left-96 sm:-left-80 md:-left-72 lg:-left-52 xl:-left-20 2xl:left-0 top-0">
          <Image
            src={crystalImage}
            alt="Image of a crystal"
            placeholder="blur"
            layout="fixed"
            objectFit="contain"
          />
        </figure>
        <figure className="absolute -right-96 sm:-right-80 md:-right-72 lg:-right-52 xl:-right-20 2xl:right-0 -scale-x-100 top-0">
          <Image
            src={crystalImage}
            alt="Image of a crystal"
            layout="fixed"
            placeholder="blur"
            objectFit="fill"
          />
        </figure>
      </div>
    </div>
  );
};

export default Crystals;
