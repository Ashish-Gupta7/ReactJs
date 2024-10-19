import { useRef } from "react";

const App = () => {
  const head = useRef(null);

  const Handler = () => {
    console.log(head);
    head.current.innerHTML = "changed";
    head.current.style.color = "red";
    console.log(head.current);
  };

  return (
    <div>
      <h1>Hooks in React Just like Js document.queryselecter()</h1>
      <h2 ref={head}>Lets try hooks.</h2>
      <button onClick={Handler}>Select</button>
    </div>
  );
};

export default App;
