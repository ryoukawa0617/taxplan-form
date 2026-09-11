/*
 * 画面文言（6言語）と利用規約の翻訳。
 *
 * - I18N[lang][key]   : 画面の文言。{email} {n} {id} はプレースホルダー。**太字** は強調表示。
 * - I18N_TERMS[lang]  : 利用規約。lines の先頭の「1.」「(1)」が項・号の番号。
 *                       日本語版（ja）が正文。ほかの言語は参考訳。
 * - キーの揃い具合は tools/check_i18n.js で確認する。
 */
(function (root) {
  'use strict';

  var I18N = {};
  var TERMS = {};

  /* ===================================================================== */
  /* 日本語                                                                 */
  /* ===================================================================== */
  I18N.ja = {
    doc_title: '脱退一時金 所得税還付 お申込みフォーム',
    office_name: 'EAST TAX会計事務所',
    h1: '脱退一時金 所得税還付 お申込みフォーム',
    lead: '厚生年金の脱退一時金を受け取るときには、所得税が差し引かれて（源泉徴収されて）います。還付申告（退職所得の選択課税）をすると、ほとんどの場合、この税金が戻ってきます。EAST TAX会計事務所が、この手続きを代行します。',
    lead_docs: '入力は5分ほどで終わります。書類は送信後に郵送していただくため、このフォームでのファイル添付はありません。',
    lead_lang: '日本語、または英語（ローマ字）で入力してください。',
    secure_note: '入力内容は暗号化された通信（HTTPS）で送信されます。個人情報は利用規約第3条に従って取り扱います。',
    lang_nav_label: '言語 / Language',
    demo_banner: 'デモモード：送信先が設定されていないため、入力内容は送信されません（テスト用）。',
    required_note: '「必須」の項目は必ず入力してください。',
    badge_required: '必須',
    badge_optional: '任意',

    sec_personal: '本人情報',
    sec_contact: '連絡先・住所',
    sec_bank: '還付金の受取口座',
    sec_bank_intro: '還付金を送金する、ご本人名義の海外の銀行口座を入力してください。',
    sec_agree: '同意事項',

    f_name: '氏名',
    h_name: 'パスポートと同じローマ字で入力してください（例：NGUYEN VAN AN）。',
    f_name_kana: '氏名のカタカナ読み',
    h_name_kana: 'わかれば入力してください（例：グエン ヴァン アン）。',
    w_name_kana: '全角カタカナ以外の文字が含まれています。このままでも送信できます。',
    f_birth_date: '生年月日',
    f_nationality: '国籍',
    h_nationality: '例：Vietnam',
    f_country: '現在住んでいる国',
    h_country: '例：Vietnam',
    f_address_current: '現住所（日本国外）',
    h_address_current: '番地・建物名・部屋番号・郵便番号まで、省略せずに入力してください。',

    f_jp_postal: '日本での最終住所の郵便番号',
    h_jp_postal: '数字7桁（例：104-0033）。日本で最後に住んでいた住所の郵便番号です。',
    h_jp_postal_link: 'わからない場合は、日本郵便の郵便番号検索で調べられます',
    zip_searching: '住所を検索しています…',
    zip_filled: '郵便番号から住所を入力しました。番地・建物名・部屋番号を追記してください。',
    zip_filled_partial: '郵便番号から住所の一部を入力しました。町名・番地・建物名を追記してください。',
    zip_notfound: 'この郵便番号の住所が見つかりませんでした。番号を確認するか、住所を直接入力してください。',
    zip_error: '住所の自動入力を利用できませんでした。住所を直接入力してください。',
    f_address_jp: '日本での最終住所',
    h_address_jp: '日本で最後に住んでいた住所です（在留カードに書かれていた住所など）。日本語でもローマ字でもかまいません。',

    f_phone: '電話番号',
    f_phone_country: '国番号',
    f_phone_number: '番号',
    opt_phone_country: '国を選んでください',
    e_phone_plus: '国番号は「国番号」の欄で選び、ここには番号だけを入力してください。',
    phone_preview: '送信される電話番号：{phone}',
    h_phone: '国番号を選んでから、番号を入力してください。先頭の0は不要です（入力しても自動で取り除きます）。',
    f_email: 'メールアドレス',
    h_email: '受付確認メールと、今後のご連絡をこのアドレスにお送りします。',
    f_email_confirm: 'メールアドレス（確認用）',
    h_email_confirm: '確認のため、もう一度入力してください。',
    f_departure_date: '日本を出国した日',

    f_has_notice: '脱退一時金の支給決定通知書をお持ちですか？',
    h_has_notice: '日本年金機構から届く「脱退一時金支給決定通知書」です。',
    opt_notice_yes: 'はい、持っています',
    opt_notice_no: 'いいえ、まだ持っていません',

    f_bank_name: '銀行名',
    h_bank_name: '例：Vietcombank',
    f_bank_branch: '支店名',
    f_swift: 'SWIFT/BICコード',
    h_swift: '英数字8桁または11桁です。わからない場合は銀行に確認してください。送金に必要です。',
    f_account_number: '口座番号',
    f_account_holder: '口座名義',
    h_account_holder: '銀行に登録されているとおりに入力してください（通常はローマ字）。',

    f_agree_east_tax: '所得税還付申請手続きに関して、EAST TAX会計事務所に依頼します。',
    f_agree_terms: '利用規約に同意します。',
    terms_intro: '送信する前に、利用規約をお読みください。',
    terms_toggle: '利用規約を読む',
    terms_view_translation: '日本語',
    terms_view_original: '日本語（原文）',
    terms_region_label: '利用規約の全文',
    new_tab: '（新しいタブで開きます）',

    btn_submit: '送信する',
    btn_sending: '送信中です…',
    sending_note: '送信には30秒ほどかかることがあります。画面を閉じずにお待ちください。',

    e_required: '入力してください。',
    e_required_choice: 'いずれかを選んでください。',
    e_required_check: 'チェックを入れてください（同意が必要です）。',
    e_date_format: '正しい日付を入力してください（例：1995-04-01）。',
    e_date_future: '今日より後の日付は入力できません。',
    e_date_order: '生年月日より後の日付を入力してください。',
    e_postal: '郵便番号は数字7桁で入力してください（例：104-0033）。',
    e_email: 'メールアドレスの形式が正しくありません。',
    e_email_mismatch: 'メールアドレスが一致しません。',
    e_phone: '番号は数字4〜15桁で入力してください（「-」や空白は使えます）。',
    e_swift: 'SWIFT/BICコードは英数字8桁または11桁です。',
    e_server_field: 'この項目の内容を確認してください。',
    e_summary: '入力内容に{n}件の問題があります。',
    e_validation: '入力内容に問題があり、受け付けられませんでした。メッセージが表示された項目を確認してください。',
    e_network: '通信エラーのため送信できませんでした。インターネット接続を確認して、もう一度「送信する」を押してください。入力内容は残っています。（受付確認メールが届いている場合は受付が完了しています。再送しないでください。）',
    e_server: 'サーバーで問題が発生したため、受け付けられませんでした。しばらくしてから、もう一度「送信する」を押してください。',
    e_spam: '送信を受け付けられませんでした。お手数ですが、{email} までメールでご連絡ください。',
    e_contact: '何度試してもうまくいかない場合は、{email} までご連絡ください。',

    done_title: 'お申込みを受け付けました',
    done_id_label: '受付番号',
    done_id_note: 'この番号は、書類の郵送やお問い合わせのときに必要です。スクリーンショットなどで控えておいてください。',
    done_mail: 'ご入力のメールアドレスに、受付確認メールをお送りしました。',
    done_mail_trouble: 'メールが届かない場合は、迷惑メールフォルダを確認してください。それでも見つからない場合は、{email} までご連絡ください。',
    done_post_title: '次に、書類を郵送してください',
    done_notice_no: '支給決定通知書がまだ届いていない方は、通知書が届いてから、まとめて郵送してください。',
    done_post_intro: '次の書類を、下記の郵送先までお送りください。',
    done_doc1: '① 脱退一時金の支給決定通知書の**原本**',
    done_doc2: '② 身分証明書（パスポート）の**コピー**',
    done_memo: '封筒の中に、**受付番号（{id}）を書いたメモ**を入れてください。',
    done_address_title: '郵送先',
    done_address_ja_label: '日本語表記',
    done_address_en_label: '英語表記',
    done_contact: 'ご不明な点は、受付番号を添えて {email} までお問い合わせください。',
    done_demo: 'デモモードのため、実際には送信されていません。確認メールも送られません。受付番号はダミーです。',
    footer_contact: 'お問い合わせ：{email}'
  };

  TERMS.ja = {
    title: '利用規約',
    note: '',
    preamble: 'この利用規約(以下、「本規約」といいます。)は、EAST TAX会計事務所及び社会保険労務士事務所East Labor(以下、「運営者」といいます。)がこのウェブサイト上で提供するサービス(以下、「本サービス」といいます)の利用条件を定めるものです。登録ユーザーの皆さま(以下、「ユーザー」といいます。)には、本規約に従って、本サービスをご利用いただきます。',
    articles: [
      { h: '第1条(適用)', lines: [
        '本規約は、ユーザーと運営者との間の本サービスの利用に関わる一切の関係に適用されるものとします。'
      ] },
      { h: '第2条(利用登録)', lines: [
        '1. 登録希望者が運営者の定める方法によって利用登録を申請し、運営者がこれを承認することによって、利用登録が完了するものとします。',
        '2. 運営者は、利用登録の申請者に以下の事由があると判断した場合、利用登録の申請を承認しないことがあり、その理由については一切の開示義務を負わないものとします。',
        '(1)利用登録の申請に際して虚偽の事項を届け出た場合',
        '(2)本規約に違反したことがある者からの申請である場合',
        '(3)その他、当社が利用登録を相当でないと判断した場合'
      ] },
      { h: '第3条 (個人情報の取り扱い)', lines: [
        '運営者は、本サービスに基づき、年金還付申請及び所得税還付申請を目的として、ユーザーの個人情報を利用いたします。法令に基づく以外に、ユーザーの個人情報を第三者に提供することは致しません。'
      ] },
      { h: '第4条(利用料金および支払方法)', lines: [
        'ユーザーは、本サービス利用の対価として、運営者が別途定め、本ウェブサイトに表示する利用料金を、運営者が指定する方法により支払うものとします。'
      ] },
      { h: '第5条（業務契約関係）', lines: [
        'ユーザーは、脱退一時金の申請手続きに関して、社会保険労務士事務所East Laborへ依頼すること、また脱退一時金に係る所得税還付手続きに関して、EAST TAX会計事務所へ依頼することで、各々の業務につき契約が成立することにつき同意する。'
      ] },
      { h: '第6条(禁止事項)', lines: [
        'ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。',
        '(1)法令または公序良俗に違反する行為',
        '(2)犯罪行為に関連する行為',
        '(3)運営者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為',
        '(4)運営者のサービスの運営を妨害するおそれのある行為',
        '(5)運営者のユーザーに関する個人情報等を収集または蓄積する行為',
        '(6)運営者のユーザーに成りすます行為',
        '(7)運営者のサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為',
        '(8)その他、運営者が不適切と判断する行為'
      ] },
      { h: '第7条(本サービスの提供の停止等)', lines: [
        '1. 運営者は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。',
        '(1)本サービスにかかるコンピュータシステムの保守点検または更新を行う場合',
        '(2)地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合',
        '(3)コンピュータまたは通信回線等が事故により停止した場合',
        '(4)その他、当社が本サービスの提供が困難と判断した場合',
        '2. 当方は、本サービスの提供の停止または中断により、ユーザーまたは第三者が被ったいかなる不利益または損害について、理由を問わず一切の責任を負わないものとします。'
      ] },
      { h: '第8条(利用制限および登録抹消)', lines: [
        '1. 運営者は、以下の場合には、事前の通知なく、ユーザーに対して、本サービスの全部もしくは一部の利用を制限し、またはユーザーとしての登録を抹消することができるものとします。',
        '(1)本規約のいずれかの条項に違反した場合',
        '(2)登録事項に虚偽の事実があることが判明した場合',
        '(3)その他、当方が本サービスの利用を適当でないと判断した場合',
        '2. 運営者は、本条に基づき当方が行った行為によりユーザーに生じた損害について、一切の責任を負いません。'
      ] },
      { h: '第9条(免責事項)', lines: [
        '1. 運営者の債務不履行責任は、運営者の故意または重過失によらない場合には免責されるものとします。',
        '2. 本サービスにおける年金還付申請又は所得税還付申請において、法定申請期限から2週間までの時期に各々の申請に必要な書類が全て具備されておらず、法定申請期限までに申請がなされなかった場合には、その責任を当方は負いません。',
        '3. 運営者は、本サービスに関して、ユーザーと他のユーザーまたは第三者との間において生じた取引、連絡または紛争等について一切責任を負いません。'
      ] },
      { h: '第10条(利用規約の変更)', lines: [
        '運営者は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。'
      ] },
      { h: '第11条(通知または連絡)', lines: [
        'ユーザーと運営者との間の通知または連絡は、運営者の定める方法によって行うものとします。'
      ] },
      { h: '第12条(権利義務の譲渡の禁止)', lines: [
        'ユーザーは、運営者の書面による事前の承諾なく、利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し、または担保に供することはできません。'
      ] },
      { h: '第13条(一般条項)', lines: [
        '1. 本規約の解釈にあたっては、日本法を準拠法とします。',
        '2. 本サービスに関して紛争が生じた場合には、東京地方裁判所を専属的合意管轄とします。'
      ] }
    ]
  };

  /* ===================================================================== */
  /* English                                                                */
  /* ===================================================================== */
  I18N.en = {
    doc_title: 'Tax Refund Application for Lump-sum Withdrawal Payments',
    office_name: 'EAST TAX Accounting Office',
    h1: 'Tax Refund Application for Lump-sum Withdrawal Payments',
    lead: 'When you receive the Lump-sum Withdrawal Payment from the Employees\' Pension Insurance, income tax is withheld from it. By filing a tax refund return (elective taxation of retirement income), you will get this tax back in most cases. EAST TAX Accounting Office will handle this procedure for you.',
    lead_docs: 'This form takes about 5 minutes. You do not need to upload any files: you will send your documents by post after submitting.',
    lead_lang: 'Please fill in the form in English (Roman letters) or Japanese.',
    secure_note: 'Your information is sent over an encrypted connection (HTTPS). Personal information is handled in accordance with Article 3 of the Terms of Service.',
    lang_nav_label: 'Language / 言語',
    demo_banner: 'Demo mode: no destination is set, so your information will not be sent (for testing only).',
    required_note: 'Fields marked "Required" must be filled in.',
    badge_required: 'Required',
    badge_optional: 'Optional',

    sec_personal: 'Personal information',
    sec_contact: 'Contact details and addresses',
    sec_bank: 'Bank account for your refund',
    sec_bank_intro: 'Enter a bank account outside Japan in your own name. The refund will be sent to this account.',
    sec_agree: 'Agreements',

    f_name: 'Full name',
    h_name: 'In Roman letters, exactly as on your passport (e.g. NGUYEN VAN AN).',
    f_name_kana: 'Name in Katakana',
    h_name_kana: 'Only if you know it (e.g. グエン ヴァン アン).',
    w_name_kana: 'This contains characters other than full-width Katakana. You can still submit the form.',
    f_birth_date: 'Date of birth',
    f_nationality: 'Nationality',
    h_nationality: 'e.g. Vietnam',
    f_country: 'Country you currently live in',
    h_country: 'e.g. Vietnam',
    f_address_current: 'Current address (outside Japan)',
    h_address_current: 'Please write the full address, including house number, building, room number and postal code.',

    f_jp_postal: 'Postal code of your last address in Japan',
    h_jp_postal: '7 digits (e.g. 104-0033). The postal code of the last place you lived in Japan.',
    h_jp_postal_link: 'If you do not know it, you can look it up on the Japan Post postal code search (Japanese page)',
    zip_searching: 'Looking up the address…',
    zip_filled: 'The address was filled in from the postal code. Please add the house number, building name and room number.',
    zip_filled_partial: 'Part of the address was filled in from the postal code. Please add the rest (town, house number, building).',
    zip_notfound: 'No address was found for this postal code. Please check the number, or type the address yourself.',
    zip_error: 'Automatic address lookup is not available. Please type the address yourself.',
    f_address_jp: 'Your last address in Japan',
    h_address_jp: 'The last address where you lived in Japan (for example, the address on your residence card). Japanese or Roman letters are both fine.',

    f_phone: 'Phone number',
    f_phone_country: 'Country code',
    f_phone_number: 'Number',
    opt_phone_country: 'Select a country',
    e_phone_plus: 'Please choose the country code in the "Country code" box and enter only the number here.',
    phone_preview: 'Your number will be sent as: {phone}',
    h_phone: 'Choose your country code, then enter your number. You do not need the first 0 (if you type it, it will be removed automatically).',
    f_email: 'Email address',
    h_email: 'We will send a confirmation email and all future messages to this address.',
    f_email_confirm: 'Email address (again)',
    h_email_confirm: 'Please enter the same email address again to confirm.',
    f_departure_date: 'Date you left Japan',

    f_has_notice: 'Do you have the Notice of Payment Decision for your Lump-sum Withdrawal Payment?',
    h_has_notice: 'This is the notice “脱退一時金支給決定通知書” sent to you by the Japan Pension Service.',
    opt_notice_yes: 'Yes, I have it',
    opt_notice_no: 'No, not yet',

    f_bank_name: 'Bank name',
    h_bank_name: 'e.g. Vietcombank',
    f_bank_branch: 'Branch name',
    f_swift: 'SWIFT/BIC code',
    h_swift: '8 or 11 letters and numbers. If you do not know it, please ask your bank. It is needed for the transfer.',
    f_account_number: 'Account number',
    f_account_holder: 'Account holder name',
    h_account_holder: 'Exactly as registered with your bank (usually in Roman letters).',

    f_agree_east_tax: 'I request EAST TAX Accounting Office to handle the income tax refund procedure for me.',
    f_agree_terms: 'I agree to the Terms of Service.',
    terms_intro: 'Please read the Terms of Service before submitting.',
    terms_toggle: 'Read the Terms of Service',
    terms_view_translation: 'English (reference translation)',
    terms_view_original: 'Japanese original (日本語)',
    terms_region_label: 'Full text of the Terms of Service',
    new_tab: '(opens in a new tab)',

    btn_submit: 'Submit',
    btn_sending: 'Sending…',
    sending_note: 'Sending may take up to about 30 seconds. Please do not close this page.',

    e_required: 'Please fill in this field.',
    e_required_choice: 'Please choose one.',
    e_required_check: 'Please tick this box (your agreement is required).',
    e_date_format: 'Please enter a valid date (e.g. 1995-04-01).',
    e_date_future: 'The date cannot be later than today.',
    e_date_order: 'The date must be after your date of birth.',
    e_postal: 'Please enter the postal code as 7 digits (e.g. 104-0033).',
    e_email: 'This email address does not look correct.',
    e_email_mismatch: 'The email addresses do not match.',
    e_phone: 'Please enter the number with 4 to 15 digits (you may use "-" and spaces).',
    e_swift: 'A SWIFT/BIC code has 8 or 11 letters and numbers.',
    e_server_field: 'Please check this field.',
    e_summary: 'There are {n} problems with your answers.',
    e_validation: 'Your application could not be accepted because some answers need to be corrected. Please check the fields with messages.',
    e_network: 'Your application could not be sent because of a connection error. Please check your internet connection and press "Submit" again. Your answers have been kept. (If you have already received a confirmation email, your application was received. Please do not send it again.)',
    e_server: 'Your application could not be accepted because of a problem on our server. Please wait a while and press "Submit" again.',
    e_spam: 'Your application could not be accepted. We are sorry for the trouble; please contact us by email at {email}.',
    e_contact: 'If this keeps happening, please contact us at {email}.',

    done_title: 'Your application has been received',
    done_id_label: 'Reference number',
    done_id_note: 'You will need this number when you send your documents or contact us. Please keep a record of it (for example, take a screenshot).',
    done_mail: 'We have sent a confirmation email to the address you entered.',
    done_mail_trouble: 'If you cannot find the email, please check your spam (junk) folder. If it is not there either, please contact us at {email}.',
    done_post_title: 'Next, please send your documents by post',
    done_notice_no: 'If you have not received the Notice of Payment Decision yet, please wait until it arrives, and then send all the documents together.',
    done_post_intro: 'Please send the following documents to the address below.',
    done_doc1: '① The **original** Notice of Payment Decision for your Lump-sum Withdrawal Payment (支給決定通知書)',
    done_doc2: '② A **copy** of your ID (passport)',
    done_memo: 'Please put **a note with your reference number ({id})** inside the envelope.',
    done_address_title: 'Mailing address',
    done_address_ja_label: 'In Japanese',
    done_address_en_label: 'In English',
    done_contact: 'If you have any questions, please contact us at {email} and include your reference number.',
    done_demo: 'Demo mode: nothing was actually sent, and no confirmation email will be sent. The reference number is a dummy.',
    footer_contact: 'Contact: {email}'
  };

  TERMS.en = {
    title: 'Terms of Service',
    note: 'This English translation is provided for reference only. If there is any discrepancy between the Japanese version and this translation, the Japanese version shall prevail.',
    preamble: 'These Terms of Service (hereinafter referred to as “these Terms”) set forth the conditions for use of the services (hereinafter referred to as “the Service”) provided on this website by EAST TAX Accounting Office and East Labor, Labor and Social Security Attorney Office (hereinafter referred to as “the Operator”). Registered users (hereinafter referred to as “Users”) shall use the Service in accordance with these Terms.',
    articles: [
      { h: 'Article 1 (Application)', lines: [
        'These Terms shall apply to all relationships between Users and the Operator relating to the use of the Service.'
      ] },
      { h: 'Article 2 (Registration)', lines: [
        '1. Registration shall be completed when a person wishing to register applies for registration by the method prescribed by the Operator and the Operator approves the application.',
        '2. The Operator may refuse to approve an application for registration if it determines that the applicant falls under any of the following, and shall have no obligation whatsoever to disclose the reasons therefor.',
        '(1) Where false information was submitted in the application for registration',
        '(2) Where the application is made by a person who has previously violated these Terms',
        '(3) Any other case where the Operator determines that registration is not appropriate'
      ] },
      { h: 'Article 3 (Handling of Personal Information)', lines: [
        'Under the Service, the Operator will use Users’ personal information for the purpose of pension refund applications and income tax refund applications. The Operator will not provide Users’ personal information to any third party except as based on laws and regulations.'
      ] },
      { h: 'Article 4 (Fees and Method of Payment)', lines: [
        'In consideration for the use of the Service, Users shall pay the fees separately determined by the Operator and displayed on this website, by the method designated by the Operator.'
      ] },
      { h: 'Article 5 (Service Contracts)', lines: [
        'Users agree that, by requesting East Labor, Labor and Social Security Attorney Office to handle the application procedures for the Lump-sum Withdrawal Payment, and by requesting EAST TAX Accounting Office to handle the income tax refund procedures relating to the Lump-sum Withdrawal Payment, a contract is formed for each respective service.'
      ] },
      { h: 'Article 6 (Prohibited Acts)', lines: [
        'In using the Service, Users shall not engage in any of the following acts:',
        '(1) Acts that violate laws and regulations or public order and morals',
        '(2) Acts related to criminal acts',
        '(3) Acts that destroy or interfere with the functions of the Operator’s servers or networks',
        '(4) Acts that may interfere with the operation of the Operator’s services',
        '(5) Acts of collecting or accumulating personal information, etc. concerning the Operator’s users',
        '(6) Acts of impersonating the Operator’s users',
        '(7) Acts of directly or indirectly providing benefits to anti-social forces in connection with the Operator’s services',
        '(8) Any other acts that the Operator deems inappropriate'
      ] },
      { h: 'Article 7 (Suspension, etc. of the Provision of the Service)', lines: [
        '1. The Operator may suspend or interrupt the provision of all or part of the Service without prior notice to Users if it determines that any of the following circumstances exists:',
        '(1) Where maintenance, inspection or updating of the computer systems related to the Service is carried out',
        '(2) Where the provision of the Service becomes difficult due to force majeure such as an earthquake, lightning, fire, power outage or natural disaster',
        '(3) Where computers, communication lines, etc. stop due to an accident',
        '(4) Any other case where the Operator determines that it is difficult to provide the Service',
        '2. The Operator shall bear no responsibility whatsoever, for any reason, for any disadvantage or damage suffered by Users or third parties as a result of the suspension or interruption of the provision of the Service.'
      ] },
      { h: 'Article 8 (Restriction of Use and Cancellation of Registration)', lines: [
        '1. In any of the following cases, the Operator may, without prior notice, restrict a User’s use of all or part of the Service or cancel the User’s registration as a User:',
        '(1) Where the User has violated any provision of these Terms',
        '(2) Where it is found that the registered information contains false facts',
        '(3) Any other case where the Operator determines that the User’s use of the Service is not appropriate',
        '2. The Operator shall bear no responsibility whatsoever for any damage caused to a User by an act carried out by the Operator under this Article.'
      ] },
      { h: 'Article 9 (Disclaimer)', lines: [
        '1. The Operator shall be exempt from liability for non-performance of its obligations, except where such non-performance is due to the Operator’s willful misconduct or gross negligence.',
        '2. With respect to a pension refund application or an income tax refund application under the Service, if all of the documents required for the respective application have not been provided by two weeks before the statutory application deadline, and as a result the application is not filed by the statutory application deadline, the Operator shall not be responsible.',
        '3. The Operator shall bear no responsibility whatsoever for any transactions, communications, disputes, etc. arising between a User and another user or a third party in connection with the Service.'
      ] },
      { h: 'Article 10 (Amendment of these Terms)', lines: [
        'The Operator may amend these Terms at any time without notice to Users if it deems it necessary.'
      ] },
      { h: 'Article 11 (Notices and Communications)', lines: [
        'Notices or communications between Users and the Operator shall be made by the method prescribed by the Operator.'
      ] },
      { h: 'Article 12 (Prohibition of Assignment of Rights and Obligations)', lines: [
        'Users may not assign to any third party, or provide as security, their contractual status under the service agreement or their rights or obligations under these Terms without the prior written consent of the Operator.'
      ] },
      { h: 'Article 13 (General Provisions)', lines: [
        '1. These Terms shall be governed by and interpreted in accordance with the laws of Japan.',
        '2. In the event of any dispute concerning the Service, the Tokyo District Court shall have exclusive agreed jurisdiction.'
      ] }
    ]
  };

  /* ===================================================================== */
  /* 简体中文                                                               */
  /* ===================================================================== */
  I18N.zh = {
    doc_title: '脱退一时金 所得税退税 申请表',
    office_name: 'EAST TAX会计事务所',
    h1: '脱退一时金 所得税退税 申请表',
    lead: '领取厚生年金的脱退一时金时，会被预扣（源泉征收）所得税。通过办理退税申报（退职所得的选择课税），在大多数情况下，这笔税款都会退还给您（俗称“年金第二次退税”）。EAST TAX会计事务所将为您代办此手续。',
    lead_docs: '填写约需5分钟。文件请在提交后邮寄，本表格无需上传任何文件。',
    lead_lang: '请用日语或英语（罗马字）填写。',
    secure_note: '您填写的内容将通过加密通信（HTTPS）发送。个人信息将按照利用条款第3条进行处理。',
    lang_nav_label: '语言 / Language',
    demo_banner: '演示模式：尚未设置提交地址，因此填写的内容不会被发送（仅供测试）。',
    required_note: '标有“必填”的项目必须填写。',
    badge_required: '必填',
    badge_optional: '选填',

    sec_personal: '本人信息',
    sec_contact: '联系方式・地址',
    sec_bank: '退税款收款账户',
    sec_bank_intro: '请填写以您本人名义开设的日本境外银行账户。退税款将汇入该账户。',
    sec_agree: '同意事项',

    f_name: '姓名',
    h_name: '请按照护照上的罗马字填写（例：ZHANG WEI）。',
    f_name_kana: '姓名的片假名读音',
    h_name_kana: '如果知道请填写（例：チョウ イ）。',
    w_name_kana: '含有全角片假名以外的字符。仍可直接提交。',
    f_birth_date: '出生日期',
    f_nationality: '国籍',
    h_nationality: '例：China',
    f_country: '现居住国家',
    h_country: '例：China',
    f_address_current: '现住址（日本境外）',
    h_address_current: '请完整填写门牌号、楼名、房间号及邮政编码，不要省略。',

    f_jp_postal: '在日本最后住址的邮政编码',
    h_jp_postal: '7位数字（例：104-0033）。即您在日本最后居住地址的邮政编码。',
    h_jp_postal_link: '如不清楚，可在日本邮政的邮政编码查询页面（日语页面）查找',
    zip_searching: '正在查询地址…',
    zip_filled: '已根据邮政编码填入地址。请补充门牌号、楼名和房间号。',
    zip_filled_partial: '已根据邮政编码填入部分地址。请补充町名、门牌号和楼名。',
    zip_notfound: '未找到该邮政编码对应的地址。请确认号码，或直接填写地址。',
    zip_error: '无法使用地址自动填写功能。请直接填写地址。',
    f_address_jp: '在日本的最后住址',
    h_address_jp: '即您在日本最后居住的地址（例如在留卡上记载的地址）。用日语或罗马字填写均可。',

    f_phone: '电话号码',
    f_phone_country: '国家代码',
    f_phone_number: '号码',
    opt_phone_country: '请选择国家',
    e_phone_plus: '请在“国家代码”栏中选择国家代码，此处只填写号码。',
    phone_preview: '将提交的电话号码：{phone}',
    h_phone: '请先选择国家代码，再输入号码。号码开头的0不需要填写（即使填写也会自动去除）。',
    f_email: '电子邮箱',
    h_email: '受理确认邮件及今后的联络都将发送到此邮箱。',
    f_email_confirm: '电子邮箱（确认）',
    h_email_confirm: '为确认无误，请再输入一次。',
    f_departure_date: '离开日本的日期',

    f_has_notice: '您是否持有脱退一时金支给决定通知书？',
    h_has_notice: '即日本年金机构寄来的“脱退一时金支给决定通知书”（日语：脱退一時金支給決定通知書）。',
    opt_notice_yes: '是，已持有',
    opt_notice_no: '否，尚未收到',

    f_bank_name: '银行名称',
    h_bank_name: '例：Bank of China',
    f_bank_branch: '支行名称',
    f_swift: 'SWIFT/BIC代码',
    h_swift: '8位或11位英文字母和数字。如不清楚，请向银行确认。汇款时需要此代码。',
    f_account_number: '账号',
    f_account_holder: '账户名',
    h_account_holder: '请按照银行登记的内容填写（通常为罗马字/拼音）。',

    f_agree_east_tax: '本人就所得税退税申请手续委托EAST TAX会计事务所办理。',
    f_agree_terms: '本人同意利用条款。',
    terms_intro: '提交前请阅读利用条款。',
    terms_toggle: '阅读利用条款',
    terms_view_translation: '中文（参考译文）',
    terms_view_original: '日语原文（日本語）',
    terms_region_label: '利用条款全文',
    new_tab: '（在新标签页中打开）',

    btn_submit: '提交',
    btn_sending: '正在提交…',
    sending_note: '提交可能需要约30秒。请不要关闭此页面。',

    e_required: '请填写此项。',
    e_required_choice: '请选择一项。',
    e_required_check: '请勾选此项（需要您的同意）。',
    e_date_format: '请输入正确的日期（例：1995-04-01）。',
    e_date_future: '不能输入晚于今天的日期。',
    e_date_order: '请输入晚于出生日期的日期。',
    e_postal: '请以7位数字填写邮政编码（例：104-0033）。',
    e_email: '电子邮箱格式不正确。',
    e_email_mismatch: '两次输入的电子邮箱不一致。',
    e_phone: '请输入4至15位数字的号码（可使用“-”和空格）。',
    e_swift: 'SWIFT/BIC代码为8位或11位英文字母和数字。',
    e_server_field: '请确认此项内容。',
    e_summary: '有{n}处填写内容需要修改。',
    e_validation: '由于部分填写内容有误，申请未被受理。请确认显示提示信息的项目。',
    e_network: '由于网络错误，未能提交。请检查网络连接后再次点击“提交”。您填写的内容仍然保留。（如果已收到受理确认邮件，说明申请已受理，请勿重复提交。）',
    e_server: '由于服务器发生问题，申请未被受理。请稍后再次点击“提交”。',
    e_spam: '无法受理您的提交。给您添麻烦了，请发送邮件至 {email} 与我们联系。',
    e_contact: '如多次尝试仍无法提交，请联系 {email}。',

    done_title: '您的申请已受理',
    done_id_label: '受理编号',
    done_id_note: '邮寄文件或咨询时需要此编号。请通过截图等方式妥善保存。',
    done_mail: '我们已向您填写的电子邮箱发送了受理确认邮件。',
    done_mail_trouble: '如未收到邮件，请查看垃圾邮件文件夹。如仍找不到，请联系 {email}。',
    done_post_title: '下一步：请邮寄文件',
    done_notice_no: '尚未收到支给决定通知书的，请在收到通知书后，将文件一并邮寄。',
    done_post_intro: '请将以下文件邮寄至下方地址。',
    done_doc1: '① 脱退一时金支给决定通知书的**原件**',
    done_doc2: '② 身份证明文件（护照）的**复印件**',
    done_memo: '请在信封内放入**写有受理编号（{id}）的便条**。',
    done_address_title: '邮寄地址',
    done_address_ja_label: '日语写法',
    done_address_en_label: '英语写法',
    done_contact: '如有疑问，请注明受理编号并联系 {email}。',
    done_demo: '演示模式：实际并未发送，也不会发送确认邮件。受理编号为虚拟编号。',
    footer_contact: '联系方式：{email}'
  };

  TERMS.zh = {
    title: '利用条款',
    note: '本中文译文仅供参考。如本译文与日文版内容存在差异，以日文版为准。',
    preamble: '本利用条款（以下称“本条款”）规定了EAST TAX会计事务所及社会保险劳务士事务所East Labor（以下称“运营者”）在本网站上提供的服务（以下称“本服务”）的使用条件。各位注册用户（以下称“用户”）应按照本条款使用本服务。',
    articles: [
      { h: '第1条（适用）', lines: [
        '本条款适用于用户与运营者之间有关本服务使用的一切关系。'
      ] },
      { h: '第2条（使用注册）', lines: [
        '1. 注册申请人按照运营者规定的方法申请使用注册，经运营者批准后，使用注册即告完成。',
        '2. 运营者认为使用注册申请人存在下列事由的，可以不批准其使用注册申请，且对其理由不负任何披露义务。',
        '(1) 申请使用注册时申报虚假事项的',
        '(2) 申请人曾违反本条款的',
        '(3) 其他运营者认为不宜进行使用注册的'
      ] },
      { h: '第3条（个人信息的处理）', lines: [
        '运营者基于本服务，以办理年金退还申请及所得税退税申请为目的，使用用户的个人信息。除依据法令的情形外，运营者不会向第三方提供用户的个人信息。'
      ] },
      { h: '第4条（使用费用及支付方式）', lines: [
        '用户作为使用本服务的对价，应按照运营者指定的方式，支付由运营者另行规定并在本网站上显示的使用费用。'
      ] },
      { h: '第5条（业务合同关系）', lines: [
        '用户同意：通过就脱退一时金的申请手续委托社会保险劳务士事务所East Labor，并就脱退一时金相关的所得税退税手续委托EAST TAX会计事务所，就各项业务分别成立合同。'
      ] },
      { h: '第6条（禁止事项）', lines: [
        '用户在使用本服务时，不得有下列行为：',
        '(1) 违反法令或公序良俗的行为',
        '(2) 与犯罪行为有关的行为',
        '(3) 破坏或妨碍运营者服务器或网络功能的行为',
        '(4) 可能妨碍运营者服务运营的行为',
        '(5) 收集或积累与运营者的用户有关的个人信息等的行为',
        '(6) 冒充运营者的用户的行为',
        '(7) 与运营者的服务相关，直接或间接向反社会势力提供利益的行为',
        '(8) 其他运营者认为不适当的行为'
      ] },
      { h: '第7条（停止提供本服务等）', lines: [
        '1. 运营者认为存在下列任一事由时，可以不事先通知用户而停止或中断提供本服务的全部或部分。',
        '(1) 对本服务相关的计算机系统进行维护检查或更新时',
        '(2) 因地震、雷击、火灾、停电或自然灾害等不可抗力导致难以提供本服务时',
        '(3) 计算机或通信线路等因事故而停止时',
        '(4) 其他运营者认为难以提供本服务时',
        '2. 对于因停止或中断提供本服务而给用户或第三方造成的任何不利或损害，无论出于何种理由，运营者均不承担任何责任。'
      ] },
      { h: '第8条（使用限制及注销注册）', lines: [
        '1. 有下列情形之一的，运营者可以不事先通知而限制用户使用本服务的全部或部分，或注销其用户注册。',
        '(1) 违反本条款任一条款的',
        '(2) 发现注册事项中有虚假事实的',
        '(3) 其他运营者认为不宜使用本服务的',
        '2. 对于运营者依据本条采取的行为给用户造成的损害，运营者不承担任何责任。'
      ] },
      { h: '第9条（免责事项）', lines: [
        '1. 运营者的债务不履行责任，在非因运营者的故意或重大过失所致的情况下，予以免除。',
        '2. 就本服务中的年金退还申请或所得税退税申请，如截至法定申请期限前2周时，各项申请所需的文件仍未全部齐备，导致未能在法定申请期限前提出申请的，运营者对此不承担责任。',
        '3. 对于用户与其他用户或第三方之间就本服务发生的交易、联络或纠纷等，运营者不承担任何责任。'
      ] },
      { h: '第10条（本条款的变更）', lines: [
        '运营者认为必要时，可随时变更本条款，而无需通知用户。'
      ] },
      { h: '第11条（通知或联络）', lines: [
        '用户与运营者之间的通知或联络，应按照运营者规定的方法进行。'
      ] },
      { h: '第12条（禁止转让权利义务）', lines: [
        '未经运营者事先书面同意，用户不得将使用合同上的地位或基于本条款的权利或义务转让给第三方，或将其提供担保。'
      ] },
      { h: '第13条（一般条款）', lines: [
        '1. 本条款的解释以日本法为准据法。',
        '2. 就本服务发生纠纷时，以东京地方法院为专属合意管辖法院。'
      ] }
    ]
  };

  /* ===================================================================== */
  /* 한국어                                                                 */
  /* ===================================================================== */
  I18N.ko = {
    doc_title: '탈퇴일시금 소득세 환급 신청서',
    office_name: 'EAST TAX 회계사무소',
    h1: '탈퇴일시금 소득세 환급 신청서',
    lead: '후생연금 탈퇴일시금을 받을 때에는 소득세가 원천징수됩니다. 환급 신고(퇴직소득 선택과세)를 하면 대부분의 경우 이 세금을 돌려받을 수 있습니다. EAST TAX 회계사무소가 이 절차를 대행합니다.',
    lead_docs: '입력은 5분 정도면 끝납니다. 서류는 제출 후 우편으로 보내 주시므로, 이 양식에서는 파일을 첨부하지 않습니다.',
    lead_lang: '일본어 또는 영어(로마자)로 입력해 주세요.',
    secure_note: '입력 내용은 암호화된 통신(HTTPS)으로 전송됩니다. 개인정보는 이용약관 제3조에 따라 취급합니다.',
    lang_nav_label: '언어 / Language',
    demo_banner: '데모 모드: 전송처가 설정되어 있지 않아 입력 내용은 전송되지 않습니다(테스트용).',
    required_note: '"필수" 항목은 반드시 입력해 주세요.',
    badge_required: '필수',
    badge_optional: '선택',

    sec_personal: '본인 정보',
    sec_contact: '연락처・주소',
    sec_bank: '환급금 수령 계좌',
    sec_bank_intro: '환급금을 송금받을, 본인 명의의 해외 은행 계좌를 입력해 주세요.',
    sec_agree: '동의 사항',

    f_name: '성명',
    h_name: '여권과 같은 로마자로 입력해 주세요(예: KIM MINJUN).',
    f_name_kana: '성명의 가타카나 표기',
    h_name_kana: '알고 계시면 입력해 주세요(예: キム ミンジュン).',
    w_name_kana: '전각 가타카나 이외의 문자가 포함되어 있습니다. 이대로도 제출할 수 있습니다.',
    f_birth_date: '생년월일',
    f_nationality: '국적',
    h_nationality: '예: Korea',
    f_country: '현재 거주 국가',
    h_country: '예: Korea',
    f_address_current: '현주소(일본 국외)',
    h_address_current: '번지, 건물명, 호수, 우편번호까지 생략하지 말고 입력해 주세요.',

    f_jp_postal: '일본 최종 주소의 우편번호',
    h_jp_postal: '숫자 7자리(예: 104-0033). 일본에서 마지막으로 살았던 주소의 우편번호입니다.',
    h_jp_postal_link: '모르시는 경우 일본우편의 우편번호 검색(일본어 페이지)에서 찾을 수 있습니다',
    zip_searching: '주소를 검색하고 있습니다…',
    zip_filled: '우편번호로 주소를 입력했습니다. 번지, 건물명, 호수를 추가로 입력해 주세요.',
    zip_filled_partial: '우편번호로 주소의 일부를 입력했습니다. 동네 이름(町名), 번지, 건물명을 추가로 입력해 주세요.',
    zip_notfound: '이 우편번호의 주소를 찾을 수 없습니다. 번호를 확인하시거나 주소를 직접 입력해 주세요.',
    zip_error: '주소 자동 입력을 이용할 수 없습니다. 주소를 직접 입력해 주세요.',
    f_address_jp: '일본 최종 주소',
    h_address_jp: '일본에서 마지막으로 살았던 주소입니다(재류카드에 적혀 있던 주소 등). 일본어나 로마자 모두 괜찮습니다.',

    f_phone: '전화번호',
    f_phone_country: '국가번호',
    f_phone_number: '번호',
    opt_phone_country: '국가를 선택해 주세요',
    e_phone_plus: '국가번호는 "국가번호" 칸에서 선택하고, 여기에는 번호만 입력해 주세요.',
    phone_preview: '전송될 전화번호: {phone}',
    h_phone: '국가번호를 선택한 후 번호를 입력해 주세요. 맨 앞의 0은 필요 없습니다(입력해도 자동으로 삭제됩니다).',
    f_email: '이메일 주소',
    h_email: '접수 확인 메일과 앞으로의 연락을 이 주소로 보내 드립니다.',
    f_email_confirm: '이메일 주소(확인용)',
    h_email_confirm: '확인을 위해 한 번 더 입력해 주세요.',
    f_departure_date: '일본을 출국한 날',

    f_has_notice: '탈퇴일시금 지급결정 통지서를 가지고 계십니까?',
    h_has_notice: '일본연금기구에서 보내는 「탈퇴일시금 지급결정 통지서」(일본어: 脱退一時金支給決定通知書)입니다.',
    opt_notice_yes: '예, 가지고 있습니다',
    opt_notice_no: '아니요, 아직 없습니다',

    f_bank_name: '은행명',
    h_bank_name: '예: KB Kookmin Bank',
    f_bank_branch: '지점명',
    f_swift: 'SWIFT/BIC 코드',
    h_swift: '영문자와 숫자 8자리 또는 11자리입니다. 모르시는 경우 은행에 확인해 주세요. 송금에 필요합니다.',
    f_account_number: '계좌번호',
    f_account_holder: '예금주',
    h_account_holder: '은행에 등록된 그대로 입력해 주세요(보통 로마자).',

    f_agree_east_tax: '소득세 환급 신청 절차에 관하여 EAST TAX 회계사무소에 의뢰합니다.',
    f_agree_terms: '이용약관에 동의합니다.',
    terms_intro: '제출하기 전에 이용약관을 읽어 주세요.',
    terms_toggle: '이용약관 읽기',
    terms_view_translation: '한국어(참고 번역)',
    terms_view_original: '일본어 원문(日本語)',
    terms_region_label: '이용약관 전문',
    new_tab: '(새 탭에서 열립니다)',

    btn_submit: '제출하기',
    btn_sending: '제출 중입니다…',
    sending_note: '제출에는 30초 정도 걸릴 수 있습니다. 화면을 닫지 말고 기다려 주세요.',

    e_required: '입력해 주세요.',
    e_required_choice: '하나를 선택해 주세요.',
    e_required_check: '체크해 주세요(동의가 필요합니다).',
    e_date_format: '올바른 날짜를 입력해 주세요(예: 1995-04-01).',
    e_date_future: '오늘 이후의 날짜는 입력할 수 없습니다.',
    e_date_order: '생년월일보다 뒤의 날짜를 입력해 주세요.',
    e_postal: '우편번호는 숫자 7자리로 입력해 주세요(예: 104-0033).',
    e_email: '이메일 주소 형식이 올바르지 않습니다.',
    e_email_mismatch: '이메일 주소가 일치하지 않습니다.',
    e_phone: '번호는 숫자 4~15자리로 입력해 주세요("-"와 공백은 사용할 수 있습니다).',
    e_swift: 'SWIFT/BIC 코드는 영문자와 숫자 8자리 또는 11자리입니다.',
    e_server_field: '이 항목의 내용을 확인해 주세요.',
    e_summary: '입력 내용에 {n}건의 문제가 있습니다.',
    e_validation: '입력 내용에 문제가 있어 접수되지 않았습니다. 메시지가 표시된 항목을 확인해 주세요.',
    e_network: '통신 오류로 제출하지 못했습니다. 인터넷 연결을 확인하신 후 다시 "제출하기"를 눌러 주세요. 입력 내용은 그대로 남아 있습니다. (접수 확인 메일을 이미 받으셨다면 접수는 완료되었습니다. 다시 제출하지 마세요.)',
    e_server: '서버에 문제가 발생하여 접수되지 않았습니다. 잠시 후 다시 "제출하기"를 눌러 주세요.',
    e_spam: '제출을 접수할 수 없었습니다. 번거로우시겠지만 {email} 에 이메일로 연락해 주세요.',
    e_contact: '여러 번 시도해도 되지 않는 경우 {email} 에 연락해 주세요.',

    done_title: '신청이 접수되었습니다',
    done_id_label: '접수번호',
    done_id_note: '이 번호는 서류를 우송하거나 문의하실 때 필요합니다. 스크린샷 등으로 기록해 두세요.',
    done_mail: '입력하신 이메일 주소로 접수 확인 메일을 보내 드렸습니다.',
    done_mail_trouble: '메일이 도착하지 않은 경우 스팸 메일함을 확인해 주세요. 그래도 찾을 수 없는 경우 {email} 에 연락해 주세요.',
    done_post_title: '다음으로, 서류를 우편으로 보내 주세요',
    done_notice_no: '지급결정 통지서를 아직 받지 않으신 분은 통지서가 도착한 후 함께 우송해 주세요.',
    done_post_intro: '다음 서류를 아래 우송처로 보내 주세요.',
    done_doc1: '① 탈퇴일시금 지급결정 통지서 **원본**',
    done_doc2: '② 신분증(여권) **사본**',
    done_memo: '봉투 안에 **접수번호({id})를 적은 메모**를 넣어 주세요.',
    done_address_title: '우송처',
    done_address_ja_label: '일본어 표기',
    done_address_en_label: '영어 표기',
    done_contact: '궁금한 점은 접수번호를 적어 {email} 에 문의해 주세요.',
    done_demo: '데모 모드이므로 실제로는 전송되지 않았습니다. 확인 메일도 발송되지 않습니다. 접수번호는 임시 번호입니다.',
    footer_contact: '문의: {email}'
  };

  TERMS.ko = {
    title: '이용약관',
    note: '이 한국어 번역은 참고용입니다. 일본어판과 내용에 차이가 있는 경우 일본어판이 우선합니다.',
    preamble: '이 이용약관(이하 "본 약관"이라 합니다)은 EAST TAX 회계사무소 및 사회보험노무사사무소 East Labor(이하 "운영자"라 합니다)가 이 웹사이트에서 제공하는 서비스(이하 "본 서비스"라 합니다)의 이용 조건을 정한 것입니다. 등록 사용자 여러분(이하 "사용자"라 합니다)께서는 본 약관에 따라 본 서비스를 이용하시게 됩니다.',
    articles: [
      { h: '제1조(적용)', lines: [
        '본 약관은 사용자와 운영자 간의 본 서비스 이용에 관한 모든 관계에 적용됩니다.'
      ] },
      { h: '제2조(이용 등록)', lines: [
        '1. 등록 희망자가 운영자가 정하는 방법에 따라 이용 등록을 신청하고 운영자가 이를 승인함으로써 이용 등록이 완료됩니다.',
        '2. 운영자는 이용 등록 신청자에게 다음 각 호의 사유가 있다고 판단하는 경우 이용 등록 신청을 승인하지 않을 수 있으며, 그 이유에 대하여 일체의 공개 의무를 지지 않습니다.',
        '(1) 이용 등록 신청 시 허위 사항을 신고한 경우',
        '(2) 본 약관을 위반한 적이 있는 자의 신청인 경우',
        '(3) 기타 운영자가 이용 등록이 상당하지 않다고 판단한 경우'
      ] },
      { h: '제3조(개인정보의 취급)', lines: [
        '운영자는 본 서비스에 근거하여 연금 환급 신청 및 소득세 환급 신청을 목적으로 사용자의 개인정보를 이용합니다. 법령에 근거한 경우 외에는 사용자의 개인정보를 제3자에게 제공하지 않습니다.'
      ] },
      { h: '제4조(이용 요금 및 지불 방법)', lines: [
        '사용자는 본 서비스 이용의 대가로서 운영자가 별도로 정하여 본 웹사이트에 표시하는 이용 요금을 운영자가 지정하는 방법으로 지불하는 것으로 합니다.'
      ] },
      { h: '제5조(업무 계약 관계)', lines: [
        '사용자는 탈퇴일시금 신청 절차에 관하여 사회보험노무사사무소 East Labor에 의뢰하고, 탈퇴일시금에 관한 소득세 환급 절차에 관하여 EAST TAX 회계사무소에 의뢰함으로써, 각각의 업무에 대하여 계약이 성립하는 것에 동의합니다.'
      ] },
      { h: '제6조(금지 사항)', lines: [
        '사용자는 본 서비스를 이용함에 있어 다음 각 호의 행위를 하여서는 안 됩니다.',
        '(1) 법령 또는 공서양속에 위반되는 행위',
        '(2) 범죄 행위와 관련된 행위',
        '(3) 운영자의 서버 또는 네트워크의 기능을 파괴하거나 방해하는 행위',
        '(4) 운영자의 서비스 운영을 방해할 우려가 있는 행위',
        '(5) 운영자의 사용자에 관한 개인정보 등을 수집 또는 축적하는 행위',
        '(6) 운영자의 사용자로 가장하는 행위',
        '(7) 운영자의 서비스와 관련하여 반사회적 세력에 대하여 직접 또는 간접적으로 이익을 제공하는 행위',
        '(8) 기타 운영자가 부적절하다고 판단하는 행위'
      ] },
      { h: '제7조(본 서비스 제공의 정지 등)', lines: [
        '1. 운영자는 다음 각 호의 어느 하나에 해당하는 사유가 있다고 판단하는 경우 사용자에게 사전에 통지하지 않고 본 서비스의 전부 또는 일부의 제공을 정지 또는 중단할 수 있습니다.',
        '(1) 본 서비스에 관한 컴퓨터 시스템의 보수 점검 또는 갱신을 하는 경우',
        '(2) 지진, 낙뢰, 화재, 정전 또는 천재지변 등의 불가항력으로 인하여 본 서비스의 제공이 곤란하게 된 경우',
        '(3) 컴퓨터 또는 통신 회선 등이 사고로 인하여 정지된 경우',
        '(4) 기타 운영자가 본 서비스의 제공이 곤란하다고 판단한 경우',
        '2. 운영자는 본 서비스 제공의 정지 또는 중단으로 인하여 사용자 또는 제3자가 입은 어떠한 불이익 또는 손해에 대해서도 이유를 불문하고 일체의 책임을 지지 않습니다.'
      ] },
      { h: '제8조(이용 제한 및 등록 말소)', lines: [
        '1. 운영자는 다음 각 호의 경우에는 사전 통지 없이 사용자에 대하여 본 서비스의 전부 또는 일부의 이용을 제한하거나 사용자로서의 등록을 말소할 수 있습니다.',
        '(1) 본 약관의 어느 조항이라도 위반한 경우',
        '(2) 등록 사항에 허위 사실이 있음이 판명된 경우',
        '(3) 기타 운영자가 본 서비스의 이용을 적당하지 않다고 판단한 경우',
        '2. 운영자는 본 조에 근거하여 운영자가 행한 행위로 인하여 사용자에게 발생한 손해에 대하여 일체의 책임을 지지 않습니다.'
      ] },
      { h: '제9조(면책 사항)', lines: [
        '1. 운영자의 채무불이행 책임은 운영자의 고의 또는 중과실에 의하지 않은 경우에는 면책되는 것으로 합니다.',
        '2. 본 서비스에서의 연금 환급 신청 또는 소득세 환급 신청에 있어서, 법정 신청 기한 2주 전까지 각 신청에 필요한 서류가 모두 갖추어지지 않아 법정 신청 기한까지 신청이 이루어지지 않은 경우에는 운영자는 그 책임을 지지 않습니다.',
        '3. 운영자는 본 서비스에 관하여 사용자와 다른 사용자 또는 제3자 사이에 발생한 거래, 연락 또는 분쟁 등에 대하여 일체의 책임을 지지 않습니다.'
      ] },
      { h: '제10조(이용약관의 변경)', lines: [
        '운영자는 필요하다고 판단하는 경우에는 사용자에게 통지하지 않고 언제든지 본 약관을 변경할 수 있습니다.'
      ] },
      { h: '제11조(통지 또는 연락)', lines: [
        '사용자와 운영자 간의 통지 또는 연락은 운영자가 정하는 방법으로 하는 것으로 합니다.'
      ] },
      { h: '제12조(권리의무 양도의 금지)', lines: [
        '사용자는 운영자의 서면에 의한 사전 승낙 없이 이용계약상의 지위 또는 본 약관에 근거한 권리 또는 의무를 제3자에게 양도하거나 담보로 제공할 수 없습니다.'
      ] },
      { h: '제13조(일반 조항)', lines: [
        '1. 본 약관의 해석에 있어서는 일본법을 준거법으로 합니다.',
        '2. 본 서비스에 관하여 분쟁이 발생한 경우에는 도쿄지방재판소를 전속적 합의관할 법원으로 합니다.'
      ] }
    ]
  };

  /* ===================================================================== */
  /* Tiếng Việt                                                             */
  /* ===================================================================== */
  I18N.vi = {
    doc_title: 'Đăng ký hoàn thuế tiền trợ cấp lương hưu trọn gói (Dattai Ichijikin)',
    office_name: 'Văn phòng Kế toán EAST TAX',
    h1: 'Đăng ký hoàn thuế tiền trợ cấp lương hưu trọn gói (Dattai Ichijikin)',
    lead: 'Khi nhận tiền trợ cấp lương hưu trọn gói (脱退一時金 – Dattai Ichijikin) của Bảo hiểm hưu trí phúc lợi (Kosei Nenkin), bạn đã bị khấu trừ thuế thu nhập. Bằng cách nộp tờ khai hoàn thuế (đánh thuế lựa chọn đối với thu nhập thôi việc), trong hầu hết các trường hợp bạn sẽ được hoàn lại khoản thuế này (thường gọi là “lấy Nenkin lần 2”). Văn phòng Kế toán EAST TAX sẽ thực hiện thủ tục này thay bạn.',
    lead_docs: 'Việc điền đơn mất khoảng 5 phút. Giấy tờ sẽ được gửi qua đường bưu điện sau khi gửi đơn, vì vậy bạn không cần đính kèm tệp trên biểu mẫu này.',
    lead_lang: 'Vui lòng điền bằng tiếng Anh (chữ La-tinh) hoặc tiếng Nhật.',
    secure_note: 'Thông tin bạn nhập được gửi qua kết nối được mã hóa (HTTPS). Thông tin cá nhân được xử lý theo Điều 3 của Điều khoản sử dụng.',
    lang_nav_label: 'Ngôn ngữ / Language',
    demo_banner: 'Chế độ demo: chưa cài đặt nơi nhận nên thông tin sẽ không được gửi đi (chỉ để thử nghiệm).',
    required_note: 'Các mục có nhãn “Bắt buộc” phải được điền.',
    badge_required: 'Bắt buộc',
    badge_optional: 'Không bắt buộc',

    sec_personal: 'Thông tin cá nhân',
    sec_contact: 'Liên lạc và địa chỉ',
    sec_bank: 'Tài khoản nhận tiền hoàn thuế',
    sec_bank_intro: 'Vui lòng nhập tài khoản ngân hàng ở nước ngoài (ngoài Nhật Bản) đứng tên chính bạn. Tiền hoàn thuế sẽ được chuyển vào tài khoản này.',
    sec_agree: 'Nội dung đồng ý',

    f_name: 'Họ và tên',
    h_name: 'Viết bằng chữ La-tinh giống như trên hộ chiếu (ví dụ: NGUYEN VAN AN).',
    f_name_kana: 'Họ tên bằng chữ Katakana',
    h_name_kana: 'Nếu biết, vui lòng điền (ví dụ: グエン ヴァン アン).',
    w_name_kana: 'Có ký tự không phải Katakana toàn góc (zenkaku). Bạn vẫn có thể gửi đơn như vậy.',
    f_birth_date: 'Ngày sinh',
    f_nationality: 'Quốc tịch',
    h_nationality: 'Ví dụ: Vietnam',
    f_country: 'Quốc gia bạn đang sống',
    h_country: 'Ví dụ: Vietnam',
    f_address_current: 'Địa chỉ hiện tại (ngoài Nhật Bản)',
    h_address_current: 'Vui lòng ghi đầy đủ số nhà, tên tòa nhà, số phòng và mã bưu chính, không viết tắt.',

    f_jp_postal: 'Mã bưu điện của địa chỉ cuối cùng tại Nhật',
    h_jp_postal: '7 chữ số (ví dụ: 104-0033). Là mã bưu điện của nơi bạn sống cuối cùng tại Nhật Bản.',
    h_jp_postal_link: 'Nếu không biết, bạn có thể tra cứu trên trang tra cứu mã bưu điện của Bưu điện Nhật Bản (trang tiếng Nhật)',
    zip_searching: 'Đang tìm địa chỉ…',
    zip_filled: 'Đã tự động điền địa chỉ từ mã bưu điện. Vui lòng bổ sung số nhà, tên tòa nhà và số phòng.',
    zip_filled_partial: 'Đã tự động điền một phần địa chỉ từ mã bưu điện. Vui lòng bổ sung tên khu phố, số nhà và tên tòa nhà.',
    zip_notfound: 'Không tìm thấy địa chỉ của mã bưu điện này. Vui lòng kiểm tra lại số hoặc tự nhập địa chỉ.',
    zip_error: 'Không thể sử dụng chức năng tự động điền địa chỉ. Vui lòng tự nhập địa chỉ.',
    f_address_jp: 'Địa chỉ cuối cùng tại Nhật Bản',
    h_address_jp: 'Là địa chỉ nơi bạn sống cuối cùng tại Nhật (ví dụ: địa chỉ ghi trên thẻ cư trú). Có thể viết bằng tiếng Nhật hoặc chữ La-tinh.',

    f_phone: 'Số điện thoại',
    f_phone_country: 'Mã quốc gia',
    f_phone_number: 'Số điện thoại',
    opt_phone_country: 'Chọn quốc gia',
    e_phone_plus: 'Vui lòng chọn mã quốc gia ở ô “Mã quốc gia” và chỉ nhập số điện thoại ở đây.',
    phone_preview: 'Số điện thoại sẽ được gửi: {phone}',
    h_phone: 'Vui lòng chọn mã quốc gia, sau đó nhập số điện thoại. Không cần số 0 ở đầu (nếu bạn nhập, số 0 sẽ được tự động bỏ đi).',
    f_email: 'Địa chỉ email',
    h_email: 'Email xác nhận và các liên lạc sau này sẽ được gửi đến địa chỉ này.',
    f_email_confirm: 'Địa chỉ email (nhập lại)',
    h_email_confirm: 'Vui lòng nhập lại một lần nữa để xác nhận.',
    f_departure_date: 'Ngày xuất cảnh khỏi Nhật Bản',

    f_has_notice: 'Bạn đã có Giấy thông báo quyết định chi trả trợ cấp lương hưu trọn gói chưa?',
    h_has_notice: 'Là giấy thông báo “脱退一時金支給決定通知書” do Tổ chức Hưu trí Nhật Bản (Japan Pension Service) gửi cho bạn.',
    opt_notice_yes: 'Có, tôi đã có',
    opt_notice_no: 'Chưa có',

    f_bank_name: 'Tên ngân hàng',
    h_bank_name: 'Ví dụ: Vietcombank',
    f_bank_branch: 'Tên chi nhánh',
    f_swift: 'Mã SWIFT/BIC',
    h_swift: 'Gồm 8 hoặc 11 ký tự chữ và số. Nếu không biết, vui lòng hỏi ngân hàng. Mã này cần thiết để chuyển tiền.',
    f_account_number: 'Số tài khoản',
    f_account_holder: 'Tên chủ tài khoản',
    h_account_holder: 'Ghi đúng như đã đăng ký với ngân hàng (thường là chữ La-tinh không dấu).',

    f_agree_east_tax: 'Tôi ủy thác cho Văn phòng Kế toán EAST TAX thực hiện thủ tục xin hoàn thuế thu nhập.',
    f_agree_terms: 'Tôi đồng ý với Điều khoản sử dụng.',
    terms_intro: 'Vui lòng đọc Điều khoản sử dụng trước khi gửi.',
    terms_toggle: 'Đọc Điều khoản sử dụng',
    terms_view_translation: 'Tiếng Việt (bản dịch tham khảo)',
    terms_view_original: 'Bản gốc tiếng Nhật (日本語)',
    terms_region_label: 'Toàn văn Điều khoản sử dụng',
    new_tab: '(mở trong thẻ mới)',

    btn_submit: 'Gửi đơn',
    btn_sending: 'Đang gửi…',
    sending_note: 'Việc gửi có thể mất khoảng 30 giây. Vui lòng không đóng trang này.',

    e_required: 'Vui lòng điền mục này.',
    e_required_choice: 'Vui lòng chọn một mục.',
    e_required_check: 'Vui lòng đánh dấu vào ô này (cần có sự đồng ý của bạn).',
    e_date_format: 'Vui lòng nhập ngày hợp lệ (ví dụ: 1995-04-01).',
    e_date_future: 'Không thể nhập ngày sau hôm nay.',
    e_date_order: 'Vui lòng nhập ngày sau ngày sinh.',
    e_postal: 'Vui lòng nhập mã bưu điện gồm 7 chữ số (ví dụ: 104-0033).',
    e_email: 'Địa chỉ email không đúng định dạng.',
    e_email_mismatch: 'Hai địa chỉ email không khớp nhau.',
    e_phone: 'Vui lòng nhập số điện thoại gồm 4 đến 15 chữ số (có thể dùng “-” và dấu cách).',
    e_swift: 'Mã SWIFT/BIC gồm 8 hoặc 11 ký tự chữ và số.',
    e_server_field: 'Vui lòng kiểm tra lại mục này.',
    e_summary: 'Có {n} mục cần sửa.',
    e_validation: 'Đơn chưa được tiếp nhận vì có nội dung cần sửa. Vui lòng kiểm tra các mục có hiển thị thông báo.',
    e_network: 'Không thể gửi do lỗi kết nối. Vui lòng kiểm tra kết nối Internet rồi bấm “Gửi đơn” lại. Thông tin bạn đã nhập vẫn được giữ nguyên. (Nếu bạn đã nhận được email xác nhận thì đơn đã được tiếp nhận. Vui lòng không gửi lại.)',
    e_server: 'Đơn chưa được tiếp nhận do máy chủ gặp sự cố. Vui lòng đợi một lát rồi bấm “Gửi đơn” lại.',
    e_spam: 'Không thể tiếp nhận đơn của bạn. Xin lỗi vì sự bất tiện, vui lòng liên hệ với chúng tôi qua email {email}.',
    e_contact: 'Nếu thử nhiều lần vẫn không được, vui lòng liên hệ {email}.',

    done_title: 'Đơn của bạn đã được tiếp nhận',
    done_id_label: 'Mã số tiếp nhận',
    done_id_note: 'Bạn sẽ cần mã số này khi gửi giấy tờ hoặc liên hệ với chúng tôi. Vui lòng lưu lại (ví dụ: chụp màn hình).',
    done_mail: 'Chúng tôi đã gửi email xác nhận đến địa chỉ email bạn đã nhập.',
    done_mail_trouble: 'Nếu không thấy email, vui lòng kiểm tra thư mục thư rác (spam). Nếu vẫn không thấy, vui lòng liên hệ {email}.',
    done_post_title: 'Tiếp theo, vui lòng gửi giấy tờ qua đường bưu điện',
    done_notice_no: 'Nếu bạn chưa nhận được Giấy thông báo quyết định chi trả, vui lòng đợi đến khi nhận được giấy thông báo rồi gửi tất cả giấy tờ cùng một lần.',
    done_post_intro: 'Vui lòng gửi các giấy tờ sau đến địa chỉ bên dưới.',
    done_doc1: '① **Bản gốc** Giấy thông báo quyết định chi trả trợ cấp lương hưu trọn gói (脱退一時金支給決定通知書)',
    done_doc2: '② **Bản sao** giấy tờ tùy thân (hộ chiếu)',
    done_memo: 'Vui lòng cho vào phong bì **một tờ giấy ghi mã số tiếp nhận ({id})**.',
    done_address_title: 'Địa chỉ gửi',
    done_address_ja_label: 'Viết bằng tiếng Nhật',
    done_address_en_label: 'Viết bằng tiếng Anh',
    done_contact: 'Nếu có thắc mắc, vui lòng liên hệ {email} và ghi kèm mã số tiếp nhận.',
    done_demo: 'Chế độ demo: thực tế chưa có gì được gửi đi và sẽ không có email xác nhận. Mã số tiếp nhận chỉ là mã giả.',
    footer_contact: 'Liên hệ: {email}'
  };

  TERMS.vi = {
    title: 'Điều khoản sử dụng',
    note: 'Bản dịch tiếng Việt này chỉ mang tính chất tham khảo. Trường hợp có sự khác biệt về nội dung giữa bản tiếng Nhật và bản dịch này, bản tiếng Nhật sẽ được ưu tiên áp dụng.',
    preamble: 'Điều khoản sử dụng này (sau đây gọi là “Điều khoản này”) quy định các điều kiện sử dụng dịch vụ (sau đây gọi là “Dịch vụ”) do Văn phòng Kế toán EAST TAX và Văn phòng chuyên gia lao động và bảo hiểm xã hội (Sharoushi) East Labor (sau đây gọi là “Bên vận hành”) cung cấp trên trang web này. Quý người dùng đã đăng ký (sau đây gọi là “Người dùng”) sẽ sử dụng Dịch vụ theo Điều khoản này.',
    articles: [
      { h: 'Điều 1 (Phạm vi áp dụng)', lines: [
        'Điều khoản này được áp dụng cho mọi quan hệ giữa Người dùng và Bên vận hành liên quan đến việc sử dụng Dịch vụ.'
      ] },
      { h: 'Điều 2 (Đăng ký sử dụng)', lines: [
        '1. Việc đăng ký sử dụng được hoàn tất khi người có nguyện vọng đăng ký nộp đơn đăng ký sử dụng theo phương thức do Bên vận hành quy định và được Bên vận hành chấp thuận.',
        '2. Bên vận hành có thể không chấp thuận đơn đăng ký sử dụng nếu xác định rằng người nộp đơn thuộc một trong các trường hợp sau đây, và không có bất kỳ nghĩa vụ nào phải công khai lý do.',
        '(1) Trường hợp khai báo nội dung sai sự thật khi nộp đơn đăng ký sử dụng',
        '(2) Trường hợp đơn được nộp bởi người đã từng vi phạm Điều khoản này',
        '(3) Các trường hợp khác mà Bên vận hành xác định rằng việc đăng ký sử dụng là không phù hợp'
      ] },
      { h: 'Điều 3 (Xử lý thông tin cá nhân)', lines: [
        'Căn cứ vào Dịch vụ, Bên vận hành sử dụng thông tin cá nhân của Người dùng nhằm mục đích thực hiện thủ tục xin hoàn trả tiền lương hưu và thủ tục xin hoàn thuế thu nhập. Ngoại trừ trường hợp căn cứ theo quy định của pháp luật, Bên vận hành sẽ không cung cấp thông tin cá nhân của Người dùng cho bên thứ ba.'
      ] },
      { h: 'Điều 4 (Phí sử dụng và phương thức thanh toán)', lines: [
        'Người dùng thanh toán phí sử dụng do Bên vận hành quy định riêng và hiển thị trên trang web này, như khoản đối giá cho việc sử dụng Dịch vụ, theo phương thức do Bên vận hành chỉ định.'
      ] },
      { h: 'Điều 5 (Quan hệ hợp đồng nghiệp vụ)', lines: [
        'Người dùng đồng ý rằng, bằng việc ủy thác cho Văn phòng chuyên gia lao động và bảo hiểm xã hội (Sharoushi) East Labor thực hiện thủ tục xin trợ cấp lương hưu trọn gói (脱退一時金), đồng thời ủy thác cho Văn phòng Kế toán EAST TAX thực hiện thủ tục hoàn thuế thu nhập liên quan đến trợ cấp lương hưu trọn gói, hợp đồng được xác lập đối với từng nghiệp vụ tương ứng.'
      ] },
      { h: 'Điều 6 (Các hành vi bị cấm)', lines: [
        'Khi sử dụng Dịch vụ, Người dùng không được thực hiện các hành vi sau đây:',
        '(1) Hành vi vi phạm pháp luật hoặc trật tự công cộng và thuần phong mỹ tục',
        '(2) Hành vi liên quan đến hành vi phạm tội',
        '(3) Hành vi phá hoại hoặc cản trở chức năng của máy chủ hoặc mạng của Bên vận hành',
        '(4) Hành vi có nguy cơ cản trở việc vận hành dịch vụ của Bên vận hành',
        '(5) Hành vi thu thập hoặc tích lũy thông tin cá nhân, v.v. liên quan đến người dùng của Bên vận hành',
        '(6) Hành vi mạo danh người dùng của Bên vận hành',
        '(7) Hành vi cung cấp lợi ích trực tiếp hoặc gián tiếp cho các thế lực phản xã hội liên quan đến dịch vụ của Bên vận hành',
        '(8) Các hành vi khác mà Bên vận hành cho là không phù hợp'
      ] },
      { h: 'Điều 7 (Tạm ngừng cung cấp Dịch vụ, v.v.)', lines: [
        '1. Bên vận hành có thể tạm ngừng hoặc gián đoạn việc cung cấp toàn bộ hoặc một phần Dịch vụ mà không cần thông báo trước cho Người dùng nếu xác định có bất kỳ lý do nào sau đây:',
        '(1) Trường hợp tiến hành bảo trì, kiểm tra hoặc cập nhật hệ thống máy tính liên quan đến Dịch vụ',
        '(2) Trường hợp việc cung cấp Dịch vụ trở nên khó khăn do sự kiện bất khả kháng như động đất, sét đánh, hỏa hoạn, mất điện hoặc thiên tai',
        '(3) Trường hợp máy tính hoặc đường truyền thông tin, v.v. ngừng hoạt động do sự cố',
        '(4) Các trường hợp khác mà Bên vận hành xác định rằng việc cung cấp Dịch vụ là khó khăn',
        '2. Bên vận hành không chịu bất kỳ trách nhiệm nào, dù với bất kỳ lý do gì, đối với mọi bất lợi hoặc thiệt hại mà Người dùng hoặc bên thứ ba phải chịu do việc tạm ngừng hoặc gián đoạn cung cấp Dịch vụ.'
      ] },
      { h: 'Điều 8 (Hạn chế sử dụng và xóa đăng ký)', lines: [
        '1. Trong các trường hợp sau đây, Bên vận hành có thể, không cần thông báo trước, hạn chế Người dùng sử dụng toàn bộ hoặc một phần Dịch vụ, hoặc xóa đăng ký tư cách Người dùng:',
        '(1) Trường hợp vi phạm bất kỳ điều khoản nào của Điều khoản này',
        '(2) Trường hợp phát hiện nội dung đăng ký có thông tin sai sự thật',
        '(3) Các trường hợp khác mà Bên vận hành xác định rằng việc sử dụng Dịch vụ là không thích hợp',
        '2. Bên vận hành không chịu bất kỳ trách nhiệm nào đối với thiệt hại phát sinh cho Người dùng do hành vi mà Bên vận hành thực hiện theo Điều này.'
      ] },
      { h: 'Điều 9 (Miễn trừ trách nhiệm)', lines: [
        '1. Bên vận hành được miễn trách nhiệm do không thực hiện nghĩa vụ, trừ trường hợp do lỗi cố ý hoặc lỗi nghiêm trọng của Bên vận hành.',
        '2. Đối với thủ tục xin hoàn trả tiền lương hưu hoặc thủ tục xin hoàn thuế thu nhập trong Dịch vụ, trường hợp đến thời điểm 2 tuần trước thời hạn nộp đơn theo luật định mà vẫn chưa có đầy đủ các giấy tờ cần thiết cho từng thủ tục, dẫn đến việc đơn không được nộp trong thời hạn theo luật định, Bên vận hành không chịu trách nhiệm về việc đó.',
        '3. Bên vận hành không chịu bất kỳ trách nhiệm nào đối với các giao dịch, liên lạc hoặc tranh chấp, v.v. phát sinh giữa Người dùng với người dùng khác hoặc bên thứ ba liên quan đến Dịch vụ.'
      ] },
      { h: 'Điều 10 (Thay đổi Điều khoản sử dụng)', lines: [
        'Bên vận hành có thể thay đổi Điều khoản này bất cứ lúc nào mà không cần thông báo cho Người dùng nếu xét thấy cần thiết.'
      ] },
      { h: 'Điều 11 (Thông báo hoặc liên lạc)', lines: [
        'Việc thông báo hoặc liên lạc giữa Người dùng và Bên vận hành được thực hiện theo phương thức do Bên vận hành quy định.'
      ] },
      { h: 'Điều 12 (Cấm chuyển nhượng quyền và nghĩa vụ)', lines: [
        'Người dùng không được chuyển nhượng cho bên thứ ba hoặc dùng làm tài sản bảo đảm địa vị trong hợp đồng sử dụng hoặc các quyền hay nghĩa vụ theo Điều khoản này nếu không có sự chấp thuận trước bằng văn bản của Bên vận hành.'
      ] },
      { h: 'Điều 13 (Điều khoản chung)', lines: [
        '1. Việc giải thích Điều khoản này lấy pháp luật Nhật Bản làm luật điều chỉnh.',
        '2. Trường hợp phát sinh tranh chấp liên quan đến Dịch vụ, Tòa án quận Tokyo (Tokyo District Court) là tòa án có thẩm quyền riêng biệt theo thỏa thuận.'
      ] }
    ]
  };

  /* ===================================================================== */
  /* Bahasa Indonesia                                                       */
  /* ===================================================================== */
  I18N.id = {
    doc_title: 'Permohonan Pengembalian Pajak atas Uang Lump Sum (Dattai Ichijikin)',
    office_name: 'EAST TAX Accounting Office',
    h1: 'Permohonan Pengembalian Pajak atas Uang Lump Sum (Dattai Ichijikin)',
    lead: 'Saat Anda menerima Uang Lump Sum (脱退一時金 – Dattai Ichijikin) dari Asuransi Kesejahteraan Pensiun (Kousei Nenkin), pajak penghasilan dipotong dari pembayaran tersebut. Dengan mengajukan laporan pajak untuk pengembalian (Perpajakan Pilihan terhadap Uang Pesangon), dalam sebagian besar kasus pajak ini akan dikembalikan kepada Anda (dikenal juga sebagai “pencairan nenkin tahap 2”). EAST TAX Accounting Office akan mengurus prosedur ini untuk Anda.',
    lead_docs: 'Pengisian formulir ini memakan waktu sekitar 5 menit. Dokumen dikirim melalui pos setelah formulir dikirim, jadi Anda tidak perlu mengunggah file di sini.',
    lead_lang: 'Silakan isi dalam bahasa Inggris (huruf Latin) atau bahasa Jepang.',
    secure_note: 'Data Anda dikirim melalui koneksi terenkripsi (HTTPS). Informasi pribadi ditangani sesuai dengan Pasal 3 Ketentuan Penggunaan.',
    lang_nav_label: 'Bahasa / Language',
    demo_banner: 'Mode demo: tujuan pengiriman belum diatur, sehingga data Anda tidak akan dikirim (hanya untuk uji coba).',
    required_note: 'Kolom bertanda “Wajib” harus diisi.',
    badge_required: 'Wajib',
    badge_optional: 'Opsional',

    sec_personal: 'Data pribadi',
    sec_contact: 'Kontak dan alamat',
    sec_bank: 'Rekening untuk menerima pengembalian pajak',
    sec_bank_intro: 'Masukkan rekening bank di luar Jepang atas nama Anda sendiri. Pengembalian pajak akan ditransfer ke rekening ini.',
    sec_agree: 'Persetujuan',

    f_name: 'Nama lengkap',
    h_name: 'Dalam huruf Latin, sama persis seperti di paspor (contoh: BUDI SANTOSO).',
    f_name_kana: 'Nama dalam huruf Katakana',
    h_name_kana: 'Isi jika Anda mengetahuinya (contoh: ブディ サントソ).',
    w_name_kana: 'Terdapat karakter selain Katakana lebar penuh (zenkaku). Anda tetap dapat mengirim formulir.',
    f_birth_date: 'Tanggal lahir',
    f_nationality: 'Kewarganegaraan',
    h_nationality: 'Contoh: Indonesia',
    f_country: 'Negara tempat tinggal saat ini',
    h_country: 'Contoh: Indonesia',
    f_address_current: 'Alamat saat ini (di luar Jepang)',
    h_address_current: 'Tuliskan alamat lengkap tanpa disingkat, termasuk nomor rumah, nama gedung, nomor kamar, dan kode pos.',

    f_jp_postal: 'Kode pos alamat terakhir di Jepang',
    h_jp_postal: '7 digit (contoh: 104-0033). Kode pos tempat tinggal terakhir Anda di Jepang.',
    h_jp_postal_link: 'Jika tidak tahu, Anda dapat mencarinya di layanan pencarian kode pos Japan Post (halaman berbahasa Jepang)',
    zip_searching: 'Mencari alamat…',
    zip_filled: 'Alamat telah diisi dari kode pos. Silakan tambahkan nomor rumah, nama gedung, dan nomor kamar.',
    zip_filled_partial: 'Sebagian alamat telah diisi dari kode pos. Silakan tambahkan sisanya (nama daerah, nomor rumah, gedung).',
    zip_notfound: 'Alamat untuk kode pos ini tidak ditemukan. Periksa kembali nomornya atau ketik alamat sendiri.',
    zip_error: 'Pengisian alamat otomatis tidak dapat digunakan. Silakan ketik alamat sendiri.',
    f_address_jp: 'Alamat terakhir di Jepang',
    h_address_jp: 'Alamat tempat tinggal terakhir Anda di Jepang (misalnya alamat yang tertera di kartu izin tinggal/zairyu card). Boleh dalam bahasa Jepang atau huruf Latin.',

    f_phone: 'Nomor telepon',
    f_phone_country: 'Kode negara',
    f_phone_number: 'Nomor',
    opt_phone_country: 'Pilih negara',
    e_phone_plus: 'Pilih kode negara di kolom “Kode negara” dan masukkan hanya nomornya di sini.',
    phone_preview: 'Nomor yang akan dikirim: {phone}',
    h_phone: 'Pilih kode negara, lalu masukkan nomor Anda. Angka 0 di depan tidak perlu (jika diketik, akan dihapus otomatis).',
    f_email: 'Alamat email',
    h_email: 'Email konfirmasi dan semua komunikasi selanjutnya akan dikirim ke alamat ini.',
    f_email_confirm: 'Alamat email (ulangi)',
    h_email_confirm: 'Masukkan sekali lagi alamat email yang sama untuk konfirmasi.',
    f_departure_date: 'Tanggal meninggalkan Jepang',

    f_has_notice: 'Apakah Anda sudah memiliki Surat Pemberitahuan Keputusan Pembayaran Uang Lump Sum?',
    h_has_notice: 'Yaitu surat “脱退一時金支給決定通知書” yang dikirim oleh Japan Pension Service (Layanan Pensiun Jepang).',
    opt_notice_yes: 'Ya, sudah punya',
    opt_notice_no: 'Belum',

    f_bank_name: 'Nama bank',
    h_bank_name: 'Contoh: Bank Mandiri',
    f_bank_branch: 'Nama cabang',
    f_swift: 'Kode SWIFT/BIC',
    h_swift: '8 atau 11 karakter huruf dan angka. Jika tidak tahu, tanyakan kepada bank Anda. Kode ini diperlukan untuk transfer.',
    f_account_number: 'Nomor rekening',
    f_account_holder: 'Nama pemilik rekening',
    h_account_holder: 'Tuliskan persis seperti yang terdaftar di bank (biasanya huruf Latin).',

    f_agree_east_tax: 'Saya meminta EAST TAX Accounting Office untuk mengurus prosedur pengajuan pengembalian pajak penghasilan.',
    f_agree_terms: 'Saya menyetujui Ketentuan Penggunaan.',
    terms_intro: 'Silakan baca Ketentuan Penggunaan sebelum mengirim.',
    terms_toggle: 'Baca Ketentuan Penggunaan',
    terms_view_translation: 'Bahasa Indonesia (terjemahan referensi)',
    terms_view_original: 'Teks asli bahasa Jepang (日本語)',
    terms_region_label: 'Teks lengkap Ketentuan Penggunaan',
    new_tab: '(terbuka di tab baru)',

    btn_submit: 'Kirim',
    btn_sending: 'Sedang mengirim…',
    sending_note: 'Pengiriman dapat memakan waktu hingga sekitar 30 detik. Mohon jangan tutup halaman ini.',

    e_required: 'Kolom ini wajib diisi.',
    e_required_choice: 'Silakan pilih salah satu.',
    e_required_check: 'Silakan centang kotak ini (persetujuan Anda diperlukan).',
    e_date_format: 'Masukkan tanggal yang benar (contoh: 1995-04-01).',
    e_date_future: 'Tanggal tidak boleh melewati hari ini.',
    e_date_order: 'Tanggal harus setelah tanggal lahir Anda.',
    e_postal: 'Masukkan kode pos 7 digit (contoh: 104-0033).',
    e_email: 'Format alamat email tidak benar.',
    e_email_mismatch: 'Alamat email tidak sama.',
    e_phone: 'Masukkan nomor dengan 4 sampai 15 digit angka (boleh memakai “-” dan spasi).',
    e_swift: 'Kode SWIFT/BIC terdiri dari 8 atau 11 karakter huruf dan angka.',
    e_server_field: 'Silakan periksa kolom ini.',
    e_summary: 'Ada {n} isian yang perlu diperbaiki.',
    e_validation: 'Permohonan Anda belum dapat diterima karena ada isian yang perlu diperbaiki. Silakan periksa kolom yang menampilkan pesan.',
    e_network: 'Formulir tidak dapat dikirim karena gangguan koneksi. Periksa koneksi internet Anda, lalu tekan “Kirim” lagi. Isian Anda tetap tersimpan. (Jika Anda sudah menerima email konfirmasi, permohonan Anda sudah diterima. Mohon jangan mengirim ulang.)',
    e_server: 'Permohonan Anda belum dapat diterima karena terjadi masalah di server. Silakan tunggu sebentar, lalu tekan “Kirim” lagi.',
    e_spam: 'Kiriman Anda tidak dapat diterima. Mohon maaf atas ketidaknyamanannya; silakan hubungi kami melalui email {email}.',
    e_contact: 'Jika masalah terus berlanjut, silakan hubungi {email}.',

    done_title: 'Permohonan Anda telah diterima',
    done_id_label: 'Nomor penerimaan',
    done_id_note: 'Nomor ini diperlukan saat Anda mengirim dokumen atau menghubungi kami. Mohon simpan nomor ini (misalnya dengan tangkapan layar).',
    done_mail: 'Kami telah mengirim email konfirmasi ke alamat email yang Anda masukkan.',
    done_mail_trouble: 'Jika email tidak ditemukan, periksa folder spam (junk). Jika tetap tidak ada, silakan hubungi {email}.',
    done_post_title: 'Selanjutnya, kirimkan dokumen melalui pos',
    done_notice_no: 'Jika Anda belum menerima Surat Pemberitahuan Keputusan Pembayaran, tunggu hingga surat tersebut tiba, lalu kirimkan semua dokumen sekaligus.',
    done_post_intro: 'Kirimkan dokumen berikut ke alamat di bawah ini.',
    done_doc1: '① **Asli** Surat Pemberitahuan Keputusan Pembayaran Uang Lump Sum (脱退一時金支給決定通知書)',
    done_doc2: '② **Fotokopi** kartu identitas (paspor)',
    done_memo: 'Masukkan **catatan bertuliskan nomor penerimaan Anda ({id})** ke dalam amplop.',
    done_address_title: 'Alamat pengiriman',
    done_address_ja_label: 'Dalam bahasa Jepang',
    done_address_en_label: 'Dalam bahasa Inggris',
    done_contact: 'Jika ada pertanyaan, silakan hubungi {email} dengan menyertakan nomor penerimaan Anda.',
    done_demo: 'Mode demo: tidak ada data yang benar-benar dikirim dan email konfirmasi tidak akan dikirim. Nomor penerimaan hanya contoh.',
    footer_contact: 'Kontak: {email}'
  };

  TERMS.id = {
    title: 'Ketentuan Penggunaan',
    note: 'Terjemahan bahasa Indonesia ini hanya sebagai referensi. Apabila terdapat perbedaan isi antara versi bahasa Jepang dan terjemahan ini, versi bahasa Jepang yang berlaku.',
    preamble: 'Ketentuan Penggunaan ini (selanjutnya disebut “Ketentuan ini”) menetapkan syarat-syarat penggunaan layanan (selanjutnya disebut “Layanan”) yang disediakan di situs web ini oleh EAST TAX Accounting Office dan Kantor Konsultan Ketenagakerjaan dan Jaminan Sosial (Sharoushi) East Labor (selanjutnya disebut “Pengelola”). Para pengguna terdaftar (selanjutnya disebut “Pengguna”) menggunakan Layanan sesuai dengan Ketentuan ini.',
    articles: [
      { h: 'Pasal 1 (Ruang Lingkup Penerapan)', lines: [
        'Ketentuan ini berlaku untuk seluruh hubungan antara Pengguna dan Pengelola yang berkaitan dengan penggunaan Layanan.'
      ] },
      { h: 'Pasal 2 (Pendaftaran Penggunaan)', lines: [
        '1. Pendaftaran penggunaan selesai apabila calon pendaftar mengajukan permohonan pendaftaran penggunaan dengan cara yang ditetapkan oleh Pengelola dan Pengelola menyetujuinya.',
        '2. Pengelola dapat tidak menyetujui permohonan pendaftaran penggunaan apabila menilai bahwa pemohon memiliki salah satu alasan berikut, dan Pengelola tidak berkewajiban sama sekali untuk mengungkapkan alasannya.',
        '(1) Apabila pemohon menyampaikan keterangan palsu pada saat mengajukan permohonan pendaftaran penggunaan',
        '(2) Apabila permohonan diajukan oleh orang yang pernah melanggar Ketentuan ini',
        '(3) Hal lain di mana Pengelola menilai bahwa pendaftaran penggunaan tidak layak'
      ] },
      { h: 'Pasal 3 (Penanganan Informasi Pribadi)', lines: [
        'Berdasarkan Layanan, Pengelola menggunakan informasi pribadi Pengguna untuk tujuan pengajuan pengembalian dana pensiun dan pengajuan pengembalian pajak penghasilan. Kecuali berdasarkan peraturan perundang-undangan, Pengelola tidak akan memberikan informasi pribadi Pengguna kepada pihak ketiga.'
      ] },
      { h: 'Pasal 4 (Biaya Penggunaan dan Cara Pembayaran)', lines: [
        'Sebagai imbalan atas penggunaan Layanan, Pengguna membayar biaya penggunaan yang ditetapkan tersendiri oleh Pengelola dan ditampilkan di situs web ini, dengan cara yang ditentukan oleh Pengelola.'
      ] },
      { h: 'Pasal 5 (Hubungan Kontrak Layanan)', lines: [
        'Pengguna menyetujui bahwa dengan meminta Kantor Konsultan Ketenagakerjaan dan Jaminan Sosial (Sharoushi) East Labor untuk menangani prosedur pengajuan Uang Lump Sum (脱退一時金), serta meminta EAST TAX Accounting Office untuk menangani prosedur pengembalian pajak penghasilan yang berkaitan dengan Uang Lump Sum tersebut, kontrak terbentuk untuk masing-masing layanan tersebut.'
      ] },
      { h: 'Pasal 6 (Larangan)', lines: [
        'Dalam menggunakan Layanan, Pengguna dilarang melakukan tindakan-tindakan berikut:',
        '(1) Tindakan yang melanggar peraturan perundang-undangan atau ketertiban umum dan kesusilaan',
        '(2) Tindakan yang berkaitan dengan tindak pidana',
        '(3) Tindakan merusak atau mengganggu fungsi server atau jaringan Pengelola',
        '(4) Tindakan yang berpotensi mengganggu pengoperasian layanan Pengelola',
        '(5) Tindakan mengumpulkan atau menyimpan informasi pribadi dan sebagainya mengenai pengguna Pengelola',
        '(6) Tindakan menyamar sebagai pengguna Pengelola',
        '(7) Tindakan memberikan keuntungan secara langsung maupun tidak langsung kepada kelompok antisosial sehubungan dengan layanan Pengelola',
        '(8) Tindakan lain yang dinilai tidak pantas oleh Pengelola'
      ] },
      { h: 'Pasal 7 (Penghentian Penyediaan Layanan dan Sebagainya)', lines: [
        '1. Pengelola dapat menghentikan atau menangguhkan penyediaan seluruh atau sebagian Layanan tanpa pemberitahuan terlebih dahulu kepada Pengguna apabila menilai terdapat salah satu alasan berikut:',
        '(1) Apabila dilakukan pemeliharaan, pemeriksaan, atau pembaruan sistem komputer yang berkaitan dengan Layanan',
        '(2) Apabila penyediaan Layanan menjadi sulit karena keadaan kahar seperti gempa bumi, sambaran petir, kebakaran, pemadaman listrik, atau bencana alam',
        '(3) Apabila komputer atau jalur komunikasi dan sebagainya berhenti karena kecelakaan',
        '(4) Hal lain di mana Pengelola menilai bahwa penyediaan Layanan sulit dilakukan',
        '2. Pengelola tidak bertanggung jawab sama sekali, dengan alasan apa pun, atas kerugian atau kerusakan apa pun yang diderita oleh Pengguna atau pihak ketiga akibat penghentian atau penangguhan penyediaan Layanan.'
      ] },
      { h: 'Pasal 8 (Pembatasan Penggunaan dan Penghapusan Pendaftaran)', lines: [
        '1. Dalam hal-hal berikut, Pengelola dapat, tanpa pemberitahuan terlebih dahulu, membatasi penggunaan seluruh atau sebagian Layanan oleh Pengguna, atau menghapus pendaftaran Pengguna sebagai pengguna:',
        '(1) Apabila Pengguna melanggar salah satu pasal dalam Ketentuan ini',
        '(2) Apabila diketahui bahwa terdapat fakta palsu dalam data pendaftaran',
        '(3) Hal lain di mana Pengelola menilai bahwa penggunaan Layanan tidak layak',
        '2. Pengelola tidak bertanggung jawab sama sekali atas kerugian yang timbul pada Pengguna akibat tindakan yang dilakukan oleh Pengelola berdasarkan Pasal ini.'
      ] },
      { h: 'Pasal 9 (Pembebasan Tanggung Jawab)', lines: [
        '1. Tanggung jawab Pengelola atas wanprestasi dibebaskan, kecuali apabila wanprestasi tersebut disebabkan oleh kesengajaan atau kelalaian berat Pengelola.',
        '2. Dalam pengajuan pengembalian dana pensiun atau pengajuan pengembalian pajak penghasilan dalam Layanan, apabila sampai dengan 2 (dua) minggu sebelum batas waktu pengajuan menurut undang-undang seluruh dokumen yang diperlukan untuk masing-masing pengajuan belum lengkap, sehingga pengajuan tidak dilakukan sampai batas waktu tersebut, Pengelola tidak bertanggung jawab atas hal tersebut.',
        '3. Pengelola tidak bertanggung jawab sama sekali atas transaksi, komunikasi, atau sengketa dan sebagainya yang timbul antara Pengguna dengan pengguna lain atau pihak ketiga sehubungan dengan Layanan.'
      ] },
      { h: 'Pasal 10 (Perubahan Ketentuan Penggunaan)', lines: [
        'Pengelola dapat mengubah Ketentuan ini sewaktu-waktu tanpa pemberitahuan kepada Pengguna apabila dianggap perlu.'
      ] },
      { h: 'Pasal 11 (Pemberitahuan atau Komunikasi)', lines: [
        'Pemberitahuan atau komunikasi antara Pengguna dan Pengelola dilakukan dengan cara yang ditetapkan oleh Pengelola.'
      ] },
      { h: 'Pasal 12 (Larangan Pengalihan Hak dan Kewajiban)', lines: [
        'Pengguna tidak dapat mengalihkan kedudukan dalam kontrak penggunaan atau hak maupun kewajiban berdasarkan Ketentuan ini kepada pihak ketiga, atau menjadikannya sebagai jaminan, tanpa persetujuan tertulis terlebih dahulu dari Pengelola.'
      ] },
      { h: 'Pasal 13 (Ketentuan Umum)', lines: [
        '1. Dalam penafsiran Ketentuan ini, hukum Jepang berlaku sebagai hukum yang mengatur.',
        '2. Apabila timbul sengketa sehubungan dengan Layanan, Pengadilan Distrik Tokyo (Tokyo District Court) ditetapkan sebagai pengadilan yang berwenang secara eksklusif berdasarkan kesepakatan.'
      ] }
    ]
  };

  root.I18N = I18N;
  root.I18N_TERMS = TERMS;
})(typeof window !== 'undefined' ? window : globalThis);
