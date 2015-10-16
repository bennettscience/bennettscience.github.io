function makePage(text) {
  if(typeof window.getSelection != "undefined") {
    text = window.getSelection().toString();

    var newPage = window.open("", null, "height=200,width=300,status=yes,menubar=no");
    newPage.document.write("<html><head><script src='script.js'></script></head>");
    newPage.document.write("<body><p>" + text + "</p><button id='download' onclick='getPlainText()'>Download</button><a id='download' download='text.txt'></a></body></html>");
    console.log(text)
  }
}

function getPlainText() {
  var text = "";
  if(typeof window.getSelection != "undefined") {
    text = window.getSelection().toString();

    var download = document.getElementById('download');
    download.href = 'data:text/plain;charset:utf-8,' + encodeURIComponent(text);
    var event = new MouseEvent('click');
    download.dispatchEvent(event);
  }
  return text;
}
