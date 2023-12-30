import { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [time, setTime] = useState(new Date());
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
      setRotate(rotate + 90);
    }, 1000);
  });

  let randomNumber = () => {
    return Math.floor(Math.random() * 255);
  };

  console.log(rotate);

  let styles = {
    color: `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`,
    transform: `rotate(${rotate}deg)`,
  };
  return (
    <div className="App">
      <div className="circle">
        <h1 style={styles}>{time.toLocaleTimeString()}</h1>
      </div>
    </div>
  );
}

export default App;
