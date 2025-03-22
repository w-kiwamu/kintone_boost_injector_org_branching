//  https://w-kiwamu.github.io/kintone_boost_injector_org_branching/lookupput.js

(() => {
"use strict";
kb.event.on('kb.create.load', (event) => {

// パス部分（例：/page）
const pathname = window.location.pathname.replaceAll("/", "");
console.log(pathname);
 
console.log('取得したイベントの情報:', event);
//alert('aaaaa');

// 別の変数を使用してイベントを操作
const myEvent = event;
myEvent.record['自由記載'].value = 'この文字列で上書き';

myEvent.record['branch_ID'].value = '23004'; // ルックアップフィールドの値
myEvent.record['branch_ID'].lookup = true; // アップデート
 
return event;
});
})();
