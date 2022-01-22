const dropZone = document.getElementById("dragDropArea");
const outContent = document.getElementById("outContent");
const maxFileSize = 8 * 1024 * 1024;
const maxTextLength = 1024 * 1024;

dropZone.ondrop = function (evt) {
  evt.stopPropagation();
  evt.preventDefault();

  let files = evt.dataTransfer.files; /* Dropされたファイルたちのハンドル */

  let f = files[0];

  /*前のファイルを消す */
  if (document.getElementById("audio0") != null) {
    var clone = audiolist.cloneNode(false);
    audiolist.parentNode.replaceChild(clone, audiolist);
  }
  /* 複数同時挿入可(最大10個) */
  for (i = 0; i < 9; i++) {
    let fi = files[i];
    if (fi.size <= maxFileSize) {
      if (fi.type == "audio/wav") {
        let audiotag = '<audio id="audio' + String(i) + '"></audio>';
        $("#audiolist").append(audiotag);
        const audio = document.getElementById("audio" + String(i));
        let fileReader = new FileReader(); /* FileReaderの実体を1つ用意する */
        fileReader.onload = function (evt) {
          // const content = evt.target.result;
          const content = evt.target.result;
          let src =
            "data:audio/wav;base64," + audioDataToBase64(content, fi.type);
          audio.setAttribute("src", src);
          audio.setAttribute("controls", "");
        };
        fileReader.readAsArrayBuffer(fi);
      }
    } else {
      alert("size over.");
    }
  }
};

dropZone.ondragover = function (evt) {
  evt.stopPropagation();
  evt.preventDefault();
  evt.dataTransfer.dropEffect = "copy"; // Explicitly show this is a copy.
};

function audioDataToBase64(content, mimeType) {
  let tmpbuf1 = new Uint8Array(content);
  //tmpbuf1 = String.fromCharCode(...tmpbuf1); // スプレッド構文で stack over flow が起こる模様・・

  /// Base64変換を小分けにする from https://pisuke-code.com/js-soln-of-maximum-call-stack/
  const APPLY_MAX = 1024;
  let encodedStr = "";
  for (let i = 0; i < tmpbuf1.length; i += APPLY_MAX) {
    encodedStr += String.fromCharCode.apply(
      null,
      tmpbuf1.slice(i, i + APPLY_MAX)
    );
  }
  tmpbuf1 = encodedStr;

  tmpbuf1 = btoa(tmpbuf1);
  return tmpbuf1;
}
