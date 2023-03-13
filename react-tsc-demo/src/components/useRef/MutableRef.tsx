import { useRef, useState, useEffect } from "react";

export default function MutableRef() {
  const [timer, setTimer] = useState(0);
  const interValRef = useRef(null);

  const stopTimer = () => {
    window.clearInterval(interValRef.current);
  };

  useEffect(() => {
    interValRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    return () => {
      stopTimer();
    };
  }, []);

  return (
    <div>
      HookTimer - {timer} -
      <button type="button" onClick={() => stopTimer()}>
        Stop Timer
      </button>
    </div>
  );
}
