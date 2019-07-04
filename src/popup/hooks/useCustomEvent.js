import { useMemo, useCallback } from 'react';

function useCustomEvent(id, data = {}) {
  const customEvent = useMemo(() => (new CustomEvent(id, { detail: data })), []);
  const trigger = useCallback(() => document.dispatchEvent(customEvent), []);
  return [customEvent, trigger];
}

export default useCustomEvent;