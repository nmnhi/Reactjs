import { useReducer, useRef } from "react";
import reducer, { initState } from "./reducer";
import { setJob, addJob, delJob } from "./dist/action";
import logger from "./logger";

// Dispatch

function TodoApp() {
  // State manage value job and jobs, dispatch manage action function ex: setJob()
  const [state, dispatch] = useReducer(logger(reducer), initState);
  const { job, jobs }: any = state;

  const inputRef = useRef<any>();
  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(""));
    inputRef.current.focus();
  };

  return (
    <div>
      <h3 className=" my-4 font-bold text-gray-700">Todo</h3>
      <input
        ref={inputRef}
        value={job}
        className="border border-gray-400 rounded-lg py-1 px-3 mr-4"
        type="text"
        placeholder="Enter todo..."
        onChange={(e) => dispatch(setJob(e.target.value))}
      />
      <button
        onClick={handleSubmit}
        className="px-3 py-1 border border-blue-400 rounded-lg bg-blue-400 text-white"
      >
        Add
      </button>
      {state.jobs.length !== 0 && (
        <div className="mt-4 border border-gray-400 rounded-lg max-w-[300px] px-4 py-4">
          {jobs.map((job: any, index: number) => (
            <div key={index} className="flex items-center">
              <li className="w-full bg-gray-200 px-2 py-3 rounded-lg my-1 max-w-[150px]">
                {job}
              </li>
              <button
                onClick={() => dispatch(delJob(index))}
                className="border border-red-500 bg-red-400 ml-3 rounded-lg w-[100px] h-12 text-center"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default TodoApp;
