import Image from "next/image";
import Link from "next/link";

import roobenlogo from "../public/image/rooben-logo.svg";

const Navbar = () => {
  const navItems = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Recent work",
      href: "/#recent-work",
    },
    {
      name: "Socials",
      href: "/#",
    },
  ];

  return (
    <section className="grid place-items-center grid-cols-1 backdrop-blur-md bg-background z-50 bg-opacity-80 rounded-full p-4 m-4 md:grid-cols-3">
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

      <nav className="hidden md:flex md:gap-16 md:mx-auto md:items-center">
        {navItems.map(({ name, href }) => (
          <Link key={name} href={href}>
            <a className="text-link text-lg hover:text-primary-main transition-colors ease-in-out duration-500">
              {name}
            </a>
          </Link>
        ))}
      </nav>

      <Link href="#">
        <a className="hidden md:block primary-gradient text-xl place-self-end font-medium">
          Contact me
        </a>
      </Link>
    </section>
  );
};

export default Navbar;
