(() => {
"use strict";
const handler = (event) => {
//console.log(event);
 alart("kiwamu");
};
kb.event.on('kb.view.load', handler);
 
kb.event.off('kb.view.load', handler);
})();
