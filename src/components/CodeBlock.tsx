// components/CodeBlock.tsx
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function CodeBlock({
  code,
  language = "javascript",
}: {
  code: string;
  language?: string;
}) {
  return (
    <SyntaxHighlighter language={language} style={oneDark} wrapLines>
      {code.trim()}
    </SyntaxHighlighter>
  );
}
