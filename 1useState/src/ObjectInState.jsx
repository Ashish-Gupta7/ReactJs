import { useState } from "react";

const ObjectInState = () => {
  const [val, setval] = useState({ name: "Ashish", isBanned: false });
  return (
    <div>
      <h1>ObjectInState</h1>
      <h1>Name: {val.name}</h1>
      <h1>Banned: {val.isBanned.toString()}</h1>
      <button onClick={() => setval({ ...val, isBanned: !val.isBanned })}>
        change
      </button>
    </div>
  );
};

export default ObjectInState;

// <button onClick={() => setval({ ...val, isBanned: !val.isBanned })}>
// phle old values ko setval me laao => ...val, yahi kaam kr rha hai
// iske baad jo bhi changes jisme chahte ho wo perform kr do
