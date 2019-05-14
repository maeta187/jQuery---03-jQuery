// 5.「郵便番号から住所入力するjQueryプラグイン」を参考にして、郵便番号→住所変換で、入力する郵便番号を７桁にまとめるように修正してみましょう。
/*jslint browser:true, devel:true*/
/*global phantom, WebPage*/

$( function() {
	$('#btn_postcode2address').jpostal({
		click : '#btn_postcode2address',
		postcode : [
			'#postcode1',
			'#postcode2'
		]
	});
});
