// function encodeText(text) {
//   var text = document.getElementById('copy').innerText;
//   var download = document.getElementById('download');
//   download.href = decodeURIComponent(escape(text));
//   console.log(text);
//   return text;
// }


function getPlainText(text) {
    var text = document.getElementById('copy').innerText;
    // console.log(text);

    var out = "";
    for (var i=0;i<text.length;i++) {
      if(text.charCodeAt(i) < 0x80) {
        out += text.charAt(i);
      } else {
        var u = "" + text.charCodeAt(i).toString(16);
        out += "\\u" + (u.length === 2 ? "00" + u : u.length === 3 ? "0" + u : u);
      }
    }

    var download = document.getElementById('download');
    download.href = 'data:text/plain;charset:us-ascii,' + encodeURIComponent(out);
    var event = new MouseEvent('click');
    download.dispatchEvent(event);
  return text;
}
