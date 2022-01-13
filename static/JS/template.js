$(function () {
  elem.addEventListener("mouseover", function (event) {
    // マウスオーバー時の処理
    event.target.style.backgroundColor = "gray";
    setTimeout(function () {
      event.target.style.backgroundColor = "";
    }, 500);
    }, false);
});

