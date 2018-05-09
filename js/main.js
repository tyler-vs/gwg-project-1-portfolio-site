/* 
 * main.js
 */

(function() {
  var currentSrc, oldSrc, imgEl;
  var showPicSrc = function() {
    oldSrc     = currentSrc;
    imgEl      = document.getElementById('picimg');
    currentSrc = imgEl.currentSrc || imgEl.src;

    if (typeof oldSrc === 'undefined' || oldSrc !== currentSrc) {
      // document.getElementById('logger').innerHTML = currentSrc;
      console.log(currentSrc)
    }
  };

  // You may wish to debounce resize if you have performance concerns
  window.addEventListener('resize', showPicSrc);
  window.addEventListener('load', showPicSrc);
})(window);   