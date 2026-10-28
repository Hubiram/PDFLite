'use client';

import { getLanguageAttributes, getLanguageClasses, formatFilenameForDisplay } from '@/utils/language-utils';
import { useMemo } from 'react';

interface TextDisplayProps {
  content: string;
  className?: string;
  filename?: string;
}

export default function TextDisplay({ content, className = '', filename }: TextDisplayProps) {
  const languageAttrs = useMemo(() => getLanguageAttributes(content), [content]);
  const languageClasses = useMemo(() => getLanguageClasses(content), [content]);
  
  const formattedFilename = useMemo(() => {
    return filename ? formatFilenameForDisplay(filename) : null;
  }, [filename]);

  return (
    <div className={`space-y-4 ${className}`}>
      {filename && (
        <div 
          className={`text-sm text-gray-600 font-medium ${formattedFilename?.attributes.class}`}
          {...formattedFilename?.attributes}
        >
          File: {formattedFilename?.displayName}
        </div>
      )}
      
      <div
        className={`
          pdf-content
          whitespace-pre-wrap
          break-words
          leading-relaxed
          ${languageClasses}
        `}
        {...languageAttrs}
      >
        {content}
      </div>
    </div>
  );
} 