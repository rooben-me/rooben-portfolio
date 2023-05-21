import React from "react";
import { IPost } from "../types/post";
import Card from "./common/Card";
import { Title, Text } from "./common/Typography";

type Props = {
  posts: [IPost];
};

const RecentWork = ({ posts }: Props) => {
  const filteredPosts = posts.filter((post) => !post.draft); // filter out draft posts

  return (
    <section
      id="recent-work"
      className="mt-24 min-h-screen p-4 flex flex-col items-center justify-center w-full mx-auto max-w-[68rem]"
    >
      <Title>Recent work</Title>

      <Text className="mt-4">
        Includes Saas Application, Chrome extension projects
      </Text>

      <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-6 md:gap-12 mt-6 lg:mt-12 w-full">
        {filteredPosts.map(({ title, roles, slug, date, thumbnail }) => (
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

export default RecentWork;
