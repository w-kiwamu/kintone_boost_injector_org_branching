(() => {
    'use strict';
    //kintone.events.on('app.record.create.show', (event) => {
    kb.event.on('kb.create.load', (event) => {
    alert('あいうえお');
    console.log('あいうえお');
    const record = event.record;
    record['事業所番号'].value = '23004';
    record['事業所番号'].lookup = true;
    return event;
  });
})();
