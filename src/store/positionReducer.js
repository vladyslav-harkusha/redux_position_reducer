const defaultState = {
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
};

export const positionReducer = (state = defaultState, action) => {
  switch (action.type) {
    case MOVE_LEFT:
      return state;

    case MOVE_RIGHT:
      return state;

    case MOVE_UP:
      return state;

    case MOVE_DOWN:
      return state;
  
    default:
      return state;
  }
}