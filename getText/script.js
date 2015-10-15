function getPlainText() {
  var text = "";
  if(typeof window.getSelection != "undefined") {
    text = window.getSelection().toString();
    console.log(text);

    var download = document.getElementById('download');
    download.href = 'data:text/plain;charset:utf-8,' + encodeURIComponent(text);
    var event = new MouseEvent('click');
    download.dispatchEvent(event);

  }
  return text;
}
