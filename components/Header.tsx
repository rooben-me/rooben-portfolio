import Image from "next/image";

import roobenPhoto from "../public/image/rooben-photo.png";
import { Text, Title } from "./common/Typography";

const Header = () => {
  return (
    <section
      id="hero"
      className="my-8 md:my-16 flex mx-auto flex-col items-center p-4"
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

      <Text className="px-4 mt-8 mb-4">Hey 👋, I’m Ruban kumar</Text>
      <Title>
        I Design & Develop interface & craft beautiful products for web & Mobile
      </Title>
      <Text className="mt-4">
        I&apos;ve been crafting products for the last 3 years and have built
        various human-centered digital experiences for businesses.
      </Text>

      <a
        href="https://drive.google.com/uc?id=121RbXLjJtvx-Lgqe164szX3lQIP4Grqe&export=download"
        target="_blank"
        rel="noreferrer"
      >
        <button className="creative-button creative-button--dione mt-8">
          <span>Download Resume</span>
        </button>
      </a>
    </section>
  );
};

export default Header;
