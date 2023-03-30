import { Head, Html, Main, NextScript } from "next/document";
import Favicon from "../components/Favicon";

export default function Document() {
  return (
    <Html className="antialiased [font-feature-settings:'ss01']" lang="en">
      <Head>
        <Favicon/>
        <meta
          name="ahrefs-site-verification"
          content="1833629160a9d29fde79ef938afb88fc7a071ac7906cd150d4817d01dcc54a86"
        />
      </Head>
      <body className="bg-background">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
