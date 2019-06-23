const { getDomPath } = require('./modules/dom');

document.addEventListener(
  'click',
  e => {
    console.log(getDomPath(e.target));
  },
  false
);
