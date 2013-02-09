// Check if a new cache is available on page load.
window.addEventListener('load', function(e) {
  window.applicationCache.addEventListener('updateready', function(e) {
    if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
      // New update is ready.
      window.applicationCache.swapCache(); // swap old cache with new one.
      if (confirm('Your experience has been updated. \n Click OK to reload your page')) {
        window.location.reload();
      }
    }
  }, false);
}, false);