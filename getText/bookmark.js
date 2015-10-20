function makePage(text) {
  var text = "";
  if(typeof window.getSelection != "undefined") {
    text = window.getSelection().toString();

    var newPage = window.open("", null, 'width=560,height=360,status=yes,menubar=no');
    newPage.document.write("<head><link rel='stylesheet' type='text/css' href='http://rawgit.com/bennettscience/bennettscience.github.io/master/getText/style.css'/><script type='text/javascript' src='https://rawgit.com/bennettscience/bennettscience.github.io/gh-pages/getText/script.js'></script></head><body><a id='download' download='text.txt'></a><div id='copy'><p>" + text + "</p></div><div id='interact'><button id='download' onclick='getPlainText()'>Download</button></div></body></html>");
    console.log(text)
  }
}
makePage();
