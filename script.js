(function () {
  'use strict';

  const epochDisplay = document.getElementById('epoch-display');

  if (!epochDisplay) {
    console.warn('[ProfileCard] Could not find #epoch-display element.');
    return;
  }
  
  function updateTime() {
    const now = Date.now();
    epochDisplay.textContent = now;
    epochDisplay.setAttribute('datetime', new Date(now).toISOString());
  }

  // Run immediately on load, then every 1000ms
  updateTime();
  setInterval(updateTime, 1000);
})();