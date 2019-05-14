//1.イベントを学習したときのサンプルで画面のどこをクリックしても「ここをクリック」という文字列「だけ」を赤くするように修正してください。
  $(function() {
    // ここに処理を書きます
    //    $('#click_me').on('click', function() {
    $('body').on('click', function() {
      $('#click_me').css({
        'color': 'red'
      });
    });
  });
