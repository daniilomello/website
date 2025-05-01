'use client';

import { Prism as SyntaxHighlighterRaw } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Cast as any to avoid JSX incompatibility issue
const SyntaxHighlighter = SyntaxHighlighterRaw as any;

export default function CodeBlock({
  code,
  language = 'javascript',
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
