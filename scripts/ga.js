var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-52656037-1']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  // ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  // Change to new way of ga
  ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

(function() {
  var downloadButton = document.getElementById("resume_download");
  downloadButton.onclick = function() {
  	_gaq.push(['_trackEvent', 'Resume', 'Downloaded', 'Resume has been downloaded']);
  };

  var jaDownloadButton = document.getElementById("resume_ja_download");
  jaDownloadButton.onclick = function() {
    _gaq.push(['_trackEvent', 'Resume', 'Downloaded_JA', 'Japanese resume has been downloaded']);
  };
})();
