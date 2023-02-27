import { useState } from "react";
import ContentMemo from "./Content-Memo";
// 1. memo() => Higher Order Component (HOC)
// 2. useCallback()
//  - Reference type
//  - React memo()

// Hook
// HOC
// Render props

function Memo() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div>
      <ContentMemo count={count} />
      <h1>{count}</h1>
      <button
        onClick={handleIncrease}
        className="px-3 py-1 border border-gray-400 rounded-lg"
      >
        Click me
      </button>
    </div>
  );
}
export default Memo;
