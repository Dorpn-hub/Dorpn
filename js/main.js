/* ==========================================================================
   Dorpn Docs
   (sidebar toggle, copy buttons, TOC scrollspy, FAQ accordion, search)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Mobile sidebar toggle ---------- */
  var toggle = document.querySelector('.menu-toggle');
  var sidebar = document.querySelector('.sidebar');
  var overlay = document.querySelector('.sidebar-overlay');
  if (toggle && sidebar) {
    toggle.addEventListener('click', function () {
      sidebar.classList.toggle('open');
      if (overlay) overlay.classList.toggle('show');
    });
  }
  if (overlay) {
    overlay.addEventListener('click', function () {
      sidebar.classList.remove('open');
      overlay.classList.remove('show');
    });
  }

  /* ---------- Copy-to-clipboard for code blocks ---------- */
  document.querySelectorAll('.code-block').forEach(function (block) {
    var btn = block.querySelector('.copy-btn');
    var codeEl = block.querySelector('pre code');
    if (!btn || !codeEl) return;
    btn.addEventListener('click', function () {
      var text = codeEl.textContent;
      navigator.clipboard.writeText(text).then(function () {
        var original = btn.innerHTML;
        btn.classList.add('copied');
        btn.innerHTML = '<i class="fa-solid fa-check"></i> Copied';
        setTimeout(function () {
          btn.classList.remove('copied');
          btn.innerHTML = original;
        }, 1600);
      });
    });
  });

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var q = item.querySelector('.faq-q');
    if (!q) return;
    q.addEventListener('click', function () {
      item.classList.toggle('open');
    });
  });

  /* ---------- TOC scrollspy ---------- */
  var tocLinks = document.querySelectorAll('.toc-list a');
  if (tocLinks.length) {
    var headings = Array.prototype.map.call(tocLinks, function (a) {
      return document.getElementById(a.getAttribute('href').slice(1));
    }).filter(Boolean);

    var spy = function () {
      var activeIdx = 0;
      var scrollPos = window.scrollY + 120;
      headings.forEach(function (h, i) {
        if (h.offsetTop <= scrollPos) activeIdx = i;
      });
      tocLinks.forEach(function (a) { a.classList.remove('active'); });
      if (tocLinks[activeIdx]) tocLinks[activeIdx].classList.add('active');
    };
    window.addEventListener('scroll', spy, { passive: true });
    spy();
  }

  /* ---------- Search ---------- */
  var input = document.getElementById('doc-search-input');
  var resultsBox = document.getElementById('doc-search-results');
  if (input && resultsBox && window.DORPN_SEARCH_INDEX) {
    var index = window.DORPN_SEARCH_INDEX;

    function renderResults(query) {
      var q = query.trim().toLowerCase();
      if (!q) {
        resultsBox.classList.remove('open');
        resultsBox.innerHTML = '';
        return;
      }
      var matches = index.filter(function (item) {
        return item.title.toLowerCase().indexOf(q) !== -1 ||
          item.crumb.toLowerCase().indexOf(q) !== -1 ||
          (item.keywords && item.keywords.toLowerCase().indexOf(q) !== -1);
      }).slice(0, 8);

      if (!matches.length) {
        resultsBox.innerHTML = '<div class="search-empty">No results for &ldquo;' + query + '&rdquo;</div>';
      } else {
        resultsBox.innerHTML = matches.map(function (m) {
          return '<a href="' + m.url + '">' +
            '<div class="sr-title">' + m.title + '</div>' +
            '<div class="sr-crumb">' + m.crumb + '</div>' +
            '</a>';
        }).join('');
      }
      resultsBox.classList.add('open');
    }

    input.addEventListener('input', function () { renderResults(input.value); });
    input.addEventListener('focus', function () { if (input.value) renderResults(input.value); });
    document.addEventListener('click', function (e) {
      if (!resultsBox.contains(e.target) && e.target !== input) {
        resultsBox.classList.remove('open');
      }
    });
    document.addEventListener('keydown', function (e) {
      if ((e.key === '/' || (e.ctrlKey && e.key === 'k')) && document.activeElement !== input) {
        e.preventDefault();
        input.focus();
      }
      if (e.key === 'Escape') { input.blur(); resultsBox.classList.remove('open'); }
    });
  }
});
