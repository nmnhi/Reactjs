import { memo } from "react";

function Children({ onIncrease }: any) {
  console.log("Re-render");
  return (
    <div>
      <button
        onClick={onIncrease}
        className="px-3 py-1 border border-gray-400 rounded-lg"
      >
        Click me!
      </button>
      <h1>Hello World</h1>
    </div>
  );
}
export default memo(Children);
