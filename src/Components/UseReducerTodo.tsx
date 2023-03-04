import { useReducer, useRef } from "react";
// Init state
const initState = {
  job: "",
  jobs: [],
};

// Action
const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DEL_JOB = "del_job";

const setJob = (payload: any) => {
  return {
    type: SET_JOB,
    payload,
  };
};

const addJob = (payload: any) => {
  return {
    type: ADD_JOB,
    payload,
  };
};

const delJob = (payload: any) => {
  return {
    type: DEL_JOB,
    payload,
  };
};

// Reducer
const reducer = (state: any, action: any) => {
  console.log(action);
  let newState;
  switch (action.type) {
    case SET_JOB:
      newState = {
        ...state,
        job: action.payload,
      };
      break;
    case ADD_JOB:
      newState = {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
      break;
    case DEL_JOB:
      let newJobs = [...state.jobs];
      newJobs.splice(action.payload, 1);
      newState = {
        ...state,
        jobs: newJobs,
      };
      break;
    default:
      throw new Error("Invalid action");
  }
  return newState;
};
// Dispatch

function Todo() {
  // State manage value job and jobs, dispatch manage action function ex: setJob()
  const [state, dispatch] = useReducer(reducer, initState);
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
export default Todo;
