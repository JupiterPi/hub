import {useState} from "react";

export default function useEphemeralState<T>(initialValue: T, timeout: number): [T, (value: T) => void] {
  const [state, setStateInternal] = useState<T>(initialValue);
  const [timeoutReference, setTimeoutReference] = useState<NodeJS.Timeout | null>(null);
  const setState = (value: T) => {
    setStateInternal(value);
    if (timeoutReference) clearTimeout(timeoutReference);
    setTimeoutReference(setTimeout(() => setStateInternal(initialValue), timeout));
  };
  return [state, setState];
}