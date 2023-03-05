import { SET_JOB, ADD_JOB, DEL_JOB } from "./const";

// Init state
export const initState = {
  job: "",
  jobs: [],
};

// Reducer
const reducer = (state: any, action: any) => {
  switch (action.type) {
    case SET_JOB:
      return {
        ...state,
        job: action.payload,
      };

    case ADD_JOB:
      return {
        ...state,
        jobs: [...state.jobs, action.payload],
      };

    case DEL_JOB:
      let newJobs = [...state.jobs];
      newJobs.splice(action.payload, 1);
      return {
        ...state,
        jobs: newJobs,
      };

    default:
      throw new Error("Invalid action");
  }
};

export default reducer;
