import Image from "next/image";

import roobenPhoto from "../public/image/rooben-photo.webp";
import { Text, Title } from "./common/Typography";

const Header = () => {
  return (
    <section id="hero" className="my-8 flex mx-auto flex-col items-center p-4">
      <figure className="relative w-[240px] h-[240px] md:w-[300px] md:h-[300px] mx-auto">
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
        href="https://drive.google.com/file/d/1O7_rqwgo5iSx-TSSsvqowwgJHubduoGI/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
        className="creative-button creative-button--calypso mt-12"
      >
        <span>View My Resume</span>
      </a>
    </section>
  );
};

export default Header;
