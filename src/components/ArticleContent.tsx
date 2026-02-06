"use client";

import { useEffect, useRef } from "react";

export function ArticleContent({ html }: { html: string }) {
  const articleRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const article = articleRef.current;
    if (!article) return;

    const figures = article.querySelectorAll(
      "figure[data-rehype-pretty-code-figure]"
    );

    figures.forEach((figure) => {
      if (figure.querySelector(".copy-code-button")) return;

      const pre = figure.querySelector("pre");
      if (!pre) return;

      const button = document.createElement("button");
      button.className = "copy-code-button";
      button.setAttribute("aria-label", "Copy code to clipboard");
      button.innerHTML = `
        <svg class="copy-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
        <svg class="check-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      `;

      button.addEventListener("click", async () => {
        const code = pre.querySelector("code");
        if (!code) return;

        const text = code.innerText;

        try {
          await navigator.clipboard.writeText(text);
          button.classList.add("copied");
          setTimeout(() => {
            button.classList.remove("copied");
          }, 2000);
        } catch {
          // Fallback for older browsers
          const textarea = document.createElement("textarea");
          textarea.value = text;
          textarea.style.position = "fixed";
          textarea.style.opacity = "0";
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand("copy");
          document.body.removeChild(textarea);
          button.classList.add("copied");
          setTimeout(() => {
            button.classList.remove("copied");
          }, 2000);
        }
      });

      figure.classList.add("code-block-has-copy");
      figure.appendChild(button);
    });
  }, [html]);

  return (
    <article
      ref={articleRef}
      className="prose dark:prose-invert max-w-none"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
