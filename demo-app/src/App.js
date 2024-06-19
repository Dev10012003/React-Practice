import "./App.css";
import Message from "./components/Message";
import React, { useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [counter, setCounter] = useState(0);
  const date = new Date();
  const currentTime = date.getHours();

  const cssStyle = {};
  if (currentTime >= 1 && currentTime <= 12) {
    setTimeout(() => {
      setMessage(5);
    }, 100);
    cssStyle.color = "green";
  } else if (currentTime > 12 && currentTime <= 15) {
    setTimeout(() => {
      setMessage("Good Afternoon !");
    }, 100);
    cssStyle.color = "Yellow";
  } else if (currentTime > 15 && currentTime <= 19) {
    setTimeout(() => {
      setMessage("Good Evening !");
    }, 100);
    cssStyle.color = "Orange";
  } else {
    setTimeout(() => {
      setMessage("Good Night !");
    }, 100);
    cssStyle.color = "Black";
  }

  const Increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Message message={message} style={cssStyle}></Message>
        <div>
          <button style={{ fontSize: 20 }} onClick={Increment}>
            Increment
          </button>
          <h5>{counter}</h5>
          <button
            style={{ fontSize: 20 }}
            onClick={() => setCounter(counter - 1)}
          >
            Decrement
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
