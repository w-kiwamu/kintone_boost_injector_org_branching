//  https://w-kiwamu.github.io/kintone_boost_injector_org_branching/lookupput2.js

(() => {
"use strict";
kb.event.on('kb.create.load', (event) => {
console.log(kb.operator.domain); // サブドメインをコンソールに出力
console.log(Object.keys(kb));
console.log(kb); // kintone_boosterオブジェクトを表示

// 別の変数を使用してイベントを操作
const myEvent = event;
  
console.log(myEvent); // マイイベントを表示

//URLの最後の部分を取得
const pathname = window.location.pathname;

//ルックアップフィールド（アプリコードが↓では　抽出ID）にBoost! Injector用URLの最後にあるフォルダ名から、"asc2test"を削除した文字を設定。そうなるようにフォルダ名と抽出IDが一致するよう事前にkintoneアプリを設計する必要がある。
myEvent.record['抽出ID'].value = pathname.replaceAll("/", "").replace("asc2test", ""); // ルックアップフィールドの値を決める
myEvent.record['抽出ID'].lookup = true; // ルックアップフィールドをInjectorの画面上でアップデート
myEvent.record['抽出ID'].disabled = true; // ルックアップフィールドをInjectorの画面上で編集不可にする



//kb.injector.app.fields['事業所'].hideExpression = true; // フィールドをInjectorの画面上で非表示にする
//kb.injector.setFieldShown('事業所', false); // フィールドを非表示にする

  
myEvent.record['主キー'].disabled = true; // ルックアップフィールドをInjectorの画面上で編集不可にする
//kb.injector.app.fields['主キー'].hideExpression = true; // フィールドをInjectorの画面上で非表示にする
  
return event;
});
})();
