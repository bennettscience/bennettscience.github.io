function makeScript(url, callback) {
  var script = document.createElement('script');
  script.type='text/javascript';
  script.onload = function() {
    callback();
  }
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
}
makeScript("https://rawgit.com/bennettscience/bennettscience.github.io/gh-pages/getText/script.js", function() {
  makePage();
});
