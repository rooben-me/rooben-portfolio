import React from "react";
import { IPost } from "../types/post";
import Card from "./common/Card";

type Props = {
  posts: [IPost];
};

const RecentWork = ({ posts }: Props) => {
  const PROJECTS = [
    {
      title: "MyPricing",
      imageSrc: "/image/work/mypricing.png",
      imageAlt: "mypricing project",
      linkTo: "https://google.com",
      roles: "Product Design, Front end Development",
    },
    {
      title: "Market radar",
      imageSrc: "/image/work/marketradar.png",
      imageAlt: "market radar project",
      linkTo: "#",
      roles: "Product Owner, Design and development",
    },
  ];

  return (
    <section
      id="recent-work"
      className="mt-24 min-h-screen flex flex-col items-center justify-center w-full mx-auto max-w-[68rem]"
    >
      <h1 className="text-3xl md:text-5xl font-semibold text-slate-800 !leading-snug max-w-2xl text-center">
        Recent work
      </h1>
      <p className="text-slate-600 leading-relaxed max-w-xl mt-4 text-center text-xl">
        Includes Saas Application, Chrome extension projects
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-12 lg:gap-12 mt-12 lg:mt-12 w-full">
        {posts.map(({ title, roles, slug, thumbnail }) => (
          <Card key={title} src={thumbnail} slug={slug} roles={roles} />
        ))}
      </div>
    </section>
  );
};

export default RecentWork;
