import Image from "next/image";

import roobenPhoto from "../public/image/rooben-photo.png";
import crystalImage from "../public/image/crystals.png";

const Header = () => {
  return (
    <section
      id="hero"
      className="my-16 flex mx-auto flex-col items-center overflow-hidden"
    >
      <figure className="relative w-[160px] h-[160px] md:w-[320px] md:h-[320px] mx-auto">
        <Image
          src={roobenPhoto}
          alt="A Picture of rooben"
          layout="fill"
          objectFit="contain"
        />
        <figcaption className="sr-only">A Picture of rooben</figcaption>
      </figure>

      <figure className="absolute -left-96 sm:-left-80 md:-left-72 lg:-left-52 xl:-left-20 2xl:left-0 top-0">
        <Image
          src={crystalImage}
          alt="Image of a crystal"
          layout="fixed"
          objectFit="contain"
        />
      </figure>
      <figure className="absolute -right-96 sm:-right-80 md:-right-72 lg:-right-52 xl:-right-20 2xl:right-0 -scale-x-100 top-0">
        <Image
          src={crystalImage}
          alt="Image of a crystal"
          layout="fixed"
          objectFit="contain"
        />
      </figure>

      <p className="text-slate-600 text-xl mt-8 mb-4">
        Hey 👋, I’m Ruban kumar
      </p>
      <h1 className="text-3xl md:text-5xl font-semibold text-slate-800 leading-normal max-w-2xl text-center">
        I Design & Develop interface & craft beautiful products for web & Mobile
      </h1>
      <p className="text-slate-600 leading-relaxed max-w-xl mt-4 text-center text-xl">
        I&apos;ve been crafting products for the last 3 years and have built
        various human-centered digital experiences for businesses.
      </p>
      <button className="creative-button creative-button--dione mt-8">
        <span>Download Resume</span>
      </button>
    </section>
  );
};

export default Header;
