const toggleOnCreator = () => {
  let isOn = true;
  return function () {
    isOn = !isOn;
    return isOn;
  };
};

const toggleOn = toggleOnCreator();

export default toggleOn;
