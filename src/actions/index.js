import { DECREMENT, INCREMENT } from "../types";

const actions = dispatch => ({
  increaseCounter: () => dispatch({ type: INCREMENT }),
  decreaseCounter: () => dispatch({ type: DECREMENT })
});

export default actions;
