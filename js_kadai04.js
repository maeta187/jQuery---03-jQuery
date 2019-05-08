// 4.デートピッカーのサンプルにボタンを追加して、そのボタンを押したときにカレンダー表示されるように修正してみましょう
(function($, window) {
  $(function() {
    // ここに処理を書きます
    $("#date_picker").flatpickr({
      "locale": "ja"
    });
  });
})(jQuery, window);
