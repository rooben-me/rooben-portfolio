import { serialize } from "next-mdx-remote/serialize";
import { GetStaticProps, GetStaticPaths } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import rehypeSlug from "rehype-slug";

import { IPost } from "../../types/post";
import { getPost, getAllPosts } from "../../utils/mdxUtils";
import { ParsedUrlQuery } from "querystring";
import Navbar from "../../components/Navbar";

// props type
type Props = {
  source: MDXRemoteSerializeResult;
  frontMatter: Omit<IPost, "slug">;
};

const PostPage: React.FC<Props> = ({ source, frontMatter }: Props) => {
  return (
    <section className="font-monda container mx-auto p-4">
      <Navbar />

      <div className="flex flex-col py-12 md:py-16 my-8">
        <h1 className="text-3xl md:text-5xl font-semibold text-center text-slate-800">
          {frontMatter.title}
        </h1>

        <p className="text-lg md:text-xl text-center text-slate-600 mt-6">
          {frontMatter.description}
        </p>
      </div>

      <img
        className="w-full rounded-lg lg:rounded-xl overflow-hidden"
        src={frontMatter.thumbnailBanner}
        alt={frontMatter.title}
      />

      <article className="prose w-full max-w-prose md:prose-lg lg:prose-xl mx-auto mt-12 md:mt-16">
        <MDXRemote {...source} />
      </article>
    </section>
  );
};

export default PostPage;

interface Iparams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as Iparams;
  // get the slug
  const { content, data } = getPost(slug);

  // serialize the data on the server side
  const mdxSource = await serialize(content, {
    scope: data,
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug, // add IDs to any h1-h6 tag that doesn't have one, using a slug made from its text
      ],
    },
  });
  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  //only get the slug from posts
  const posts = getAllPosts(["slug"]);

  // map through to return post paths
  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};
