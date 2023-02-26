import { useLayoutEffect, useState } from "react";
// A. useEffect
// 1. Cập nhật lại state
// 2. Cập nhật lại DOM (mutate)
// 3. Render lại UI
// 4. Gọi clear up fuction khi deps thay đổi
// 5. Gọi useEffect callback

// B. useLayoutEffect
// 1. Cập nhật lại state
// 2. Cập nhật lại DOM (mutate)
// 3. Gọi clear up function khi deps thay đổi (sync)
// 4. Gọi useEffect callback (sync)
// 5. Render lại UI

function UseLayoutEffect() {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    if (count > 3) {
      setCount(0);
    }
  }, [count]);

  const handleRun = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={handleRun}
        className="px-3 py-1 border border-gray-400 rounded-lg"
      >
        Run
      </button>
    </div>
  );
}
export default UseLayoutEffect;
