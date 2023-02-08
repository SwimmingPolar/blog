import { useRenderOnHome } from "@/hooks";
import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./index.module.css";
import carrotSvg from "/public/images/carrot.svg";
import { throttle } from "lodash";

export const Logo = () => {
  const boxRef = useRef<HTMLImageElement>(null);
  const carrotRef = useRef<HTMLImageElement>(null);
  const isOnHome = useRenderOnHome();

  useEffect(() => {
    // Scroll event bound position controlling often makes
    // the element flicker up and down. Throttle somehow reduces
    // this flickering side effect.
    const handleScroll = throttle(() => {
      if (!carrotRef.current) {
        return;
      }

      const container = document.querySelector(".nextra-nav-container");
      // Default value to 1 to indicate that the element is not sticked
      const containerTop = container?.getBoundingClientRect().top ?? 1;
      const isSticked = containerTop === 0;

      if (isOnHome && isSticked) {
        carrotRef.current.classList.add(styles["small-carrot"]);
      } else {
        carrotRef.current.classList.remove(styles["small-carrot"]);
      }
    });

    if (isOnHome) {
      ["scroll", "resize"].forEach((event) => {
        window.addEventListener(event, handleScroll);
      });
    }
    return () => {
      ["scroll", "resize"].forEach((event) => {
        window.removeEventListener(event, handleScroll);
      });
    };
  }, [isOnHome]);

  return (
    <div ref={boxRef} className={styles.box}>
      <h3 className={styles["logo-text"]}>DONG HEON</h3>
      <Image
        src={carrotSvg}
        alt="carrot"
        className={
          (isOnHome ? styles["large-carrot"] : styles["small-carrot"]) +
          " carrot"
        }
        ref={carrotRef}
      />
    </div>
  );
};
