/// <reference path="../.astro/types.d.ts" />

/// <reference types="astro/client" />

declare module '*.md' {
    export const frontmatter: {
      title: string;
      date: string;
      image?: string;
    };
    const content: string;
    export { content };
  }
  