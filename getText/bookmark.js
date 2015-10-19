function makePage(text) {
  var text = "";
  if(typeof window.getSelection != "undefined") {
    text = window.getSelection().toString();

    var newPage = window.open("", null, "height=200,width=600,status=yes,menubar=no");
    newPage.document.write("<head><link rel='stylesheet' type='text/css' href='http://rawgit.com/bennettscience/bennettscience.github.io/master/getText/style.css'/><script type='text/javascript' src='https://rawgit.com/bennettscience/bennettscience.github.io/gh-pages/getText/script.js'></script></head><body><a id='download' download='text.txt'></a><div id='text'><p>" + text + "</p></div><div id='interact'><button id='download' onclick='getPlainText()'>Download</button></div></body></html>");
    console.log(text)
  }
}
makePage();
