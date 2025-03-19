(() => {
"use strict";
kb.event.on('kb.create.load', (event) => {
 console.log(event);
return event;
});
})();
