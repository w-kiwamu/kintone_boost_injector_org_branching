(() => {
"use strict";
//kb.event.on('kb.create.load', (event) => {
kb.event.on('kb.edit.load', (event) => {
 //console.log('あいうえお');
 
 console.log(event);
 //record['ルックアップ_0'].value = '0001'; // ルックアップフィールドの値
 //record['ルックアップ_0'].lookup = true; // またはrecord['ルックアップ_0'].lookup = 'UPDATE';
 record['branch_ID'].value = '23004'; // ルックアップフィールドの値
 //record['branch_ID'].lookup = true; // またはrecord['branch_ID'].lookup = 'UPDATE';
return event;
});
})();
