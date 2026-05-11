(function() {
  var p = ['jose', 'fuentes', 'phd'];
  var d = ['gmail', 'com'];
  var email = p.join('.') + '@' + d.join('.');

  var els = document.querySelectorAll('.obfuscated-email');
  els.forEach(function(el) {
    el.setAttribute('href', 'mailto:' + email);
    if (el.dataset.show === 'true') {
      el.textContent = email;
    }
  });
})();
