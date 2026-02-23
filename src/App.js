import "./index.css";
import LinearCircle from "./component/LinearCircle";
import COLORS from "./data/Colors";

function App() {
  // 4 circles with different colors which rotate in different directions

  // creat App.js UI
  // add title

  let noOfLinearCircles = new Array(5).fill(0);

  console.log(noOfLinearCircles);

  return (
    <div className="App">
      <h4>music.</h4>
      <div className="linearCirclesContainer">
        {noOfLinearCircles.map((i) => (
          <LinearCircle />
        ))}
      </div>
    </div>
  );
}

export default App;
