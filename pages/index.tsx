import type { NextPage, GetStaticProps } from "next";
import { IPost } from "../types/post";
import { getAllPosts } from "../utils/mdxUtils";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Crystals from "../components/Crystals";
import RecentWork from "../components/RecentWork";
import Footer from "../components/Footer";

type Props = {
  posts: [IPost];
};

const Home: NextPage<Props> = ({ posts }: Props) => {
  return (
    <section className="font-monda overflow-hidden relative">
      <div className="container mx-auto">
        <Navbar />
        <Header />
        <RecentWork posts={posts} />
        <Footer />
      </div>
      <Crystals />
    </section>
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
    "draft",
  ]);

  // retunr the posts props
  return { props: { posts } };
};
