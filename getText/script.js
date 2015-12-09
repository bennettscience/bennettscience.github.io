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
    var download = document.getElementById('download');
    download.href = 'data:text/plain;charset:us-ascii,' + encodeURIComponent(text);
    var event = new MouseEvent('click');
    download.dispatchEvent(event);
  return text;
}
