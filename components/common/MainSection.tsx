import React from "react";
import { IPost } from "../../types/post";
import Card from "../common/Card";
import { Title, Text } from "../common/Typography";

type Props = {
  posts: IPost[];
  title: string;
  description: string;
};

const MainSection = ({ posts, title, description }: Props) => {
  const gridCols =
    posts.length === 1 ? "grid-cols-1" : "grid-cols-1 lg:grid-cols-2";

  return (
    <section
      id={title.toLowerCase().replace(" ", "-")}
      className="mt-24 p-4 flex flex-col items-center justify-center w-full mx-auto max-w-[68rem]"
    >
      <Title>{title}</Title>

      <Text>{description}</Text>

      <div
        className={`grid ${gridCols} place-items-center gap-6 md:gap-12 mt-6 lg:mt-12 w-full`}
      >
        {posts.map(({ title, roles, slug, date, thumbnail }) => (
          <Card
            key={title}
            src={thumbnail}
            slug={slug}
            date={date}
            roles={roles}
          />
        ))}
      </div>
    </section>
  );
};

export default MainSection;
