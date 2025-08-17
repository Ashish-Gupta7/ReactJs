import { useState } from "react";

const Usestate = () => {
  const val = useState("data");
  console.log(val);
  const actualValue = val[0];
  const setValue = val[1];
  console.log(actualValue);
  console.log(setValue);

  const [a, seta] = useState(12);
  const counter = () => {
    seta(a + 1);
    console.log(a);
  };
  return (
    <>
      <div>
        <h1>How to use useState ?</h1>
        <h2>a = {a}</h2>
        <button onClick={counter}>counter</button>
      </div>
    </>
  );
};

export default Usestate;

// useState Kya Hai?
// useState React ka ek hook hai jo functional components mein state manage karne ke liye use hota hai. Yeh hook 2 values return karta hai:
// Current State (a): Jo bhi aap initial state set karenge, woh a ke andar store ho jata hai. Is example mein initial state 12 set ki gayi hai, toh a ki value shuru mein 12 hogi.
// State Update Function (seta): seta ek function hai jo a ki value ko update karne ke kaam aata hai. Is function ko call karne par React ko signal milta hai ki state update ho gayi hai, aur React automatically component ko re-render kar ke updated state ko DOM mein reflect kar deta hai.

// const [a, seta] = useState(12);
// a is the current state value (initially 12). a ek read only value hai. ye change nhi hoti hai.
// seta is the function used to update the state. seta ek aisa variable hai jo update hota hai.

// const counter = () => {
//   seta(a + 1);
//   console.log(a);
// };
// yaha console me a ki purani value aayegi uske baad hi value update hogi, kyuki cosole.log() ek synchronous fnc hai aur seta() k asynchronous fnc hai.
