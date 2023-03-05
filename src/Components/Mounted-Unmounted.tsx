import Content from "./Content";
import { useState } from "react";
import Resize from "./Resize";
import Countdown from "./Countdown";
import Count from "./Count";
import Avatar from "./SelectAvatar";
import Chat from "./FakeChat";
import UseLayoutEffect from "./UseLayoutEffect";
import UseRefTimer from "./UseRef-Timer";
import Memo from "./React-Memo";
import Parent from "./Parent";
import AddProduct from "./Add-Product";
import UseReducer from "./useReducer";
import Todo from "./UseReducerTodo";
import Staff from "./TodoStaff";
import TodoApp from "./Todo";

// Mounted & Unmounted
// Mount là thời điểm đưa 1 component vào sử dụng còn unmounted là thời đưa component ra khỏi và không sử dụng nó nữa

function Mounted() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button
        onClick={() => setShow(!show)}
        className="px-4 py-2 border border-gray-400 rounded-lg"
      >
        Show
      </button>
      {/* {show && <Content />} */}
      {/* {show && <Resize />} */}
      {/* {show && <Countdown />} */}
      {/* {show && <Count />} */}
      {/* {show && <Avatar />} */}
      {/* {show && <Chat />} */}
      {/* {show && <UseLayoutEffect />} */}
      {/* {show && <UseRefTimer />} */}
      {/* {show && <Memo />} */}
      {/* {show && <Parent />} */}
      {/* {show && <AddProduct />} */}
      {/* {show && <UseReducer />} */}
      {/* {show && <Todo />} */}
      {show && <TodoApp />}
    </div>
  );
}
export default Mounted;
