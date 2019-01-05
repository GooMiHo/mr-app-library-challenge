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

const ranMultiTimes = createRanMultiTimesFunc();

export default ranMultiTimes;
