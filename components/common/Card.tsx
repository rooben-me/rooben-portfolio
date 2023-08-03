import React from "react";
import { EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Tag from "../common/Tag";
import { TAG_COLOR } from "../../constant";

interface ICard {
  src: string;
  slug: string;
  roles: string[];
  date: string;
}

const Card = ({ src, slug, roles, date }: ICard) => {
  return (
    <Link href={`/posts/${slug}`}>
      <a className="w-full flex items-center justify-center rounded-xl hover:border-slate-200 hover:bg-white/50 active:ring-2 active:ring-primary-main border border-transparent transition-colors ease-in-out">
        <article className="flex flex-col items-start gap-2 md:gap-4 max-w-[520px] w-full">
          <img
            src={src}
            alt={src}
            width={240}
            height={240}
            className="object-contain bg-gray-100 w-full min-h-[240px] rounded-xl"
          />

          <div className="flex flex-wrap gap-2 md:gap-4">
            {roles.map((role) => {
              const {
                color = "text-gray-700",
                backgroundColor = "bg-gray-200",
                icon: IconComponent = null,
              } = TAG_COLOR[role] || {};

              return (
                <Tag
                  rounded
                  color={color}
                  backgroundColor={backgroundColor}
                  key={role}
                  text={role}
                  icon={
                    IconComponent ? (
                      <IconComponent className={`h-4 w-4 ${color}`} />
                    ) : null
                  }
                />
              );
            })}
          </div>

          <div className="text-cyan-700 bg-cyan-100 hidden"></div>
          <div className="text-green-700 bg-green-100 hidden"></div>
          <div className="text-orange-700 bg-orange-100 hidden"></div>
          <div className="text-red-700 bg-red-100 hidden"></div>
          <div className="text-fuchsia-700 bg-fuchsia-100 hidden"></div>
        </article>
      </a>
    </Link>
  );
};

export default Card;
