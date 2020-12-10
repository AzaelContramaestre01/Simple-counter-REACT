
import './App.css';

function App(props) {
  return (
    <div className="App">
      <div className="counter">
        <div className="icon"> <i className="far fa-clock"></i> </div>
        <div className="hour">{props.one % 10}</div>
        <div className="minute">{props.two % 10}</div>
        <div className="second">{props.three % 10}</div>
        <div className="seconds">{props.four % 10}</div>
        <div className="btn"><button type="button" className="btn btn-warning">Set</button><button type="button" className="btn btn-warning">Stop</button><button type="button" className="btn btn-warning">Go</button></div>

      </div>
    </div>
  );
}


export default App;
