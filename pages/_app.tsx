import { HomeBanner } from "@/components";
import { useRenderOnHome } from "@/hooks";
import { AppProps } from "next/app";

import "@/styles/globals.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const isOnHome = useRenderOnHome();

  // When on home page, show the footer at the bottom
  useEffect(() => {
    const footer = document.querySelector('#__next div[dir="ltr"] > footer');
    if (isOnHome) {
      footer?.classList.add("home-footer");
    }

    return () => {
      if (isOnHome) {
        footer?.classList.remove("home-footer");
      }
    };
  }, [isOnHome]);

  return (
    <>
      {isOnHome ? <HomeBanner /> : null}
      <Component {...pageProps} />
    </>
  );
}
