// 5.「郵便番号から住所入力するjQueryプラグイン」を参考にして、郵便番号→住所変換で、入力する郵便番号を７桁にまとめるように修正してみましょう。
/*jslint browser:true, devel:true*/
/*global phantom, WebPage*/

var page = new WebPage();
page.onConsoleMessage = function(msg) {
  "use strict";

  console.log(msg);
  phantom.exit(0);
};
page.open(phantom.args[0], function(status) {
  "use strict";

  if (status !== "success") {
    console.log("failed to open file");
    phantom.exit(1);
  }
});
