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