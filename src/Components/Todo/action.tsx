import { SET_JOB, ADD_JOB, DEL_JOB } from "./const";

export const setJob = (payload: any) => {
  return {
    type: SET_JOB,
    payload,
  };
};

export const addJob = (payload: any) => {
  return {
    type: ADD_JOB,
    payload,
  };
};

export const delJob = (payload: any) => {
  return {
    type: DEL_JOB,
    payload,
  };
};
