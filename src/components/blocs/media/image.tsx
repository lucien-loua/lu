"use client"

import Image, { ImageProps } from "next/image";
import { useImageUrl, ImageAsset } from "@/hooks/useImageUrl"
import { toBase64 } from "@/lib/base64"


type ImageBlockProps = Omit<ImageProps, "src"> & {
  src: ImageAsset
};

const SHIMMER = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

export const ImageBlock = ({ src, alt, width = 1200, height = 600, ...props }: ImageBlockProps) => {
  const imageUrl = useImageUrl(src)
  const placeholder = toBase64(SHIMMER(Number(width), Number(height)));

  return (
    <figure className="not-prose space-y-2">
      {
        imageUrl &&
        <Image
          src={imageUrl}
          alt={alt}
          width={Number(width)}
          height={Number(height)}
          className="object-cover w-full rounded-lg border relative bg-card p-0.5 ring-1 ring-border ring-inset"
          placeholder={`data:image/svg+xml;base64,${placeholder}`}
          draggable={false}
          loading="lazy"
          onError={(e) => {
            const imgElement = e.currentTarget as HTMLImageElement;
            imgElement.src = placeholder;
          }}
          {...props}
        />
      }

      <figcaption className="text-sm text-muted-foreground italic">{alt}</figcaption>
    </figure>
  )
}

