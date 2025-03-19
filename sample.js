(() => {
  'use strict';
  kintone.events.on('app.record.create.show', (event) => {
    const record = event.record;
    alert('あいうえお');
    console.log('あいうえお');
    //record['Hello'].value = 'こんにちは、kintone!';
    return event;
  });
})();
