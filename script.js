// Copy-to-clipboard for the contact address.
(function () {
  var btn = document.getElementById("copy");
  var addr = document.getElementById("addr");
  if (!btn || !addr) return;

  btn.addEventListener("click", function () {
    var done = function () {
      btn.textContent = "Copied";
      setTimeout(function () { btn.textContent = "Copy address"; }, 1600);
    };
    var fallback = function () {
      var range = document.createRange();
      range.selectNodeContents(addr);
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      btn.textContent = "Selected";
    };
    try {
      navigator.clipboard.writeText(addr.textContent).then(done, fallback);
    } catch (e) {
      fallback();
    }
  });
})();
