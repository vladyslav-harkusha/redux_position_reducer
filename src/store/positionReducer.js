

const defaultPosition = {
  x: 0,
  y: 0,
}

const MOVE_LEFT = 'MOVE_LEFT';
const MOVE_RIGHT = 'MOVE_RIGHT';
const MOVE_UP = 'MOVE_UP';
const MOVE_DOWN = 'MOVE_DOWN';

export const actions = {
  moveLeft: () => ({ type: MOVE_LEFT }),
  moveRight: () => ({ type: MOVE_RIGHT }),
  moveUp: () => ({ type: MOVE_UP }),
  moveDown: () => ({ type: MOVE_DOWN }),
  doACircle: (delay) => (dispatch) => {
    return new Promise(resolve => {
      dispatch(actions.moveRight());

      setTimeout(() => {
        dispatch(actions.moveDown());
      }, delay);

      setTimeout(() => {
        dispatch(actions.moveLeft());
      }, 2 * delay);

      setTimeout(() => {
        dispatch(actions.moveUp());

        resolve();
      }, 3 * delay);
    });
  },
};

export const positionReducer = (position = defaultPosition, action) => {
  switch (action.type) {
    case MOVE_LEFT:
      return { ...position, x: position.x - 1};

    case MOVE_RIGHT:
      return { ...position, x: position.x + 1 };

    case MOVE_UP:
      return { ...position, y: position.y + 1 };

    case MOVE_DOWN:
      return { ...position, y: position.y - 1 };
  
    default:
      return position;
  }
}