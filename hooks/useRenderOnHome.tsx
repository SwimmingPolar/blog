import { useRouter } from "next/router";

export const useRenderOnHome = () => {
  const pathname = useRouter().pathname;
  // Show the banner only on the home page
  const shouldRenderBanner =
    // It will match / , /index.ko , /index.en
    pathname === "/" || /^\/index\.\w\w/.test(pathname);

  return shouldRenderBanner;
};
