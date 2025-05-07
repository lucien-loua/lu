import { useMemo, useEffect } from "react";

export type ImageAsset = {
  filename: string;
  data?: Uint8Array;
  extension?: string
} | string | null;

export function useImageUrl(image: ImageAsset): string | null {
  const imageUrl = useMemo(() => {
    if (!image) return null;
    if (typeof image === "string") return image;
    if ("data" in image && image.data) {
      const blob = new Blob([image.data], { type: image.extension ? `image/${image.extension}` : undefined });
      return URL.createObjectURL(blob);
    }
    if ("filename" in image) {
      return image.filename;
    }
    return null;
  }, [image]);

  useEffect(() => {
    let url: string | null = null;
    if (image && typeof image !== "string" && "data" in image && image.data) {
      url = URL.createObjectURL(new Blob([image.data], { type: image.extension ? `image/${image.extension}` : undefined }));
    }
    return () => {
      if (url) URL.revokeObjectURL(url);
    };
  }, [image]);

  return imageUrl;
} 