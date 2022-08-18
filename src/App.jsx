import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { positionActions } from './store/positionReducer';
import { asyncActions } from './store/asyncActions/doACircle';

function App() {
  const dispatch = useDispatch();
  const coordX = useSelector(state => state.x);
  const coordY = useSelector(state => state.y);

  const step = 40;
  const styleForCube = { transform: `translate(${coordX * step}px, ${-coordY * step}px)` };

  const getDistanceTo = (X, Y) => {
    const startX = 0;
    const startY = 0;

    return Math.abs(X - startX) + Math.abs(Y - startY)
  };
  const distance = getDistanceTo(coordX, coordY);

  const goCircleAsync = () => {
    dispatch(asyncActions.doACircle(300))
      .then(() => {
        console.log('Finished');
        alert('Finita');
      });
  };

  const goUp = () => {
    if (coordY < 0) dispatch(positionActions.moveUp())
  };

  const goLeft = () => {
    if (coordX > 0) dispatch(positionActions.moveLeft())
  };

  const goRight = () => {
    if (coordX < 9) dispatch(positionActions.moveRight())
  };

  const goDown = () => {
    if (coordY > -4) dispatch(positionActions.moveDown())
  };

  return (
    <div className="app">
      <h1 className='app__title'>Position reducer</h1>
      <div className="app__container">
        <div className="app__buttons">
          <div className="app__button-up-cont">
            <button onClick={goUp} className="app__button">^</button>
          </div>

          <div className="app__button-right-left-cont">
            <button onClick={goLeft} className="app__button">{'<'}</button>
            <p className='app__coords'>{coordX} : {coordY}</p>
            <button onClick={goRight} className="app__button">{'>'}</button>
          </div>

          <div className="app__button-up-cont">
            <button onClick={goDown} className="app__button">v</button>
          </div>

          <div className="app__button-up-cont">
            <button onClick={goCircleAsync} className="app__button app__button-rotate">Rotate</button>
          </div>
        </div>

        <div className="app__field">
          <div
            className="app__field-item" 
            style={styleForCube}
          >
            {distance}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
