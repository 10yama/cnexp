// このファイル（script.js）も、ページとは別のリクエストでサーバから届いています。
document.addEventListener('DOMContentLoaded', function () {
  var el = document.getElementById('js-message');
  if (!el) return;
  var now = new Date();
  el.textContent = 'この文章は script.js が書き込みました（' +
    now.toLocaleTimeString('ja-JP') + ' に実行）';
});
