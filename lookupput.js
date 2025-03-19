(() => {
"use strict";
kb.event.on('kb.create.load', (event) => {
 console.log(event);
 //record['ルックアップ_0'].value = '0001'; // ルックアップフィールドの値
 //record['ルックアップ_0'].lookup = true; // またはrecord['ルックアップ_0'].lookup = 'UPDATE';
 record['事業所番号'].value = '23004'; // ルックアップフィールドの値
 record['事業所番号'].lookup = true; // またはrecord['事業所番号'].lookup = 'UPDATE';
return event;
});
})();
