import Image from "next/image";

import crystalImage from "../public/image/new.webp";

const Crystals = () => {
  return (
    <div className="absolute hidden sm:block top-0 inset-0 -z-10">
      <div className=" relative w-full min-h-screen">
        <figure className="absolute mt-12 lg:mt-32 -left-[32rem] lg:-left-80 xl:-left-52 2xl:-left-28 top-0">
          <Image
            src={crystalImage}
            alt="Image of a crystal"
            placeholder="blur"
            width={720}
            height={720}
            layout="fixed"
            objectFit="contain"
          />
        </figure>
        <figure className="absolute mt-12 lg:mt-32 -right-[32rem] lg:-right-80 xl:-right-52 2xl:-right-28 -scale-x-100 top-0">
          <Image
            src={crystalImage}
            alt="Image of a crystal"
            placeholder="blur"
            width={720}
            height={720}
            layout="fixed"
            objectFit="fill"
          />
        </figure>
      </div>
    </div>
  );
};

export default Crystals;
