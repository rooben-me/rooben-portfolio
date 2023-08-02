import "../styles/globals.css";
import "../styles/prism-coldark-dark.css";

import type { AppProps } from "next/app";
import { NextSeo } from "next-seo";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title="Rooben - UI Engineer | Portfolio"
        titleTemplate="%s - Rooben - UI Engineer | Portfolio"
        defaultTitle="Rooben"
        description="A full stack UI Engineer, who loves to design and develop beautiful websites. I have been coding for 2 year now. One of my hobbies is writing, I love to document my journey by writing blog posts."
        canonical="https://rooben.site/"
        openGraph={{
          url: "https://rooben.site/",
          title: "Rooben - UI Engineer | Portfolio",
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
          siteName: "Rooben Portfolio",
        }}
      />

      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
