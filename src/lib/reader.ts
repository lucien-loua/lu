import keystaticConfig from "@keystatic.config";
import { createReader } from "@keystatic/core/reader";
import { createGitHubReader } from "@keystatic/core/reader/github";
import { cache } from 'react';
import { cookies, draftMode } from 'next/headers';
import { GITHUB_APP } from "./contant";

export const localReader = createReader(process.cwd(), keystaticConfig);

export const reader = cache(
  async () => {
  try {
    const draft = await draftMode();
    if (draft.isEnabled) {
      const cookieStore = await cookies();
      const branch = cookieStore.get('ks-branch')?.value;
      const token = cookieStore.get(GITHUB_APP)?.value;
      if (branch && token) {
        return createGitHubReader(keystaticConfig, {
          repo: 'lucien-loua/lu',
          ref: branch,
          token: token,
        });
      }
    }
  } catch (error) {
    console.error("Reader error during request scope check:", error);
  }
  return localReader;
});
