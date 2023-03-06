import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ICard {
  src: string;
  alt: string;
  linkTo: string;
  roles: string;
}

const Card = ({ src, alt, linkTo, roles }: ICard) => {
  return (
    <Link href={linkTo} target="_blank" rel="noreferrer">
      <article className="flex flex-col items-start gap-4 max-w-[520px] w-full">
        <img src={src} alt={alt} className="object-contain" />

        <p className="text-slate-600 text-xl">Roles - {roles}</p>

        {/* <a
        href={linkTo}
        target="_blank"
        rel="noreferrer"
        className="rounded-lg w-full p-3 text-slate-700 lg:mt-4"
      >
        View Project
      </a> */}
      </article>
    </Link>
  );
};

export default Card;
