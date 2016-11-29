// ==UserScript==
// @name       YouTube Hide recommended for you videos
// @namespace  
// @version    0.1
// @description  Hides the recommended for you videos on your stream 
// @include      *://youtube.com/*
// @include      *://*.youtube.com/*
// @copyright  2016, uchood
// ==/UserScript==
!(function() {
  window.setTimeout(function check() {
    console.log("DEBUG");
    if (document.getElementsByClassName('stat view-count')) {
      main();
    }
    //window.setTimeout(check, 250);
  }, 500);

  function main() {
    var a = document.getElementsByClassName('stat view-count');
    for(var i = 0, len = a.length; i < len; i++) {
      console.log("DEBUG RECOMMENDED FOR YOU" + a[i].textContent);
      if (a[i].innerHTML.indexOf("Recommended") != -1) {
        console.log("DEBUG elemnts recommneded found");
        a[i].parentNode.parentNode.parentNode.style.display = 'none';
      }
    }
  }
})();