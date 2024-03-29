import { serialize } from "next-mdx-remote/serialize";
import { GetStaticProps, GetStaticPaths } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import rehypeSlug from "rehype-slug";
import rehypePrism from "rehype-prism-plus";
import rehypeCodeTitles from "rehype-code-titles";
import remarkGfm from "remark-gfm";

import { IPost } from "../../types/post";
import { getPost, getAllPosts } from "../../utils/mdxUtils";
import { ParsedUrlQuery } from "querystring";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import RoleTag from "../../components/common/RoleTag";
import { Button } from "../../components/common/Button";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

// props type
type Props = {
  source: MDXRemoteSerializeResult;
  frontMatter: Omit<IPost, "slug">;
};

const PostPage: React.FC<Props> = ({ source, frontMatter }: Props) => {
  const router = useRouter();

  const publishedDate = new Date(frontMatter.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <NextSeo
        title={`Rooben Portfolio - ${frontMatter.title}`}
        defaultTitle="Rooben Portfolio"
        description={frontMatter.description}
        canonical="https://rooben.vercel.app/"
        openGraph={{
          url: `https://rooben.vercel.app/${router.query.slug}`,
          title: `Rooben Portfolio - ${frontMatter.title}`,
          description: frontMatter.description,
          type: "article",
          article: {
            publishedTime: publishedDate,
            modifiedTime: publishedDate,
            expirationTime: publishedDate,
            section: "posts",
            authors: ["rooben"],
            tags: frontMatter.roles,
          },
          images: [
            {
              url: frontMatter.thumbnailBanner,
              width: 720,
              height: 420,
              alt: frontMatter.title,
            },
          ],
        }}
      />
      <section className="font-monda container mx-auto p-4">
        <Navbar />

        <div className="flex flex-col pb-12 md:py-16">
          <div className="flex flex-col justify-center items-center container relative">
            <Link href={"/"}>
              <Button
                variant="outline"
                className="inline-flex w-fit bg-white/60 mx-auto lg:absolute lg:left-[3.25rem] text-gray-700 mb-8 mt-12 lg:my-0"
              >
                <ArrowUturnLeftIcon className="w-3 h-3 mr-2 text-gray-500 " />
                Go Back
              </Button>
            </Link>

            <h1 className="text-3xl md:text-5xl font-semibold text-center text-slate-800">
              {frontMatter.title}
            </h1>
          </div>

          <p className="text-lg md:text-xl mx-auto max-w-3xl text-center text-slate-600 md:mt-4 lg:mt-6 p-4">
            {frontMatter.description}
          </p>

          <RoleTag
            roles={frontMatter.roles}
            className="justify-center mt-2 lg:mt-8"
          />
        </div>

        <img
          className="w-full rounded-lg lg:rounded-xl overflow-hidden"
          src={frontMatter.thumbnailBanner}
          alt={frontMatter.title}
        />

        <article className="prose w-full max-w-prose md:prose-lg mx-auto mt-12 md:mt-16 prose-indigo prose-img:rounded-lg prose-img:shadow-md prose-h1:leading-normal prose-img:m-0">
          <MDXRemote {...source} />
        </article>
        <Footer />
      </section>
    </>
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
        rehypeCodeTitles,
        rehypePrism,
        remarkGfm,
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
