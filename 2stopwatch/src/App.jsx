import { useState } from "react";

const App = () => {
  const [a, timer] = useState(new Date().toLocaleTimeString());

  setInterval(() => {
    timer(new Date().toLocaleTimeString());
  }, 1000);

  return (
    <>
      <div>
        <h1>Stopwatch</h1>
        <h2>Timer =&gt; {a}</h2>
      </div>
    </>
  );
};

export default App;
