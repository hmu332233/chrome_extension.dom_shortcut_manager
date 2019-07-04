import { getDomPath } from './modules/dom';
import hotkeys from 'hotkeys-js';
 
let domPath = '';

document.addEventListener(
  'click',
  e => {
    domPath = getDomPath(e.target);
    console.log(domPath);
  },
  false
);

hotkeys('ctrl+alt+k', function(event, handler){
  event.preventDefault();
  document.querySelector(domPath).click();
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