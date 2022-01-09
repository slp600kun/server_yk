$(function () {
  $('.btn').on('click', function(){  // クリックされた時
    $(this).toggleClass('playback'); // クラスを 付与する or 外す
  });
});

