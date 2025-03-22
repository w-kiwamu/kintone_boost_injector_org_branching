(() => {
  'use strict';
  kintone.events.on('app.record.create.show', (event) => {
    const record = event.record;
    alert('あいうえお');
    console.log(event);
    
    record['branch_ID'].value = '23004'; // ルックアップフィールドの値
    record['branch_ID'].lookup = true; // またはrecord['branch_ID'].lookup = 'UPDATE';

    record['自由記載'].value = 'この文字列で上書き';
    
    //record['Hello'].value = 'こんにちは、kintone!';
    return event;
  });
})();
