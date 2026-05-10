const SDK_URLS = [
  'https://esm.sh/@specterpq/sdk@0.1.0?bundle',
  'https://esm.sh/@specterpq/sdk@0.1.0',
  'https://cdn.jsdelivr.net/npm/@specterpq/sdk@0.1.0/dist/index.js',
  'https://unpkg.com/@specterpq/sdk@0.1.0/dist/index.js',
];

export async function loadSpecterSdk() {
  let lastError;

  for (const url of SDK_URLS) {
    try {
      return await import(url);
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError;
}
