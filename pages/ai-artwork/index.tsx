import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Modal from "../../components/common/Modal";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import cloudinary from "../../utils/cloudinary";
import getBase64ImageUrl from "../../utils/generateBlurPlaceholder";
import type { ImageProps } from "../../utils/types";
import { useLastViewedPhoto } from "../../utils/useLastViewedPhoto";

const Home: NextPage = ({ images }: { images: ImageProps[] }) => {
  const router = useRouter();
  const { photoId } = router.query;
  const [lastViewedPhoto, setLastViewedPhoto] = useLastViewedPhoto();

  return (
    <>
      <Head>
        <title>Ai artwork - Rooben - UI Engineer | Portfolio</title>
      </Head>
      <section className="font-monda overflow-hidden relative">
        <div className="container mx-auto">
          <Navbar />
        </div>

        <div className="flex flex-col py-4 md:py-16 my-8">
          <h1 className="text-3xl md:text-5xl font-semibold text-center text-slate-800">
            AI Artwork
          </h1>

          <p className="text-lg md:text-xl text-center text-slate-600 mt-6 p-4">
            Experimental collection of images I created in my free time using ai
          </p>
        </div>

        <main className="mx-auto max-w-[1960px] p-4">
          {photoId && (
            <Modal
              images={images}
              onClose={() => {
                setLastViewedPhoto(photoId);
              }}
            />
          )}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {images.map(
              ({ id, public_id, format, blurDataUrl, width, height }) => (
                <Link
                  key={id}
                  href={`/ai-artwork/?photoId=${id}`}
                  as={`/ai-artwork/p/${id}`}
                  shallow
                  className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
                >
                  <div className="relative pb-1/1 group rounded-2xl overflow-hidden">
                    <Image
                      alt="ai image"
                      className="transform rounded-2xl brightness-90 transition will-change-auto object-cover absolute w-full h-full group-hover:brightness-110"
                      style={{ transform: "translate3d(0, 0, 0)" }}
                      placeholder="blur"
                      blurDataURL={blurDataUrl}
                      src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${public_id}.${format}`}
                      layout="fill"
                    />
                  </div>
                </Link>
              )
            )}
          </div>
        </main>

        <Footer />
      </section>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const results = await cloudinary.v2.search
    .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
    .sort_by("public_id", "desc")
    .max_results(400)
    .execute();
  let reducedResults: ImageProps[] = [];

  let i = 0;
  for (let result of results.resources) {
    reducedResults.push({
      id: i,
      height: result.height,
      width: result.width,
      public_id: result.public_id,
      format: result.format,
    });
    i++;
  }

  const blurImagePromises = results.resources.map((image: ImageProps) => {
    return getBase64ImageUrl(image);
  });
  const imagesWithBlurDataUrls = await Promise.all(blurImagePromises);

  for (let i = 0; i < reducedResults.length; i++) {
    reducedResults[i].blurDataUrl = imagesWithBlurDataUrls[i];
  }

  return {
    props: {
      images: reducedResults,
    },
  };
}
