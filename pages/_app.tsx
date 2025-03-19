import { useEffect } from "react";
import type { AppProps } from "next/app";
import { NextSeo } from "next-seo";
import { Router } from 'next/router'

import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

import "../styles/globals.css";
import "../styles/prism-coldark-dark.css";

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
      person_profiles: 'identified_only', // or 'always' to create profiles for anonymous users as well
      // Enable debug mode in development
      loaded: (posthog) => {
        if (process.env.NODE_ENV === 'development') posthog.debug()
      }
    })

    const handleRouteChange = () => posthog?.capture('$pageview')

    Router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    }
  }, [])


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
      <PostHogProvider client={posthog}>
        <Component {...pageProps} />
      </PostHogProvider>
    </>
  );
}

export default MyApp;
