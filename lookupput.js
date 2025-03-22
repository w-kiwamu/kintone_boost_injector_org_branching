//  https://w-kiwamu.github.io/kintone_boost_injector_org_branching/lookupput.js

(() => {
"use strict";
kb.event.on('kb.create.load', (event) => {
//kb.event.on('kb.edit.load', (event) => {
 console.log(event);
 //alert('aaaaa');
 //record['ルックアップ_0'].value = '0001'; // ルックアップフィールドの値
 //record['ルックアップ_0'].lookup = true; // またはrecord['ルックアップ_0'].lookup = 'UPDATE';
 //record['branch_ID'].value = '23004'; // ルックアップフィールドの値

// エラーメッセージを詳しく確認
try {
  event.record['自由記載'].value = 'この文字列で上書き';
} catch (e) {
  console.error('エラーの詳細:', e);
}

// イベントオブジェクトの構造を確認
console.log('イベントオブジェクト:', JSON.stringify(event));
console.log('recordプロパティ:', event.record);
console.log('自由記載フィールド:', event.record['自由記載']);

// 別の変数を使用して試してみる
const myEvent = event;
myEvent.record['自由記載'].value = 'この文字列で上書き';

 


 
 //event.record['自由記載'].value = 'この文字列で上書き';
 //record['branch_ID'].lookup = true; // またはrecord['branch_ID'].lookup = 'UPDATE';
return event;
});
})();
