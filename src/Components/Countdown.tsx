import { useState, useEffect } from "react";
// Timers: setInterval, setTimeout, clearInterval, clearTimeout
// Closure

function Countdown() {
  const [countdown, setCountdown] = useState(180);

  // Method 1 using setInterval
  useEffect(() => {
    const timerId = setInterval(() => {
      setCountdown((prevState) => prevState - 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  //   Method 2 using Timeout
  //   useEffect(() => {
  //     setTimeout(() => {
  //       setCountdown(countdown - 1);
  //     }, 1000);
  //   }, [countdown]);

  return (
    <div>
      <h1>{countdown}</h1>
    </div>
  );
}
export default Countdown;
