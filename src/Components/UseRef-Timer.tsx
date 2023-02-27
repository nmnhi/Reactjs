import { useState, useRef, useEffect } from "react";
// Lưu các giá trị qua một tham chiếu bên ngoài
// function component

function UseRefTimer() {
  const [count, setCount] = useState(60);

  let timer: any;
  const timerId = useRef(timer);
  const prevCount = useRef(timer);
  const h1Ref = useRef(timer);

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  useEffect(() => {
    console.log(h1Ref.current);
  });

  const handleStart = () => {
    timerId.current = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(timerId.current);
  };

  console.log(count, prevCount.current);

  return (
    <div>
      <h1 ref={h1Ref}>{count}</h1>
      <button
        onClick={handleStart}
        className="px-3 py-1 border border-gray-400 rounded-lg"
      >
        Start
      </button>
      <button
        onClick={handleStop}
        className="px-3 py-1 border border-gray-400 rounded-lg ml-2"
      >
        Stop
      </button>
    </div>
  );
}
export default UseRefTimer;
