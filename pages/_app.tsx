import "../styles/globals.css";
import "../styles/prism-coldark-dark.css";

import type { AppProps } from "next/app";
import { NextSeo } from "next-seo";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title="Rooben Portfolio - UI Engineer"
        defaultTitle="Rooben Portfolio"
        description="A full stack UI Engineer, who loves to design and develop beautiful websites. I have been coding for 2 year now. One of my hobbies is writing, I love to document my journey by writing blog posts."
        canonical="https://rooben.site/"
        openGraph={{
          url: "https://rooben.site/",
          title: "Rooben - UI Engineer",
          description:
            "A full stack UI Engineer, who loves to design and develop beautiful websites. I have been coding for 2 year now. One of my hobbies is writing, I love to document my journey by writing blog posts.",
          images: [
            {
              url: "https://www.rooben.site/image/rooben-photo-rec.png",
              width: 420,
              height: 420,
              alt: "Picture of rooben - UI Engineer",
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
