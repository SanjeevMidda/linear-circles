import "./index.css";
import LinearCircle from "./component/LinearCircle";
import COLORS from "./data/Colors";

function App() {
  // 4 circles with different colors which rotate in different directions

  // creat App.js UI
  // add title

  let noOfLinearCircles = new Array(4).fill(0);

  const randomColors = () => {
    const colorOne = COLORS[Math.floor(Math.random() * COLORS.length)];
    const colorTwo = COLORS[Math.floor(Math.random() * COLORS.length)];

    return [colorOne, colorTwo];
  };

  const randomDirection = () => Math.floor(Math.random() * 201);

  console.log(randomColors());

  return (
    <div className="App">
      <h4>music.</h4>
      <div className="linearCirclesContainer">
        {noOfLinearCircles.map((i) => (
          <LinearCircle colors={randomColors()} direction={randomDirection()} />
        ))}
      </div>
    </div>
  );
}

export default App;
