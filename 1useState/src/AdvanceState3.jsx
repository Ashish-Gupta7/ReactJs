import { useState } from "react";

const AdvanceState3 = () => {
  const [val, setval] = useState([
    { name: "Ashish", age: 23 },
    { name: "Aman", age: 24 },
    { name: "Adarsh", age: 22 },
  ]);
  return (
    <div>
      <h1>AdvanceState3</h1>
      {val.map((elm, idx) => (
        <div key={idx}>
          <h4>name: {elm.name}</h4>
          <h4>age: {elm.age}</h4>
        </div>
      ))}
      <button
        onClick={() =>
          setval(() =>
            val.map((elm) =>
              elm.name === "Aman" ? { name: "Aman", age: elm.age + 1 } : elm
            )
          )
        }
      >
        click
      </button>
    </div>
  );
};

export default AdvanceState3;
