import cn from "clsx";
import Image from "next/image";

type ScreenShot = {
  src: string;
  alt: string;
  caption?: string;
  full?: boolean;
};

export function Screenshot({ src, alt, full, caption }: ScreenShot) {
  return (
    <figure
      className={cn(
        "mt-6 -mb-4 flex flex-col overflow-hidden rounded-xl border dark:border-zinc-800 flex-1 justify-between",
        full ? "bg-white" : "bg-zinc-100"
      )}
    >
      <div className="flex justify-center items-center flex-1">
        <Image
          src={src}
          alt={alt}
          className={cn(
            "w-auto select-none bg-white grow-0",
            full ? "" : "ring-1 ring-gray-200"
          )}
        />
      </div>
      {caption ? (
        <figcaption
          className={cn(
            "flex justify-center border-t mt-0",
            full ? "bg-white" : "bg-zinc-100"
          )}
        >
          <span className="dark:text-black">{caption}</span>
        </figcaption>
      ) : null}
    </figure>
  );
}
