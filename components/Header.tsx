import Image from "next/image";

import roobenPhoto from "../public/image/rooben-photo.png";

const Header = () => {
  return (
    <section id="hero" className="my-16">
      <div className="relative w-[240px] h-[240px] mx-auto">
        <Image
          src={roobenPhoto}
          alt="A Picture of rooben"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </section>
  );
};

export default Header;
