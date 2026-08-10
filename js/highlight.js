/* ==========================================================================
   Lightweight syntax highlighter for Dorpn code blocks + shell snippets.
   ========================================================================== */

(function () {
  function esc(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  var DORPN_RE = new RegExp(
    [
      '(#[^\\n]*)',                                                     // 1 comment
      '("(?:\\\\.|[^"\\\\])*")',                                        // 2 string
      '(\\b\\d[\\d_]*(?:\\.[\\d_]+)?(?:[eE][+-]?\\d+)?\\b)',            // 3 number
      '(\\b(?:tag|Const|func|if|elif|else|loop|keep|halt|skip|return|and|or|not|in|fld)\\b)', // 4 keyword
      '(\\b(?:true|false)\\b)',                                         // 5 boolean
      '(\\b(?:Int32|Float32|Int|Float|String|Bool)\\b)',// 6 type
      '(\\b[A-Za-z_]\\w*\\b(?=\\s*\\())',                               // 7 function/call name
      '(\\*\\*|->|==|!=|<=|>=|[+\\-*/%=<>:])',                          // 8 operator
      '(&)'                                                             // 9 stray ampersand
    ].join('|'),
    'g'
  );

  function highlightDorpn(code) {
    return code.replace(DORPN_RE, function (m, cmt, str, num, kw, bool, type, fn, op) {
      if (cmt) return '<span class="tok-com">' + esc(cmt) + '</span>';
      if (str) return '<span class="tok-str">' + esc(str) + '</span>';
      if (num) return '<span class="tok-num">' + num + '</span>';
      if (kw) return '<span class="tok-kw">' + kw + '</span>';
      if (bool) return '<span class="tok-bool">' + bool + '</span>';
      if (type) return '<span class="tok-type">' + type + '</span>';
      if (fn) return '<span class="tok-fn">' + fn + '</span>';
      if (op) return '<span class="tok-op">' + esc(op) + '</span>';
      return '&amp;';
    });
  }

  var BASH_RE = /(#[^\n]*)|(--[a-zA-Z-]+|(?<=\s|^)-[a-zA-Z])|(\bdorpn\b)|(\bgcc\b|\bsudo\b|\bapt\b|\becho\b|\bchmod\b|\bmv\b|\brm\b)/g;

  function highlightBash(code) {
    return esc(code).replace(/(#[^\n]*)|(--[a-zA-Z-]+|(?:^|\s)-[a-zA-Z](?=\s|$))|(\bdorpn\b)|(\bgcc\b|\bsudo\b|\bapt\b|\becho\b|\bchmod\b|\bmv\b|\brm\b|\bxcode-select\b)/g,
      function (m, cmt, flag, dorpn, tool) {
        if (cmt) return '<span class="tok-com">' + cmt + '</span>';
        if (flag) return '<span class="tok-op">' + flag + '</span>';
        if (dorpn) return '<span class="tok-fn">' + dorpn + '</span>';
        if (tool) return '<span class="tok-kw">' + tool + '</span>';
        return m;
      });
  }

  function run() {
    document.querySelectorAll('pre code.lang-dorpn').forEach(function (el) {
      el.innerHTML = highlightDorpn(el.textContent);
    });
    document.querySelectorAll('pre code.lang-bash').forEach(function (el) {
      el.innerHTML = highlightBash(el.textContent);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})();
