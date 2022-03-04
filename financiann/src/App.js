import React from "react";
import "./App.css";

function App() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "morning";
  }
  else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
  }
  else {
    timeOfDay = "night"
  }

  return (
    <div>
      <h1>Hey Good {timeOfDay}</h1>
      <p> Thish is the first paragraph</p>
    </div>
  )
}

export default App;