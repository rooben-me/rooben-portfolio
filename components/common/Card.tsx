import React from "react";
import { EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Tag from "../common/Tag";
import { TAG_COLOR } from "../../constant";

interface ICard {
  src: string;
  slug: string;
  roles: string[];
}

const Card = ({ src, slug, roles }: ICard) => {
  return (
    <Link href={`/posts/${slug}`}>
      <a className="p-4 rounded-xl hover:bg-slate-100 active:border-slate-300 border border-transparent transition-colors ease-in-out">
        <article className="flex flex-col items-start gap-2 md:gap-4 max-w-[520px] w-full">
          <img src={src} alt={src} className="object-contain" />
          <div className="flex flex-wrap gap-3">
            {roles.map((role) => {
              const {
                color = "text-gray-700",
                backgroundColor = "bg-gray-200",
              } = TAG_COLOR[role] || {};

              return (
                <Tag
                  withDot
                  rounded
                  color={color}
                  backgroundColor={backgroundColor}
                  key={role}
                  text={role}
                />
              );
            })}
          </div>

          <div className="text-cyan-700 bg-cyan-100 hidden"></div>
          <div className="text-green-700 bg-green-100 hidden"></div>
          <div className="text-orange-700 bg-orange-100 hidden"></div>
          <div className="text-red-700 bg-red-100 hidden"></div>

          <span className="flex items-center gap-2 mt-3">
            <EyeIcon className="w-4 h-4 text-slate-600" />
            <span className="text-slate-600">View project</span>
          </span>
        </article>
      </a>
    </Link>
  );
};

export default Card;
