//  https://w-kiwamu.github.io/kintone_boost_injector_org_branching/lookupput2.js

(() => {
"use strict";
kb.event.on('kb.create.load', (event) => {

// 別の変数を使用してイベントを操作
const myEvent = event;

//URLの最後の部分を取得
const pathname = window.location.pathname;
 
//myEvent.record['備考'].value = 'この文字列で書き';

myEvent.record['抽出ID'].value = pathname.replaceAll("/", "").replace("asc2test", ""); // ルックアップフィールドの値
myEvent.record['抽出ID'].lookup = true; // アップデート
 
return event;
});
})();
