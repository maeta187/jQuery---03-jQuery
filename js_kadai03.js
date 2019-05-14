// 3.jQueryによるAjaxはajax()以外にget()やpost()、getJSON()メソッドがあります。今回学習した課題をgetJSON()で書き換えてみましょう。
  $(function() {
    alert('first');
    $('#get_bank_list').on('click', function(e) {
      alert('click');
      var url = 'https://raw.githubusercontent.com/zengin-code/source-data/master/data/banks.json';

      $.getJSON({
        url: url,
        type: 'get'
        // data: {}
      }).done(function(data, status, xhr) {
        alert('done');
        var result = JSON.stringify(data);
        $('#result').val(result);
      }).fail(function(data, status, err) {
        alert('fail');
        var result = JSON.stringify(data);
        $('#result').val(result);
      }).always(function() {
        alert('always');
      });

      alert('under getJSON');
    });
    alert('last');
  });
