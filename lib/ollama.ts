import { SUMMARY_SYSTEM_PROMPT } from '@/utils/prompts';

export async function generateSummaryFromOllama(pdfText: string) {
  try {
    const response = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'phi3:mini',
        prompt: `${SUMMARY_SYSTEM_PROMPT}\n\n${pdfText}`,
        stream: false,
        options: {
          temperature: 0.7,
          num_predict: 1500,
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`Ollama error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error('Ollama Error:', error);
    throw error;
  }
}
