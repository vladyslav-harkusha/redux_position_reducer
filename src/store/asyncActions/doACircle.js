import { positionActions } from '../positionReducer';

export const asyncActions = {
  doACircle: (delay) => (dispatch) => {
    return new Promise(resolve => {
      dispatch(positionActions.moveRight());

      setTimeout(() => {
        dispatch(positionActions.moveDown());
      }, delay);

      setTimeout(() => {
        dispatch(positionActions.moveLeft());
      }, 2 * delay);

      setTimeout(() => {
        dispatch(positionActions.moveUp());

        resolve();
      }, 3 * delay);
    });
  },
};