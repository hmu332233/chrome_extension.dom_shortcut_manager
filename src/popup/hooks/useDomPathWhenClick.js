import { useState, useEffect } from 'react';
import { getDomPath } from 'utils/dom';

function useDomPathWhenClick(initStatus = false) {
  const [value, setValue] = useState('');
  const setDomPathByEvent = event => {setValue(getDomPath(event.target)); console.log('call!')};

  useEffect(() => {
    document.addEventListener('click', setDomPathByEvent, false);
    return () => {
      document.removeEventListener('click', setDomPathByEvent);
    }
  }, []);

  return [value];
}

export default useDomPathWhenClick;