import { useRenderOnHome } from "@/hooks";
import { FC, useEffect, useRef } from "react";
import styles from "./index.module.css";

export const HomeBanner: FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const isRendered = useRenderOnHome();

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) {
        return;
      }

      if (isRendered) {
        imageRef.current.style.transform = `translateY(${document.documentElement.scrollTop}px)`;
      }
    };

    if (isRendered) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isRendered]);

  return (
    <div className={styles.wrapper + " home-banner"}>
      <div className={styles.box}>
        <div className={styles.image} ref={imageRef} />
      </div>
    </div>
  );
};
