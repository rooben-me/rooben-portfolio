import React from "react";
import { EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { Text } from "./Typography";

interface ICard {
  src: string;
  slug: string;
  roles: string;
}

const Card = ({ src, slug, roles }: ICard) => {
  return (
    <Link href={`/posts/${slug}`}>
      <a className="p-4 rounded-xl hover:bg-slate-200 active:ring-1 active:ring-slate-300 focus:ring-2 focus:ring-offset-2 focus:ring-primary-main">
        <article className="flex flex-col items-start gap-2 md:gap-4 max-w-[520px] w-full">
          <img src={src} alt={src} className="object-contain" />

          <Text className="text-left">Roles - {roles}</Text>

          <span className="flex items-center gap-2">
            <EyeIcon className="w-4 h-4 text-slate-600" />
            <span className="text-slate-600">View project</span>
          </span>
        </article>
      </a>
    </Link>
  );
};

export default Card;
