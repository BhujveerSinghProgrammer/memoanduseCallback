

import React, { useState, memo, useCallback } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);

  const incrementCount = useCallback(() => setCount(count + 1), [count]);
  //using useCallback:- rerender the child component based on count value changes
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={incrementCount}>Increment counter</button>
      <h3>Input text: {input}</h3>
      <h3>Count: {count}</h3>
      <hr />
      <ChildComponent count={count} onclick={incrementCount} />
    </div>
  );
}

// var props = {count: value, onclick: function}

const ChildComponent = memo(function ChildComponent({ count, onclick }) {
  console.log("child component is rendering");
  return (
    <div>
      <h2>This is a child component.</h2>
      <button onClick={onclick}>Increment</button>
      <h4>Count: {count}</h4>
    </div>
  );
});

// function  has a referrence

// a =>  1
// rerender
// a => 2

// prev a === cur a // not equal
// cause a rerender when a is passed as a function to the child
// use Case is that you want a to retain this referrence 1
// even when there is a rerender
// useCallback(a, []);

// rerender
// a = 1
// prev a === cur a // equal

// child would not be rerendered

// incrementCount = 1203
// incrementCount = 2010

//useCallbacks
// incrementCount = 1203
// incrementCount ref is going to change only if the value of count changes
// useCallback is going to retain the referrence of the function
// on rerenders and it would change the referrence of the function on
// change of the dependency array
