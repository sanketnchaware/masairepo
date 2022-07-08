export const incNumber = (num) => {
  return {
    type: "INCREASE",
    payload: num,
  };
};

export const decNumber = (num) => {
  return {
    type: "DECREASE",
    payload: num,
  };
};
