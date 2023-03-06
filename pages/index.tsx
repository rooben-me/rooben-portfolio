import type { NextPage, GetStaticProps } from "next";
import { IPost } from "../types/post";
import { getAllPosts } from "../utils/mdxUtils";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Crystals from "../components/Crystals";
import RecentWork from "../components/RecentWork";

type Props = {
  posts: [IPost];
};

const Home: NextPage<Props> = ({ posts }: Props) => {
  console.log("posts", posts);
  return (
    <div>
      <section className="font-monda overflow-hidden relative">
        <div className="container mx-auto">
          <Navbar />
          <Header />
          <RecentWork posts={posts} />
        </div>
        <Crystals />
      </section>
    </div>
  );
};

export default Home;

// get posts from serverside at build time
export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts([
    "slug",
    "date",
    "thumbnail",
    "thumbnailBanner",
    "title",
    "description",
    "roles",
  ]);

  // retunr the posts props
  return { props: { posts } };
};
