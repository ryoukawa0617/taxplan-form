/*
 * 申込みの計測（Google 広告のコンバージョン・GA4）。
 *
 * config.js の GA_ID / ADS_ID が空なら何も読み込まない（今までどおり計測なし）。
 * 申込みの送信が成功したときだけ、app.js が trackApplication(受付番号, 紹介元) を呼ぶ。
 *   - Google 広告：ADS_CONV_SUBMIT のコンバージョンを送る（受付番号を transaction_id にして二重計上を防ぐ）
 *   - GA4：generate_lead イベントを送る（紹介元コードを付ける）
 * LP（/lp/）と同じドメインなので、LP で広告から来た人の申込みもここで計上される。
 */
(function () {
  'use strict';
  var CFG = window.APP_CONFIG || {};
  var ids = [CFG.GA_ID, CFG.ADS_ID].filter(Boolean);

  window.trackApplication = function () {};
  if (!ids.length) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };

  // 同意モード v2。LP と同じ設定（EEA・英国・スイスは既定で拒否）。
  gtag('consent', 'default', {
    ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', analytics_storage: 'denied',
    region: ['GB','CH','NO','IS','LI','AT','BE','BG','HR','CY','CZ','DK','EE','FI','FR','DE','GR','HU','IE',
             'IT','LV','LT','LU','MT','NL','PL','PT','RO','SK','SI','ES','SE']
  });
  gtag('consent', 'default', {
    ad_storage: 'granted', ad_user_data: 'granted', ad_personalization: 'granted', analytics_storage: 'granted'
  });

  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(ids[0]);
  document.head.appendChild(s);

  gtag('js', new Date());
  ids.forEach(function (id) { gtag('config', id); });

  window.trackApplication = function (id, ref) {
    try {
      if (CFG.ADS_CONV_SUBMIT) {
        gtag('event', 'conversion', { send_to: CFG.ADS_CONV_SUBMIT, transaction_id: String(id || '') });
      }
      if (CFG.GA_ID) {
        gtag('event', 'generate_lead', { referral_code: ref || '' });
      }
    } catch (e) { /* 計測に失敗しても申込みには影響させない */ }
  };
})();
