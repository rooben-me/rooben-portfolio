import React from "react";
import Link from "next/link";
import RoleTag from "./RoleTag";

interface ICard {
  src: string;
  slug: string;
  roles: string[];
  date: string;
}

const Card = ({ src, slug, roles, date }: ICard) => {
  return (
    <Link href={`/posts/${slug}`}>
      <a className="w-full flex items-center justify-center rounded-xl active:ring-2 active:ring-offset-2 active:ring-primary-main border border-transparent transition-colors ease-in-out">
        <article className="flex flex-col items-start gap-2 md:gap-4 max-w-[520px] w-full">
          <img
            src={src}
            alt={src}
            width={240}
            height={240}
            className="object-contain bg-gray-100 w-full min-h-[240px] rounded-xl"
          />

          <RoleTag roles={roles} />
        </article>
      </a>
    </Link>
  );
};

export default Card;
