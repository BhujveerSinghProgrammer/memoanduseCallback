
import { useRef, useState } from "react";

const App = () => {
  const inputRef = useRef(0);
  const valueRef = useRef(0);
  const [count, setCount] = useState(0);

  console.log("render ref", valueRef.current);
  const onSubmit = () => {
    // let a = document.getElementById("btn");
    inputRef.current.focus();
    // console.log(inputRef.current.value);
    // console.log("react", inputRef.current.value);
    // console.log("js", a.value);

    setCount(count + 1);
    valueRef.current = valueRef.current + 1;
    console.log("click ref", valueRef.current);
    console.log("state", count);
  };

  return (
    <div className="modal--overlay">
      <div className="modal">
        <h1>Insert a new value</h1>
        <div>
          <span> {valueRef.current}</span>
          <input id="btn" ref={inputRef} type="text" />
          <button onClick={onSubmit}>Save new value</button>
        </div>
      </div>
    </div>
  );
};
export default App;

// useRef hook is a beautiful hook
// useRef it provides you with two advantages

// 1st it lets you get an element in react using referrence
// 2nd it will act as a data retention method on reloads

// useRef hook take a default value in the function as a parameter
// useRef(default value)

// the variable that is created using useRef
// is an object and you can access the value set using useRef
// using a key named current
