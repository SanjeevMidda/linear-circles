import "./index.css";
import LinearCircle from "./component/LinearCircle";

function App() {
  // 4 circles with different colors which rotate in different directions

  // creat App.js UI
  // add title
  return (
    <div className="App">
      <h4>music.</h4>
      <div className="linearCirclesContainer">
        <LinearCircle />
        <LinearCircle />
        <LinearCircle />
        <LinearCircle />
      </div>
    </div>
  );
}

export default App;
