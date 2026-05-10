(() => {
  const mountId = 'specter-sdk-playground-root';

  async function boot() {
    const mount = document.getElementById(mountId);
    if (!mount || mount.dataset.playgroundBooted === 'true') return;

    mount.dataset.playgroundBooted = 'true';

    try {
      const module = await import('/playground/src/main.js');
      await module.initPlayground();
    } catch (error) {
      console.error('Failed to boot SPECTER playground', error);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot, { once: true });
  } else {
    boot();
  }
})();
