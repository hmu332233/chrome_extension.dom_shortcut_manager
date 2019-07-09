import hotkeys from 'hotkeys-js';

// inject dov
var app = document.createElement('div');
app.id = "dom_shortcut_management_app";
document.body.prepend(app);

// inject script
var s = document.createElement('script');
s.src = chrome.extension.getURL('build/popup.js');
(document.head || document.documentElement).appendChild(s);

s.parentNode.removeChild(s);



let domPath = '';

document.addEventListener('aaa', e => {
  domPath = e.detail;
  console.log(e)
  console.log(domPath)
});

hotkeys('ctrl+alt+k', { keyup: true }, function(event, handler) {
  if(event.type === 'keyup') {
    document.querySelector(domPath).click();
    event.preventDefault();
  }
});
