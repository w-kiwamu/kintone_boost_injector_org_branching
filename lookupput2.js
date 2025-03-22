//  https://w-kiwamu.github.io/kintone_boost_injector_org_branching/lookupput2.js

(() => {
"use strict";
kb.event.on('kb.create.load', (event) => {

// パス部分（例：/page）
const pathname = window.location.pathname;
console.log(pathname.replaceAll("/", "").replace("asc2test", ""));
 
console.log('取得したイベントの情報:', event);
//alert('aaaaa');

// 別の変数を使用してイベントを操作
const myEvent = event;
myEvent.record['備考'].value = 'この文字列で上書き';

myEvent.record['抽出ID'].value = pathname.replaceAll("/", "")..replace("asc2test", ""); // ルックアップフィールドの値
myEvent.record['抽出ID'].lookup = true; // アップデート
 
return event;
});
})();
