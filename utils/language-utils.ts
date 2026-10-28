// Language detection and text processing utilities

/**
 * Detects if text contains Arabic characters
 */
export function containsArabic(text: string): boolean {
  const arabicRegex = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/;
  return arabicRegex.test(text);
}

/**
 * Detects the dominant language in a text
 */
export function detectLanguage(text: string): 'ar' | 'en' | 'mixed' {
  if (!text || text.trim().length === 0) return 'en';
  
  const arabicChars = (text.match(/[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/g) || []).length;
  const englishChars = (text.match(/[a-zA-Z]/g) || []).length;
  const totalChars = arabicChars + englishChars;
  
  if (totalChars === 0) return 'en';
  
  const arabicPercentage = arabicChars / totalChars;
  
  if (arabicPercentage > 0.5) return 'ar';
  if (arabicPercentage > 0.1) return 'mixed';
  return 'en';
}

/**
 * Gets appropriate CSS classes based on text language
 */
export function getLanguageClasses(text: string): string {
  const language = detectLanguage(text);
  
  switch (language) {
    case 'ar':
      return 'arabic-text';
    case 'mixed':
      return 'mixed-content';
    default:
      return '';
  }
}

/**
 * Gets appropriate HTML attributes for text display
 */
export function getLanguageAttributes(text: string): { lang?: string; dir?: string } {
  const language = detectLanguage(text);
  
  switch (language) {
    case 'ar':
      return { lang: 'ar', dir: 'rtl' };
    case 'mixed':
      return { dir: 'auto' };
    default:
      return { lang: 'en', dir: 'ltr' };
  }
}

/**
 * Cleans and normalizes Arabic text for better display
 */
export function normalizeArabicText(text: string): string {
  if (!text) return '';
  
  return text
    // Remove or normalize diacritics for better readability (optional)
    .replace(/[\u064B-\u0652]/g, '') // Remove most Arabic diacritics
    // Normalize Arabic characters
    .replace(/\u0671/g, '\u0627') // Alef with wasla to regular Alef
    .replace(/[\u0622\u0623\u0625]/g, '\u0627') // Various Alefs to regular Alef
    .replace(/\u0629/g, '\u0647') // Teh marbuta to Heh
    .replace(/\u064A/g, '\u064A') // Yeh variations
    // Clean up whitespace
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Checks if a filename contains Arabic characters
 */
export function isArabicFilename(filename: string): boolean {
  return containsArabic(filename);
}

/**
 * Formats filename for display with proper language support
 */
export function formatFilenameForDisplay(filename: string): {
  displayName: string;
  attributes: { dir?: string; class?: string };
} {
  const isArabic = isArabicFilename(filename);
  
  return {
    displayName: filename,
    attributes: isArabic 
      ? { dir: 'rtl', class: 'file-name-display' }
      : { dir: 'ltr', class: 'file-name-display' }
  };
} 