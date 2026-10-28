'use client';

import { getLanguageAttributes, getLanguageClasses } from '@/utils/language-utils';
import { useMemo } from 'react';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export default function MarkdownRenderer({ content, className = '' }: MarkdownRendererProps) {
  const languageAttrs = useMemo(() => getLanguageAttributes(content), [content]);
  const languageClasses = useMemo(() => getLanguageClasses(content), [content]);

  // Simple markdown parsing for our specific format
  const parseMarkdown = (text: string) => {
    if (!text) return '';

    // Split by lines and process each line
    const lines = text.split('\n');
    let result = '';
    let inList = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();

      if (!line) {
        result += '<br />';
        continue;
      }

      // Handle headers
      if (line.startsWith('# ')) {
        result += `<h1 class="text-2xl font-bold mb-4 mt-6">${line.substring(2)}</h1>`;
      } else if (line.startsWith('## ')) {
        result += `<h2 class="text-xl font-semibold mb-3 mt-5">${line.substring(3)}</h2>`;
      } else if (line.startsWith('### ')) {
        result += `<h3 class="text-lg font-medium mb-2 mt-4">${line.substring(4)}</h3>`;
      }
      // Handle bullet points
      else if (line.startsWith('• ')) {
        if (!inList) {
          result += '<ul class="space-y-2 mb-4">';
          inList = true;
        }
        const content = line.substring(2);
        result += `<li class="flex items-start gap-2">${content}</li>`;
      }
      // Regular paragraph
      else {
        if (inList) {
          result += '</ul>';
          inList = false;
        }
        result += `<p class="mb-3 leading-relaxed">${line}</p>`;
      }
    }

    // Close any open list
    if (inList) {
      result += '</ul>';
    }

    return result;
  };

  const parsedContent = useMemo(() => parseMarkdown(content), [content]);

  return (
    <div
      className={`
        prose pbluegray max-w-none
        ${languageClasses}
        ${className}
        markdown-content
        summary-content
      `}
      {...languageAttrs}
      dangerouslySetInnerHTML={{ __html: parsedContent }}
    />
  );
} 