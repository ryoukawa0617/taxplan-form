/*
 * 公開前に書き換える設定値。
 * GAS_ENDPOINT : GAS Webアプリの /exec URL。空文字のときはデモモード（送信しない）。
 */
window.APP_CONFIG = {
  GAS_ENDPOINT: 'https://script.google.com/macros/s/AKfycbzF9LsCCUUEhkBalH_KZvFAvyIvSSZvRBd5nkEQTh0EMEottTcVTlpYKmHb2LUx0ub00w/exec',
  OFFICE_NAME: 'EAST TAX会計事務所',
  CONTACT_EMAIL: 'info@east-tax.com',

  // 申込みの計測（track.js）。空なら計測タグを読み込まない。
  // LP（lp/ja・lp/en の LP = {...}）の GA_ID / ADS_ID と同じ値を入れること。
  GA_ID: '',            // 例 'G-XXXXXXXXXX'
  ADS_ID: '',           // 例 'AW-123456789'
  ADS_CONV_SUBMIT: ''   // 「申込み完了」コンバージョン。例 'AW-123456789/AbCdEfGhIj'
};
