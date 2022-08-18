import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { actions as positionActions } from './store/positionReducer';

function App() {
  const dispatch = useDispatch();
  const coordX = useSelector(state => state.x);
  const coordY = useSelector(state => state.y);

  console.log(coordX, coordY);

  const step = 40;
  const styleForCube = { transform: `translate(${coordX * step}px, ${-coordY * step}px)` }

  return (
    <div className="app">
      <h1 className='app__title'>Position reducer</h1>
      <div className="app__container">
        <div className="app__buttons">
          <div className="app__button-up-cont">
            <button onClick={() => dispatch(positionActions.moveUp())} className="app__button">^</button>
          </div>

          <div className="app__button-right-left-cont">
            <button onClick={() => dispatch(positionActions.moveLeft())} className="app__button">{'<'}</button>
            <p className='app__coords'>{coordX} : {coordY}</p>
            <button onClick={() => dispatch(positionActions.moveRight())} className="app__button">{'>'}</button>
          </div>

          <div className="app__button-up-cont">
            <button onClick={() => dispatch(positionActions.moveDown())} className="app__button">v</button>
          </div>
        </div>

        <div className="app__field">
          <div
            className="app__field-item" 
            style={styleForCube}
          >
            Cube
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
