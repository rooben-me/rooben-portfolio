import Image from "next/image";
import React from "react";

interface ICard {
  src: string;
  alt: string;
  linkTo: string;
  roles: string;
}

const Card = ({ src, alt, linkTo, roles }: ICard) => {
  return (
    <article className="flex flex-col items-start gap-4 max-w-[520px] w-full">
      <img src={src} alt={alt} className="object-contain" />

      <p className="text-slate-600 text-xl">Roles - {roles}</p>

      <a
        href={linkTo}
        target="_blank"
        rel="noreferrer"
        className="rounded-lg w-full hover:shadow-sm active:shadow-md active:border-slate-300 border p-3 border-slate-200 text-slate-700 lg:mt-4"
      >
        View Project
      </a>
    </article>
  );
};

export default Card;
