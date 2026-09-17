/*
 * Rob Eimers — Persistent AI Embed (Phase 1)
 * The ONE script for every live MiLyfe property.
 * Usage: <script src="https://rob-eimers-gateway.onrender.com/embed.js" data-brand="Your Brand Name" data-accent="#c9922a"></script>
 * Phase 1: floating bubble → opens the live Rob Eimers chat. No cookies. No cross-site tracking. No secrets in client code.
 * Phase 2 (when the governed chat proxy goes live): in-page conversation, RPP visitor profile,
 * disclosed cross-site memory with an explicit consent gate. Never silent. Never fake-independent.
 */
(function () {
  var BRAND = document.currentScript.getAttribute('data-brand') || 'MiLyfe';
  var ACCENT = document.currentScript.getAttribute('data-accent') || '#c9922a';
  var CHAT_URL = 'https://app.base44.com/superagent/69d53353fbde30063e082ae1';

  function init() {
    var wrap = document.createElement('div');
    wrap.id = 'rob-eimers-embed';
    wrap.setAttribute('style',
      'position:fixed;bottom:22px;right:22px;z-index:2147483000;display:flex;align-items:center;gap:10px;' +
      'cursor:pointer;font-family:system-ui,sans-serif;');
    wrap.setAttribute('role', 'button');
    wrap.setAttribute('aria-label', 'Talk to Rob Eimers, the MiLyfe persistent AI');
    wrap.setAttribute('tabindex', '0');

    var bubble = document.createElement('div');
    bubble.setAttribute('style',
      'width:56px;height:56px;border-radius:50%;background:#1c1c1a;border:2px solid ' + ACCENT + ';' +
      'display:flex;align-items:center;justify-content:center;box-shadow:0 6px 18px rgba(0,0,0,.35);transition:transform .15s ease;');
    bubble.setAttribute('id', 'rob-eimers-bubble');
    var label = document.createElement('span');
    label.setAttribute('style', 'color:' + ACCENT + ';font-weight:700;font-size:15px;letter-spacing:.5px;');
    label.textContent = 'AI';
    bubble.appendChild(label);

    var tag = document.createElement('div');
    tag.setAttribute('style',
      'background:#1c1c1a;color:#f5f0e8;font-size:13px;font-weight:600;padding:8px 14px;border-radius:8px;' +
      'border:1px solid rgba(255,255,255,.15);box-shadow:0 4px 12px rgba(0,0,0,.3);');
    tag.textContent = 'Rob Eimers — Persistent AI';

    wrap.appendChild(bubble);
    wrap.appendChild(tag);

    wrap.addEventListener('mouseenter', function () { bubble.style.transform = 'scale(1.08)'; });
    wrap.addEventListener('mouseleave', function () { bubble.style.transform = 'scale(1)'; });
    wrap.addEventListener('click', function () { window.open(CHAT_URL, '_blank', 'noopener'); });
    wrap.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { window.open(CHAT_URL, '_blank', 'noopener'); } });

    document.body.appendChild(wrap);
  }
  if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', init); } else { init(); }
})();
