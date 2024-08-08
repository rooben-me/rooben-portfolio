import Image from "next/image";
import Link from "next/link";

import roobenlogo from "../public/image/rooben-logo.svg";
import IconFancy from "./common/icon/IconFancy";

export const InterLinks = ({ isFooter = false }: { isFooter?: boolean }) => {
  const navItems = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Projects",
      href: "/#projects",
    },
    {
      name: "Research",
      href: "/#research",
    },
    {
      name: "AI Artwork",
      href: "/ai-artwork",
    },
  ];

  return (
    <nav
      className={`${
        isFooter ? "flex flex-wrap" : "hidden lg:flex"
      } lg:flex-1 justify-center gap-8 xl:gap-16 lg:mx-auto lg:items-center`}
    >
      {navItems.map(({ name, href }) => (
        <Link key={name} href={href}>
          <a
            className={`${
              isFooter ? "" : ""
            } text-link text-lg w-32 hover:text-primary-main flex items-center justify-center relative transition-colors ease-in-out duration-500`}
          >
            {name === "AI Artwork" && <IconFancy />}
            <span className="truncate">{name}</span>
          </a>
        </Link>
      ))}
    </nav>
  );
};

const Navbar = () => {
  return (
    <section className="z-50 p-4 m-4 flex items-center justify-center md:justify-between gap-6">
      <Link href="/">
        <a>
          <Image
            src={roobenlogo}
            alt="logo of rooben"
            layout="fixed"
            width={160}
            height={24}
            className="place-self-start"
          />
        </a>
      </Link>

      <InterLinks />

      <Link href="https://www.linkedin.com/in/rooben-me/recent-activity/all/">
        <a className="hidden w-40 relative primary-gradient text-xl place-self-end font-medium md:flex flex-col items-center justify-center gap-1 link link--carme">
          <span>Contact me</span>
          <svg
            className="link__graphic link__graphic--stroke link__graphic--scribble"
            width="100%"
            height="9"
            viewBox="0 0 101 9"
          >
            <path
              d="M.426 1.973C4.144 1.567 17.77-.514 21.443 1.48 24.296 3.026 24.844 4.627 27.5 7c3.075 2.748 6.642-4.141 10.066-4.688 7.517-1.2 13.237 5.425 17.59 2.745C58.5 3 60.464-1.786 66 2c1.996 1.365 3.174 3.737 5.286 4.41 5.423 1.727 25.34-7.981 29.14-1.294"
              pathLength="1"
            />
          </svg>
        </a>
      </Link>
    </section>
  );
};

export default Navbar;
