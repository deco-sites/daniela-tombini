import type { Image as DecoImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface Props {
  /**
   * @title Post image.
   */
  photo?: DecoImage;
  /**
   * @title Post body.
   */
  post: string;
  /**
   * @title Publish date.
   * @format datetime
   */
  datetime: string;
  /**
   * @title Post title.
   */
  title: string;
}

export default function LatestPosts({ title, photo }: Props) {
  return (
    <div>
      {photo && (
        <Image
          src={photo}
          alt={`${title} image`}
          height={500}
          width={500}
          class="rounded"
        />
      )}
      <h1 class="font-bold">{title}</h1>
      <p>This is an example section</p>
    </div>
  );
}
