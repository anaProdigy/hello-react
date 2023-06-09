import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  const {reset} = props;
  return (
    <button onClick={reset}>
      {props.children}
    </button>
  );
};

const Application = () => {

  const [name, setName] = useState("");

  const reset = () => {
    console.log("reset");
    // your code here
  };

  return (
    <main>
      <input placeholder="Type your name" value={name} onChange={(event) => setName(event.target.value)}></input>
      <Button reset={reset}>
        Reset
      </Button>

      <h1>Hello {name}</h1>
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
