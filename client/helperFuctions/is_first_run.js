function createRanMultiTimesFunc() {
  let count = 0;
  return () => {
    if (count < 1) {
      count++;
      return false;
    }
    return true;
  };
}

const isFirstRun = createRanMultiTimesFunc();

export default isFirstRun;
