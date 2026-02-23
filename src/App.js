import "./index.css";
import LinearCircle from "./component/LinearCircle";
import COLORS from "./data/Colors";
import { useMemo } from "react";

function App() {
  const circleCount = 4;
  const noOfLinearCircles = new Array(circleCount).fill(0);

  const randomColors = () => {
    const colorOne = COLORS[Math.floor(Math.random() * COLORS.length)];
    const colorTwo = COLORS[Math.floor(Math.random() * COLORS.length)];

    return [colorOne, colorTwo];
  };

  const randomRotation = () => Math.floor(Math.random() * 201);

  const randomDirection = () => {
    const classToAdd = [
      "rotateLinearCircleClockwise",
      "rotateLinearCircleAnticlockwise",
    ];

    return classToAdd[Math.floor(Math.random() * classToAdd.length)];
  };

  const circles = useMemo(
    () =>
      Array.from({ length: circleCount }, () => ({
        colors: randomColors(),
        rotation: randomRotation(),
        direction: randomDirection(),
      })),
    []
  );

  return (
    <div className="App">
      <h4>music.</h4>
      <div className="linearCirclesContainer">
        {circles.map((circle) => (
          <LinearCircle
            colors={circle.colors}
            rotation={circle.rotation}
            direction={circle.direction}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
