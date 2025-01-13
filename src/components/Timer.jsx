import { useState, useEffect } from "react";

const Timer = ({ hours = 22 }) => {
  const [timeLeft, setTimeLeft] = useState(hours * 3600); // Convert hours to seconds
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    // Reset timer when hours prop changes
    setTimeLeft(hours * 3600);
    setIsRunning(true);
  }, [hours]);

  useEffect(() => {
    let timer;

    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [timeLeft, isRunning]);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;

    return {
      hours: h.toString().padStart(2, "0"),
      minutes: m.toString().padStart(2, "0"),
      seconds: s.toString().padStart(2, "0"),
    };
  };

  const { hours: h, minutes: m, seconds: s } = formatTime(timeLeft);

  return (
    <div className="flex flex-col w-fit items-center  px-1">
      {/* Timer Display */}
      <div className="grid grid-cols-3 gap-2 md:gap-4 text-center">
        <div className="flex flex-col">
          <div className="md:text-3xl font-bold text-red">{h}</div>
          <div className="text-sm text-gray-500">Hours</div>
        </div>
        <div className="flex flex-col">
          <div className="md:text-3xl font-bold text-red">{m}</div>
          <div className="text-sm text-gray-500">Minutes</div>
        </div>
        <div className="flex flex-col">
          <div className="md:text-3xl font-bold text-red">{s}</div>
          <div className="text-sm text-gray-500">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
