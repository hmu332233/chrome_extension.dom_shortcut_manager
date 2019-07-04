import hotkeys from 'hotkeys-js';

hotkeys('ctrl+alt+k', function(event, handler){
  event.preventDefault();
});


// inject dov
var app = document.createElement('div');
app.id = "dom_shortcut_management_app";
document.body.prepend(app);

// inject script
var s = document.createElement('script');
s.src = chrome.extension.getURL('build/popup.js');
(document.head || document.documentElement).appendChild(s);

s.parentNode.removeChild(s);