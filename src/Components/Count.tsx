import { useState, useEffect } from "react";
function Count() {
  const [count, setCount] = useState(1);
  useEffect(() => {
    console.log(`Mounted or Re-render lần ${count}`);
    return () => {
      console.log(`Clean up lần ${count}`);
    };
  }, [count]);
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => setCount(count + 1)}
        className="px-3 py-1 border border-gray-400 rounded-lg"
      >
        Click me
      </button>
    </div>
  );
}
export default Count;
