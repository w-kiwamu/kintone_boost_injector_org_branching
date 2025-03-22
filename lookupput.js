//  https://w-kiwamu.github.io/kintone_boost_injector_org_branching/lookupput.js

(() => {
"use strict";
kb.event.on('kb.create.load', (event) => {
//kb.event.on('kb.edit.load', (event) => {
 console.log('取得したイベントの情報:', event);
 //alert('aaaaa');
 //record['ルックアップ_0'].value = '0001'; // ルックアップフィールドの値
 //record['ルックアップ_0'].lookup = true; // またはrecord['ルックアップ_0'].lookup = 'UPDATE';
 //record['branch_ID'].value = '23004'; // ルックアップフィールドの値



// 別の変数を使用して試してみる
const myEvent = event;
myEvent.record['自由記載'].value = 'この文字列で上書き';

myEvent.record['branch_ID'].value = '23004'; // ルックアップフィールドの値
myEvent.record['branch_ID'].lookup = true; // またはrecord['branch_ID'].lookup = 'UPDATE';
 //record['branch_ID'].lookup = true; // またはrecord['branch_ID'].lookup = 'UPDATE';
return event;
});
})();
