function makePage(text) {
  var text = "";
  if(typeof window.getSelection != "undefined") {
    text = window.getSelection().toString();

    var newPage = window.open("", null, "height=200,width=300,status=yes,menubar=no");
    newPage.document.write("<head><script type='text/javascript' src='script.js'></script></head><body><a id='download' download='text.txt'></a><div id='copy'><p>" + text + "</p><button id='download' onclick='getPlainText()'>Download</button></body></html>");
    console.log(text)
  }
}

function getPlainText(text) {
    var text = document.getElementById('copy').innerText;
    // console.log(text);
    var download = document.getElementById('download');
    download.href = 'data:text/plain;charset:utf-8,' + encodeURIComponent(text);
    var event = new MouseEvent('click');
    download.dispatchEvent(event);
  return text;
}
