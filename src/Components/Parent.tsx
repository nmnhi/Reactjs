import { useState, useCallback } from "react";
import Children from "./Children";
function Parent() {
  const [count, setCount] = useState(0);

  const handleIncrease = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <Children onIncrease={handleIncrease} />
      <h1>{count}</h1>
    </div>
  );
}
export default Parent;
