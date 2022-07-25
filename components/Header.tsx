import Image from "next/image";

import roobenPhoto from "../public/image/rooben-photo.png";

const Header = () => {
  return (
    <section id="hero" className="my-16 flex mx-auto flex-col items-center">
      <figure className="relative w-[160px] h-[160px] md:w-[320px] md:h-[320px] mx-auto">
        <Image
          src={roobenPhoto}
          alt="A Picture of rooben"
          layout="fill"
          objectFit="contain"
        />
        <figcaption className="sr-only">A Picture of rooben</figcaption>
      </figure>

      <p className="text-slate-600 text-xl mt-8 mb-4">
        Hey 👋, I’m Ruban kumar
      </p>
      <h1 className="text-3xl md:text-5xl font-semibold text-slate-800 !leading-snug max-w-2xl text-center">
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
