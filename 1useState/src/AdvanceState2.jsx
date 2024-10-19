import { useState } from "react";

const AdvanceState2 = () => {
  const [val, setval] = useState([1, 2, 3, 4, 5, 6, 7]);
  return (
    <div>
      <h1>AdvanceState2</h1>
      {val.map((elm, idx) => (
        <h4 key={idx}>{elm}</h4>
      ))}
      <button
        onClick={() =>
          setval(() => {
            return val.filter((elm, idx) => idx != val.length - 1);
          })
        }
      >
        click
      </button>
    </div>
  );
};

export default AdvanceState2;
