/*
 * 脱退一時金 所得税還付 お申込みフォーム — 画面の動作
 *
 * 依存: config.js（window.APP_CONFIG）、i18n.js（window.I18N / window.I18N_TERMS）
 * 送信: fetch(GAS_ENDPOINT, { method: 'POST', body: JSON.stringify(payload), redirect: 'follow' })
 *       headers は付けない（text/plain になり、CORSのプリフライトが発生しない）。
 */
(function () {
  'use strict';

  var CFG = window.APP_CONFIG || {};
  var I18N = window.I18N || {};
  var TERMS = window.I18N_TERMS || {};

  var LANGS = ['ja', 'en', 'zh', 'ko', 'vi', 'id'];
  var HTML_LANG = { ja: 'ja', en: 'en', zh: 'zh-CN', ko: 'ko', vi: 'vi', id: 'id' };
  var STORAGE_KEY = 'dattai_form_lang';
  var ZIP_API = 'https://zipcloud.ibsnet.co.jp/api/search';
  var ZIP_TIMEOUT_MS = 8000;
  var SUBMIT_TIMEOUT_MS = 60000;
  var DEMO = !CFG.GAS_ENDPOINT;
  var CONTACT_EMAIL = CFG.CONTACT_EMAIL || 'refund-info@east-tax.com';

  // 入力項目（画面の並び順）。type: text(既定) / date / radio / check
  var FIELDS = [
    { key: 'name', required: true },
    { key: 'name_kana' },
    { key: 'birth_date', required: true, type: 'date', check: checkBirthDate },
    { key: 'nationality', required: true },
    { key: 'departure_date', required: true, type: 'date', check: checkDepartureDate },
    { key: 'has_notice', required: true, type: 'radio' },
    { key: 'email', required: true, nfkc: true, check: checkEmail },
    { key: 'email_confirm', required: true, nfkc: true, check: checkEmailConfirm },
    { key: 'phone', required: true, nfkc: true, check: checkPhone },
    { key: 'country', required: true },
    { key: 'address_current', required: true },
    { key: 'jp_postal', required: true, nfkc: true, check: checkPostal },
    { key: 'address_jp', required: true },
    { key: 'bank_name', required: true },
    { key: 'bank_branch', required: true },
    { key: 'swift', nfkc: true, check: checkSwift },
    { key: 'account_number', required: true, nfkc: true },
    { key: 'account_holder', required: true },
    { key: 'agree_east_tax', required: true, type: 'check' },
    { key: 'agree_terms', required: true, type: 'check' }
  ];
  var FIELD_MAP = {};
  FIELDS.forEach(function (f) { FIELD_MAP[f.key] = f; });

  var state = {
    lang: 'ja',
    errors: {},        // key -> 文言キー
    touched: {},
    kanaWarn: false,
    zip: null,         // 'searching' | 'filled' | 'filled_partial' | 'notfound' | 'error' | null
    alert: null,       // { type: 'summary'|'validation'|'network'|'server'|'spam' }
    termsView: 'translation',
    sending: false,
    done: null         // { id, hasNotice }
  };

  var form, submitBtn;

  function $(id) { return document.getElementById(id); }
  function each(list, fn) { Array.prototype.forEach.call(list, fn); }
  function pad2(n) { return (n < 10 ? '0' : '') + n; }

  /* ------------------------------------------------------------------ */
  /* 文言                                                                */
  /* ------------------------------------------------------------------ */
  function raw(key) {
    var dict = I18N[state.lang] || {};
    if (dict[key] != null) return dict[key];
    if (I18N.ja && I18N.ja[key] != null) return I18N.ja[key];
    return key;
  }

  function t(key, vars) {
    return fill(raw(key), vars);
  }

  function fill(s, vars) {
    return String(s).replace(/\{(\w+)\}/g, function (m, k) {
      if (k === 'email') return CONTACT_EMAIL;
      return vars && vars[k] != null ? String(vars[k]) : m;
    });
  }

  // **太字** と {email}（mailtoリンク）を安全にDOMとして組み立てる
  function renderRich(el, key, vars) {
    el.textContent = '';
    raw(key).split(/(\*\*[^*]+\*\*)/).forEach(function (part) {
      if (!part) return;
      if (/^\*\*[^*]+\*\*$/.test(part)) {
        var strong = document.createElement('strong');
        appendInline(strong, part.slice(2, -2), vars);
        el.appendChild(strong);
      } else {
        appendInline(el, part, vars);
      }
    });
  }

  function appendInline(parent, text, vars) {
    text.split(/(\{email\})/).forEach(function (part) {
      if (!part) return;
      if (part === '{email}') {
        var a = document.createElement('a');
        a.href = 'mailto:' + CONTACT_EMAIL;
        a.textContent = CONTACT_EMAIL;
        parent.appendChild(a);
      } else {
        parent.appendChild(document.createTextNode(fill(part, vars)));
      }
    });
  }

  /* ------------------------------------------------------------------ */
  /* 言語の決定と切り替え                                                  */
  /* ------------------------------------------------------------------ */
  function normalizeLang(tag) {
    if (!tag) return null;
    var p = String(tag).toLowerCase().replace(/_/g, '-').split('-')[0];
    if (p === 'zh') return 'zh';
    if (p === 'ko') return 'ko';
    if (p === 'vi') return 'vi';
    if (p === 'id' || p === 'in' || p === 'ms') return 'id';
    if (p === 'ja') return 'ja';
    if (p === 'en') return 'en';
    return null;
  }

  function storageGet() {
    try { return window.localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }
  function storageSet(v) {
    try { window.localStorage.setItem(STORAGE_KEY, v); } catch (e) { /* 保存できなくても動作は続ける */ }
  }

  // ?lang= → 前回の選択（localStorage）→ navigator.languages → en
  function detectLang() {
    try {
      var q = normalizeLang(new URLSearchParams(window.location.search).get('lang'));
      if (q) return q;
    } catch (e) { /* URLSearchParams 非対応など */ }
    var saved = storageGet();
    if (saved && LANGS.indexOf(saved) !== -1) return saved;
    var list = (navigator.languages && navigator.languages.length)
      ? navigator.languages
      : [navigator.language || navigator.userLanguage];
    for (var i = 0; i < list.length; i++) {
      var n = normalizeLang(list[i]);
      if (n) return n;
    }
    return 'en';
  }

  function syncUrl(lang) {
    try {
      var u = new URL(window.location.href);
      if (u.searchParams.has('lang')) {
        u.searchParams.set('lang', lang);
        window.history.replaceState(null, '', u.toString());
      }
    } catch (e) { /* 何もしない */ }
  }

  function applyLang(lang, opts) {
    if (LANGS.indexOf(lang) === -1) lang = 'en';
    state.lang = lang;
    document.documentElement.lang = HTML_LANG[lang];
    document.title = t('doc_title');

    each(document.querySelectorAll('[data-i18n]'), function (el) {
      el.textContent = t(el.getAttribute('data-i18n'));
    });
    each(document.querySelectorAll('[data-i18n-aria]'), function (el) {
      el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria')));
    });
    renderRichAll();

    each(document.querySelectorAll('.lang-bar [data-lang]'), function (btn) {
      btn.setAttribute('aria-pressed', btn.getAttribute('data-lang') === lang ? 'true' : 'false');
    });

    // 入力値には触れず、表示中のメッセージだけを新しい言語で描き直す
    FIELDS.forEach(function (f) { renderFieldMessages(f.key); });
    renderKanaWarn();
    renderZip();
    renderAlert();
    renderTerms();
    renderSubmit();
    if (state.done) renderDone();

    if (!opts || !opts.initial) {
      storageSet(lang);
      syncUrl(lang);
    }
  }

  function renderRichAll() {
    var vars = { id: state.done ? state.done.id : '' };
    each(document.querySelectorAll('[data-i18n-rich]'), function (el) {
      renderRich(el, el.getAttribute('data-i18n-rich'), vars);
    });
  }

  /* ------------------------------------------------------------------ */
  /* 値の取得・正規化                                                      */
  /* ------------------------------------------------------------------ */
  function nfkc(s) {
    s = String(s == null ? '' : s);
    return s.normalize ? s.normalize('NFKC') : s;
  }

  function controlsOf(key) {
    if (FIELD_MAP[key] && FIELD_MAP[key].type === 'radio') {
      return Array.prototype.slice.call(form.querySelectorAll('input[name="' + key + '"]'));
    }
    var el = $('f-' + key);
    return el ? [el] : [];
  }

  function focusTargetOf(key) {
    var list = controlsOf(key);
    for (var i = 0; i < list.length; i++) if (list[i].checked) return list[i];
    return list[0] || null;
  }

  function normalizeDate(v) {
    v = nfkc(v).trim().replace(/[\/.年月]/g, '-').replace(/日$/, '');
    var m = /^(\d{4})-(\d{1,2})-(\d{1,2})$/.exec(v);
    return m ? m[1] + '-' + pad2(+m[2]) + '-' + pad2(+m[3]) : v;
  }

  function postalDigits(v) {
    return nfkc(v).replace(/[〒\s\-‐‑‒–—―−ー]/g, '');
  }

  function normalizeSwift(v) {
    return nfkc(v).replace(/\s+/g, '').toUpperCase();
  }

  // 検証・送信に使う値（画面の値は書き換えない）
  function valueOf(key) {
    var f = FIELD_MAP[key];
    if (f.type === 'check') return !!($('f-' + key) && $('f-' + key).checked);
    if (f.type === 'radio') {
      var c = form.querySelector('input[name="' + key + '"]:checked');
      return c ? c.value : '';
    }
    var el = $('f-' + key);
    var v = el ? el.value : '';
    if (f.type === 'date') return normalizeDate(v);
    if (key === 'swift') return normalizeSwift(v);
    if (f.nfkc) v = nfkc(v);
    v = v.trim();
    if (key === 'name' || key === 'account_holder') v = v.replace(/\s+/g, ' ');
    return v;
  }

  // フォーカスが外れたときに、全角数字などを画面上でも半角にそろえる
  function writeBackNormalized(key) {
    var f = FIELD_MAP[key];
    if (!f || f.type === 'check' || f.type === 'radio') return;
    var el = $('f-' + key);
    if (!el || el.type === 'date') return;
    var v = valueOf(key);
    if (el.value !== v) el.value = v;
  }

  /* ------------------------------------------------------------------ */
  /* 入力チェック                                                          */
  /* ------------------------------------------------------------------ */
  function parseISODate(s) {
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s);
    if (!m) return false;
    var y = +m[1], mo = +m[2], d = +m[3];
    var dt = new Date(Date.UTC(y, mo - 1, d));
    return dt.getUTCFullYear() === y && dt.getUTCMonth() === mo - 1 && dt.getUTCDate() === d;
  }

  function todayISO(offsetDays) {
    var d = new Date();
    d.setDate(d.getDate() + (offsetDays || 0));
    return d.getFullYear() + '-' + pad2(d.getMonth() + 1) + '-' + pad2(d.getDate());
  }

  function checkBirthDate(v) {
    if (!parseISODate(v) || v < '1900-01-01') return 'e_date_format';
    if (v > todayISO(0)) return 'e_date_future';
    return null;
  }

  function checkDepartureDate(v) {
    if (!parseISODate(v) || v < '1950-01-01') return 'e_date_format';
    if (v > todayISO(1)) return 'e_date_future'; // 時差を考えて1日だけ余裕を持たせる
    var b = valueOf('birth_date');
    if (parseISODate(b) && v <= b) return 'e_date_order';
    return null;
  }

  function checkEmail(v) {
    if (v.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return 'e_email';
    return null;
  }

  function checkEmailConfirm(v) {
    return v.toLowerCase() === valueOf('email').toLowerCase() ? null : 'e_email_mismatch';
  }

  function checkPhone(v) {
    if (!/^[+0-9\s\-().]+$/.test(v)) return 'e_phone';
    var digits = v.replace(/\D/g, '').length;
    return digits >= 6 && digits <= 20 ? null : 'e_phone';
  }

  function checkPostal(v) {
    return /^\d{7}$/.test(postalDigits(v)) ? null : 'e_postal';
  }

  function checkSwift(v) {
    return /^[A-Z0-9]{8}([A-Z0-9]{3})?$/.test(v) ? null : 'e_swift';
  }

  function validateField(key) {
    var f = FIELD_MAP[key];
    var v = valueOf(key);
    if (f.type === 'check') return v || !f.required ? null : 'e_required_check';
    if (f.type === 'radio') return v || !f.required ? null : 'e_required_choice';
    if (f.type === 'date') {
      var el = $('f-' + key);
      if (el && el.validity && el.validity.badInput) return 'e_date_format';
    }
    if (!v) return f.required ? 'e_required' : null;
    return f.check ? f.check(v) : null;
  }

  function isKanaOk(v) {
    return !v || /^[゠-ヿ　 ]+$/.test(v);
  }

  /* ------------------------------------------------------------------ */
  /* エラー表示                                                            */
  /* ------------------------------------------------------------------ */
  function setError(key, code) {
    if (code) state.errors[key] = code; else delete state.errors[key];
    renderFieldMessages(key);
  }

  function renderFieldMessages(key) {
    var code = state.errors[key];
    var errEl = $('err-' + key);
    if (errEl) {
      errEl.textContent = code ? t(code) : '';
      errEl.hidden = !code;
    }
    controlsOf(key).forEach(function (el) {
      if (code) el.setAttribute('aria-invalid', 'true'); else el.removeAttribute('aria-invalid');
      updateDescribedBy(el, key);
    });
  }

  function updateDescribedBy(el, key) {
    var ids = [];
    var base = el.getAttribute('data-base-describedby');
    if (base) ids.push(base);
    if (state.errors[key]) ids.push('err-' + key);
    if (key === 'name_kana' && state.kanaWarn) ids.push('warn-name_kana');
    if (ids.length) el.setAttribute('aria-describedby', ids.join(' '));
    else el.removeAttribute('aria-describedby');
  }

  function updateKanaWarn() {
    state.kanaWarn = !isKanaOk(valueOf('name_kana'));
    renderKanaWarn();
  }

  function renderKanaWarn() {
    var w = $('warn-name_kana');
    if (!w) return;
    w.textContent = state.kanaWarn ? t('w_name_kana') : '';
    w.hidden = !state.kanaWarn;
    var el = $('f-name_kana');
    if (el) updateDescribedBy(el, 'name_kana');
  }

  function focusField(key) {
    var el = focusTargetOf(key);
    if (!el) return;
    el.focus();
    if (el.scrollIntoView) {
      try { el.scrollIntoView({ block: 'center' }); } catch (e) { el.scrollIntoView(); }
    }
  }

  /* ------------------------------------------------------------------ */
  /* 送信ボタン下の通知（エラーのまとめ・通信エラーなど）                          */
  /* ------------------------------------------------------------------ */
  function setAlert(a) {
    state.alert = a;
    renderAlert();
  }

  function renderAlert() {
    var box = $('form-alert');
    if (!box) return;
    box.textContent = '';
    var a = state.alert;
    if (!a) return;

    var keys = FIELDS.filter(function (f) { return state.errors[f.key]; }).map(function (f) { return f.key; });

    if (a.type === 'summary' || a.type === 'validation') {
      if (!keys.length) { state.alert = null; return; }
      var p = document.createElement('p');
      p.textContent = a.type === 'summary' ? t('e_summary', { n: keys.length }) : t('e_validation');
      box.appendChild(p);
      var ul = document.createElement('ul');
      keys.forEach(function (key) {
        var li = document.createElement('li');
        var link = document.createElement('a');
        var target = focusTargetOf(key);
        link.href = '#' + (target ? target.id : 'f-' + key);
        link.textContent = t('f_' + key) + ': ' + t(state.errors[key]);
        link.addEventListener('click', function (ev) { ev.preventDefault(); focusField(key); });
        li.appendChild(link);
        ul.appendChild(li);
      });
      box.appendChild(ul);
      return;
    }

    var msg = document.createElement('p');
    if (a.type === 'spam') {
      renderRich(msg, 'e_spam');
      box.appendChild(msg);
      return;
    }
    msg.textContent = t(a.type === 'network' ? 'e_network' : 'e_server');
    box.appendChild(msg);
    var contact = document.createElement('p');
    renderRich(contact, 'e_contact');
    box.appendChild(contact);
  }

  /* ------------------------------------------------------------------ */
  /* 郵便番号 → 住所（zipcloud / JSONP）                                   */
  /* ------------------------------------------------------------------ */
  var zipCache = {};
  var zipSeq = 0;
  var zipLastQueried = '';
  var lastAutoFilled = '';

  function jsonp(url, timeoutMs) {
    return new Promise(function (resolve, reject) {
      var cb = '__zipcloud_cb_' + Date.now() + '_' + Math.floor(Math.random() * 1e6);
      var script = document.createElement('script');
      var timer = setTimeout(function () { finish(); reject(new Error('timeout')); }, timeoutMs);
      function finish() {
        clearTimeout(timer);
        window[cb] = function () {}; // 遅れて返ってきても例外にしない
        if (script.parentNode) script.parentNode.removeChild(script);
      }
      window[cb] = function (data) { finish(); resolve(data); };
      script.onerror = function () { finish(); reject(new Error('load error')); };
      script.src = url + (url.indexOf('?') === -1 ? '?' : '&') + 'callback=' + cb;
      document.head.appendChild(script);
    });
  }

  function onPostalInput() {
    var digits = postalDigits($('f-jp_postal').value);
    if (!/^\d{7}$/.test(digits)) {
      zipLastQueried = '';
      if (state.zip === 'searching') { zipSeq++; setZip(null); }
      return;
    }
    if (digits === zipLastQueried) return;
    zipLastQueried = digits;
    lookupZip(digits);
  }

  function lookupZip(zip) {
    var seq = ++zipSeq;
    setZip('searching');
    var p = zipCache[zip]
      ? Promise.resolve(zipCache[zip])
      : jsonp(ZIP_API + '?zipcode=' + zip, ZIP_TIMEOUT_MS).then(function (data) {
        if (data && data.status === 200) zipCache[zip] = data;
        return data;
      });
    p.then(function (data) {
      if (seq !== zipSeq) return; // 古い応答は無視
      if (!data || data.status !== 200) { setZip('error'); return; }
      var results = data.results;
      if (!results || !results.length) { setZip('notfound'); return; }
      var first = results[0];
      var sameTown = results.every(function (r) { return r.address3 === first.address3; });
      var addr = (first.address1 || '') + (first.address2 || '') + (sameTown ? (first.address3 || '') : '');
      var el = $('f-address_jp');
      var cur = el.value.trim();
      // 空欄か、前回の自動入力のまま（利用者が手を加えていない）ときだけ入れる
      if (!cur || cur === lastAutoFilled) {
        el.value = addr;
        lastAutoFilled = addr;
        if (state.errors.address_jp) setError('address_jp', validateField('address_jp'));
        setZip(sameTown ? 'filled' : 'filled_partial');
      } else {
        setZip(null);
      }
    }, function () {
      if (seq !== zipSeq) return;
      setZip('error');
    });
  }

  function setZip(code) {
    state.zip = code;
    renderZip();
  }

  function renderZip() {
    var el = $('zip-status');
    if (!el) return;
    var code = state.zip;
    el.hidden = !code;
    el.textContent = code ? t('zip_' + code) : '';
    el.className = 'zip-status' + (code === 'filled' || code === 'filled_partial' ? ' ok' : (code === 'notfound' || code === 'error' ? ' ng' : ''));
  }

  /* ------------------------------------------------------------------ */
  /* 利用規約                                                              */
  /* ------------------------------------------------------------------ */
  function renderTerms() {
    var body = $('terms-body');
    var tools = $('terms-tools');
    if (!body) return;
    var hasTranslation = state.lang !== 'ja' && !!TERMS[state.lang];
    tools.hidden = !hasTranslation;
    var view = hasTranslation ? state.termsView : 'original';
    var code = view === 'original' ? 'ja' : state.lang;
    var d = TERMS[code] || TERMS.ja;

    each(tools.querySelectorAll('[data-terms-view]'), function (btn) {
      btn.setAttribute('aria-pressed', btn.getAttribute('data-terms-view') === view ? 'true' : 'false');
    });

    body.textContent = '';
    if (!d) return;
    body.setAttribute('lang', HTML_LANG[code]);
    add(body, 'h3', d.title);
    if (d.note) add(body, 'p', d.note, 'terms-note');
    add(body, 'p', d.preamble);
    d.articles.forEach(function (art) {
      add(body, 'h4', art.h);
      art.lines.forEach(function (line) {
        var cls = /^\d+\.\s/.test(line) ? 'para-num' : (/^\(\d+\)/.test(line) ? 'item' : '');
        add(body, 'p', line, cls);
      });
    });
  }

  function add(parent, tag, text, cls) {
    var el = document.createElement(tag);
    el.textContent = text;
    if (cls) el.className = cls;
    parent.appendChild(el);
    return el;
  }

  /* ------------------------------------------------------------------ */
  /* 送信                                                                  */
  /* ------------------------------------------------------------------ */
  function buildPayload() {
    return {
      name: valueOf('name'),
      name_kana: valueOf('name_kana'),
      birth_date: valueOf('birth_date'),
      nationality: valueOf('nationality'),
      country: valueOf('country'),
      address_current: valueOf('address_current'),
      jp_postal: postalDigits(valueOf('jp_postal')),
      address_jp: valueOf('address_jp'),
      phone: valueOf('phone'),
      email: valueOf('email'),
      departure_date: valueOf('departure_date'),
      has_notice: valueOf('has_notice'),
      bank_name: valueOf('bank_name'),
      bank_branch: valueOf('bank_branch'),
      swift: valueOf('swift'),
      account_number: valueOf('account_number'),
      account_holder: valueOf('account_holder'),
      agree_east_tax: valueOf('agree_east_tax') === true,
      agree_terms: valueOf('agree_terms') === true,
      website: ($('f-website') && $('f-website').value) || '',
      lang: state.lang,
      submitted_at_client: new Date().toISOString()
    };
  }

  function postToGas(payload) {
    var ctrl = typeof AbortController === 'function' ? new AbortController() : null;
    var timer = ctrl ? setTimeout(function () { ctrl.abort(); }, SUBMIT_TIMEOUT_MS) : null;
    var opts = { method: 'POST', body: JSON.stringify(payload), redirect: 'follow' };
    if (ctrl) opts.signal = ctrl.signal;
    function done() { if (timer) clearTimeout(timer); }
    return fetch(CFG.GAS_ENDPOINT, opts).then(function (res) {
      return res.text().then(function (text) {
        done();
        var data = null;
        try { data = JSON.parse(text); } catch (e) { data = null; }
        if (!data || typeof data !== 'object') return { ok: false, error: 'server' };
        return data;
      });
    }, function (err) {
      done();
      throw err;
    });
  }

  function demoSend(payload) {
    if (window.console) {
      console.info('[DEMO MODE] GAS_ENDPOINT が空のため送信しません。送信予定のデータ:');
      console.info(JSON.stringify(payload, null, 2));
    }
    return new Promise(function (resolve) {
      setTimeout(function () {
        var d = new Date();
        var id = 'DEMO-' + d.getFullYear() + pad2(d.getMonth() + 1) + pad2(d.getDate()) + '-' +
          String(Math.floor(Math.random() * 10000) + 10000).slice(1);
        resolve({ ok: true, id: id });
      }, 700);
    });
  }

  function setSending(on) {
    state.sending = on;
    renderSubmit();
  }

  function renderSubmit() {
    if (!submitBtn) return;
    submitBtn.disabled = state.sending;
    submitBtn.textContent = t(state.sending ? 'btn_sending' : 'btn_submit');
    form.setAttribute('aria-busy', state.sending ? 'true' : 'false');
    $('sending-note').hidden = !state.sending;
  }

  function focusAlert() {
    var box = $('form-alert');
    if (box && box.firstChild) box.focus();
  }

  function onSubmit(ev) {
    ev.preventDefault();
    if (state.sending || state.done) return;

    FIELDS.forEach(function (f) { writeBackNormalized(f.key); });
    var firstBad = null;
    FIELDS.forEach(function (f) {
      state.touched[f.key] = true;
      var code = validateField(f.key);
      setError(f.key, code);
      if (code && !firstBad) firstBad = f.key;
    });
    updateKanaWarn();

    if (firstBad) {
      setAlert({ type: 'summary' });
      focusField(firstBad);
      return;
    }

    setAlert(null);
    var payload = buildPayload();
    setSending(true);

    (DEMO ? demoSend(payload) : postToGas(payload)).then(function (res) {
      if (res && res.ok === true && res.id != null && res.id !== '') {
        showDone(String(res.id), payload.has_notice);
      } else {
        handleFailure(res || {});
      }
    }, function (err) {
      if (window.console) console.error('送信エラー', err);
      setAlert({ type: 'network' });
      focusAlert();
    }).then(function () {
      if (!state.done) setSending(false);
    });
  }

  function handleFailure(res) {
    if (res.error === 'validation') {
      var fields = Array.isArray(res.fields) ? res.fields : [];
      fields.forEach(function (key) {
        if (FIELD_MAP[key] && !state.errors[key]) setError(key, 'e_server_field');
      });
      setAlert({ type: 'validation' });
      var first = null;
      FIELDS.forEach(function (f) { if (!first && state.errors[f.key]) first = f.key; });
      if (first) focusField(first); else { setAlert({ type: 'server' }); focusAlert(); }
      return;
    }
    setAlert({ type: res.error === 'spam' ? 'spam' : 'server' });
    focusAlert();
  }

  /* ------------------------------------------------------------------ */
  /* 完了画面                                                              */
  /* ------------------------------------------------------------------ */
  function showDone(id, hasNotice) {
    state.done = { id: id, hasNotice: hasNotice };
    state.errors = {};
    state.alert = null;
    setSending(false);
    submitBtn.disabled = true;
    form.reset(); // 共有端末に個人情報を残さない
    lastAutoFilled = '';
    zipLastQueried = '';
    state.zip = null;
    $('form-view').hidden = true;
    $('done').hidden = false;
    renderRichAll();
    renderDone();
    window.scrollTo(0, 0);
    $('done').focus();
  }

  function renderDone() {
    var d = state.done;
    if (!d) return;
    $('done-id').textContent = d.id;
    $('done-notice-no').hidden = d.hasNotice !== 'no';
    $('done-demo').hidden = !DEMO;
  }

  /* ------------------------------------------------------------------ */
  /* 初期化                                                                */
  /* ------------------------------------------------------------------ */
  function keyOfTarget(el) {
    if (!el || !el.id) return null;
    if (el.name && FIELD_MAP[el.name]) return el.name;
    var k = el.id.replace(/^f-/, '');
    return FIELD_MAP[k] ? k : null;
  }

  function init() {
    form = $('apply-form');
    submitBtn = $('submit-btn');
    if (!form || !submitBtn) return;

    each(form.querySelectorAll('[aria-describedby]'), function (el) {
      el.setAttribute('data-base-describedby', el.getAttribute('aria-describedby'));
    });
    $('f-birth_date').max = todayISO(0);
    $('f-departure_date').max = todayISO(0);
    $('demo-banner').hidden = !DEMO;

    each(document.querySelectorAll('.lang-bar [data-lang]'), function (btn) {
      btn.addEventListener('click', function () { applyLang(btn.getAttribute('data-lang')); });
    });
    each(document.querySelectorAll('[data-terms-view]'), function (btn) {
      btn.addEventListener('click', function () {
        state.termsView = btn.getAttribute('data-terms-view');
        renderTerms();
      });
    });

    // 入力中: 一度エラーになった項目は、直ったらすぐ消す
    form.addEventListener('input', function (ev) {
      var key = keyOfTarget(ev.target);
      if (!key) return;
      if (key === 'name_kana') updateKanaWarn();
      if (key === 'jp_postal') onPostalInput();
      if (state.errors[key]) setError(key, validateField(key));
      if (key === 'email' && state.touched.email_confirm && valueOf('email_confirm')) {
        setError('email_confirm', validateField('email_confirm'));
      }
      if (key === 'birth_date' && state.touched.departure_date && valueOf('departure_date')) {
        setError('departure_date', validateField('departure_date'));
      }
      if (state.alert && (state.alert.type === 'summary' || state.alert.type === 'validation')) renderAlert();
    });

    // 選択肢・チェックボックス・日付
    form.addEventListener('change', function (ev) {
      var key = keyOfTarget(ev.target);
      if (!key) return;
      var f = FIELD_MAP[key];
      if (f.type === 'radio' || f.type === 'check' || f.type === 'date') {
        state.touched[key] = true;
        setError(key, validateField(key));
        if (key === 'birth_date' && state.touched.departure_date && valueOf('departure_date')) {
          setError('departure_date', validateField('departure_date'));
        }
        if (state.alert && (state.alert.type === 'summary' || state.alert.type === 'validation')) renderAlert();
      }
    });

    // フォーカスが外れたとき: 入力がある項目だけ形式をチェック（空欄の必須エラーは送信時に出す）
    form.addEventListener('focusout', function (ev) {
      var key = keyOfTarget(ev.target);
      if (!key) return;
      var f = FIELD_MAP[key];
      if (f.type === 'radio' || f.type === 'check') return;
      writeBackNormalized(key);
      if (key === 'name_kana') { updateKanaWarn(); return; }
      if (valueOf(key) || state.errors[key]) {
        state.touched[key] = true;
        setError(key, validateField(key));
      }
    });

    form.addEventListener('submit', onSubmit);

    applyLang(detectLang(), { initial: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
