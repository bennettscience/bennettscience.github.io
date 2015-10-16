function makePage(text) {
  var text = "";
  if(typeof window.getSelection != "undefined") {
    text = window.getSelection().toString();

    var newPage = window.open("", null, "height=200,width=300,status=yes,menubar=no");
    newPage.document.write("<body><a id='download' download='text.txt'></a><p id='copy'>" + text + "</p><button id='download' onclick='getPlainText()'>Download</button><scipt type='text/javascript' src='script.js' defer></script></body></html>");
    console.log(text)
  }
}

function getPlainText(copy) {
  var text = "";
  if(typeof window.getSelection != "undefined") {
    text = window.getElementById('copy').innerContent;

    var download = document.getElementById('download');
    download.href = 'data:text/plain;charset:utf-8,' + encodeURIComponent(text);
    var event = new MouseEvent('click');
    download.dispatchEvent(event);
  }
  return text;
}
