//  https://w-kiwamu.github.io/kintone_boost_injector_org_branching/lookupput2.js

(() => {
"use strict";
kb.event.on('kb.create.load', (event) => {

// 別の変数を使用してイベントを操作
const myEvent = event;

//URLの最後の部分を取得
const pathname = window.location.pathname;

//ルックアップフィールド（アプリコードが↓では　抽出ID）にBoost! Injector用URLの最後にあるフォルダ名から、"asc2test"を削除した文字を設定。そうなるようにフォルダ名と抽出IDが一致するよう事前にkintoneアプリを設計する必要がある。
myEvent.record['抽出ID'].value = pathname.replaceAll("/", "").replace("asc2test", ""); // ルックアップフィールドの値を決める
myEvent.record['抽出ID'].lookup = true; // ルックアップフィールドをがInjectorの画面上でアップデート

//kintone環境URL・サブドメイン　　https://qiita.com/souma-h/items/b05b5c084d06c6a908d0  より
//const url = kintone.api.url('/k/v1/records.json', false);
//const subDomein = url.match(/^https:\/\/([^.]+)/)[1];  // httpsプロトコルの後からドットまでの文字列を抽出
//console.log(subDomein)
//console.log(kintone.app.record.getId());
  
return event;
});
})();
