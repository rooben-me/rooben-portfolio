import Image from "next/image";
import Link from "next/link";

import roobenlogo from "../public/image/rooben-logo.svg";

const Navbar = () => {
  const navItems = [
    {
      name: "Home",
      href: "#",
    },
    {
      name: "About",
      href: "#",
    },
    {
      name: "Skills",
      href: "#",
    },
  ];

  return (
    <section className="grid grid-cols-2 md:grid-cols-3">
      <Image
        src={roobenlogo}
        alt="logo of rooben"
        layout="fixed"
        width={160}
        height={24}
        className="place-self-start"
      />

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
        <a className="primary-gradient text-xl place-self-end font-medium">
          Contact me
        </a>
      </Link>
    </section>
  );
};

export default Navbar;
