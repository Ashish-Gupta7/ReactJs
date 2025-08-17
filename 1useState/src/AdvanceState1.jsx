import { useState } from "react";

const AdvanceState1 = () => {
  const [val, setval] = useState({ name: "Ashish", age: 23 });
  return (
    <div>
      <h1>AdvanceState1</h1>
      <button
        onClick={() => {
          setval({ ...val, gender: "male" });
          console.log(val);
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AdvanceState1;

{
  /* <button
onClick={() => {
  setval({ ...val, gender: "male" });
  console.log(val);
}}
> */
}
// actual me gender bhi useState me add ho chuka hai lekin console.log krne pr wo dikhega nhi, aap ise console ke side me hi components hota hai usme app dekh skte hai ki gender add ho chuka hai.

// React ka state update mechanism asynchronous hota hai, isliye turant console.log() state update ke baad ka value nahi dikhata. Aap useEffect ke through updated value ko easily track kar sakte ho.
