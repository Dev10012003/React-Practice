import "./App.css";
import Message from "./components/Message";
import NewMessage from "./components/NewMessage";
import React, { useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [childmessage, setChildMessage] = useState(null);
  const [counter, setCounter] = useState(0);
  const date = new Date();
  const currentTime = date.getHours();

  const cssStyle = {};
  if (currentTime >= 1 && currentTime <= 12) {
    setTimeout(() => {
      setMessage("Good Morning !");
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

  const newmessage = (props) => {
    console.log(props);
    setChildMessage(props);
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
          <div style={{ marginTop: 50 }}>
            <NewMessage saveData={newmessage}></NewMessage>
          </div>
          {childmessage != null && counter > 0 && (
            <div style={{ marginTop: 20 }}>
              {childmessage} {counter} times.
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
