"use client";

import Giscus from "@giscus/react";
import { useTheme } from "next-themes";

export function GiscusComments() {
  const { theme } = useTheme();

  return (
    <Giscus
      id="comments"
      repo="daniilomello/website"
      repoId="R_kgDOMPIGXg"
      category="Blog"
      categoryId="DIC_kwDOMPIGXs4C1yor"
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={theme === "dark" ? "catppuccin_mocha" : "light"}
      lang="en"
      loading="lazy"
    />
  );
}
