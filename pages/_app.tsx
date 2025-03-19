import { useEffect, useRef } from "react";
import type { AppProps } from "next/app";
import { NextSeo } from "next-seo";
import { Router, useRouter } from 'next/router'

import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

import "../styles/globals.css";
import "../styles/prism-coldark-dark.css";

function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter()
  const oldUrlRef = useRef(router)

  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
      // Enable debug mode in development
      loaded: (posthog) => {
        if (process.env.NODE_ENV === 'development') posthog.debug()
      }
    })

    const handleRouteChange = () => posthog?.capture('$pageview')

    const handleRouteChangeStart = () => posthog?.capture('$pageleave', {
      $current_url: oldUrlRef.current
    })

    Router.events.on('routeChangeComplete', handleRouteChange);
    Router.events.on('routeChangeStart', handleRouteChangeStart);

    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
      Router.events.off('routeChangeStart', handleRouteChangeStart);
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
