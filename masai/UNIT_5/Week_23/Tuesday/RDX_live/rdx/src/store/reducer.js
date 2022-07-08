import { AddCount } from "./actions";
import { SubCount } from "./actions";
const initState = {
  count: 0,
};
export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case AddCount:
      return {
        ...state,
        count: state.count + payload,
      };

    case SubCount:
      return {
        ...state,
        count: state.count - payload,
      };
    default:
      return state;
  }
};
