// 1.フォームの最後のサンプルでメールアドレスとパスワードのチェック処理を「関数」で作成し、#loginをクリックしたときに呼び出すように修正してください。
(function($, window) {
  $(function() {
    function check(e) {
      var email = $('#email').val(),
        password = $('#password').val();
      // alert(email);
      // alert(password);
      //リファクタリング
      if (email == '') {
        alert('メールアドレスを入力してください');
      } else if (email.indexOf('@') < 0) {
        alert('メールアドレスには必ず「@」が必要です');
      }
      if (password == '') {
        alert('パスワードを入力してください');
      } else if (password.length < 6) {
        alert('パスワードは6文字以上です');
      }
    });
    $('#login').on('click', check(e)
  });
})(jQuery, window)
