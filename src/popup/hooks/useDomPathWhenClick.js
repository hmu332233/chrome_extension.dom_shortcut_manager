import { useState, useEffect } from 'react';
import { getDomPath } from 'utils/dom';

function useDomPathWhenClick({ excepts } = {}) {
  const [value, setValue] = useState('');
  const setDomPathByEvent = event => {
    const domPath = getDomPath(event.target);

    const isException = excepts.some(id => domPath.indexOf(id) !== -1);
    if (isException) return;

    setValue(domPath);
  };

  useEffect(() => {
    document.addEventListener('click', setDomPathByEvent, false);
    return () => {
      document.removeEventListener('click', setDomPathByEvent);
    }
  }, []);

  return [value];
}

export default useDomPathWhenClick;