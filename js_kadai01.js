//1.イベントを学習したときのサンプルで画面のどこをクリックしても「ここをクリック」という文字列「だけ」を赤くするように修正してください。
(function($, window) {
  $(function() {
    // ここに処理を書きます
    //    $('#click_me').on('click', function() {
    $('body').on('click', function() {
      $('p').css({
        'color': 'red'
      });
    });
  });
})(jQuery, window);
