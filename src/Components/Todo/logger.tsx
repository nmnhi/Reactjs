function logger(reducer: any) {
  return (prevState: any, action: any) => {
    console.group(action.type);
    console.log("Action:", action);
    console.log("Prev state:", prevState);
    const newState = reducer(prevState, action);
    console.log("Next state", newState);
    console.groupEnd();
    return newState;
  };
}
export default logger;
