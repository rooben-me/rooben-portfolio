import type { NextPage, GetStaticProps } from "next";
import { IPost } from "../types/post";
import { getAllPosts } from "../utils/mdxUtils";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Crystals from "../components/Crystals";
import Footer from "../components/Footer";
import MainSection from "../components/common/MainSection";
import AiGenerated from "../components/section/AiGenerated";

type Props = {
  posts: IPost[];
};

const Home: NextPage<Props> = ({ posts }: Props) => {
  const projectPosts = posts.filter((post) => !post.roles.includes("research"));
  const researchPosts = posts.filter((post) => post.roles.includes("research"));
  return (
    <section className="font-monda overflow-hidden relative">
      <div className="container mx-auto">
        <Navbar />
        <Header />

        {/* Projects */}
        <MainSection
          posts={projectPosts}
          title="Projects"
          description="Includes Saas Application, Chrome extension projects"
        />

        {/* Ai generated Images */}
        <AiGenerated />

        {/* Research */}
        <MainSection
          posts={researchPosts}
          title="Research"
          description="Includes machine learning, and artificial intelligence projects"
        />

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

  const filteredPosts = posts.filter((post) => !post.draft);

  // retunr the posts props
  return { props: { posts: filteredPosts } };
};
