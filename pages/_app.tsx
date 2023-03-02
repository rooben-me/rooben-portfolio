import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextSeo } from "next-seo";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title="Rooben Portfolio"
        titleTemplate="Rooben Portfolio"
        defaultTitle="Rooben Portfolio"
        description="A full stack web developer, who loves to design and develop beautiful websites. I have been coding for over a year now. One of my hobbies is writing, I love to document my journey by writing blog posts and also teach others through them."
        canonical="https://www.rooben.me/"
        openGraph={{
          url: "https://www.rooben.me/",
          title: "Rooben Lovin",
          description:
            "A full stack web developer, who loves to design and develop beautiful websites. I have been coding for over a year now. One of my hobbies is writing, I love to document my journey by writing blog posts and also teach others through them.",
          images: [
            {
              url: "/images/rooben-photo.png",
              width: 420,
              height: 420,
              alt: "A Picture of rooben",
            },
          ],
        }}
      />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
