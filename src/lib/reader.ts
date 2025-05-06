import keystaticConfig from "@keystatic.config";
import { createReader } from "@keystatic/core/reader";
import { cache } from "react";


export const reader = cache(
  () => createReader(process.cwd(), keystaticConfig)
);