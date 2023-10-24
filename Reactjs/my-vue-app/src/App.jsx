import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const date = new Date();
  const hour = date.getHours();
  let actualday;
  const Styles = {
    fontSize: "80px",
  };

  if (hour < 12) {
    actualday = "Morning";
    Styles.color = "Green";
  } else if (hour >= 12 && hour <= 17) {
    actualday = "Afternoon";
    Styles.color = "Blue";
  } else {
    actualday = "Evening ";
    Styles.color = "Yellow";
  }

  // Diving to Inline styles
  return (
    <>
      <h1
        style={{
          color: "red",
          display: "flex",
          justifyContent: "center",
          fontSize: "50px",
        }}
      >
        Flexisaf
      </h1>
      <h3 style={Styles}>Good {actualday}</h3>
    </>
  );
}

export default App;
