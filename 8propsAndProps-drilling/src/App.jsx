import { useState } from "react";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import Component3 from "./components/Component3";

// React me data flow uper se neeche ki taraf hota hai. isliye hum components se koi element banakr App.jsx jo usually parent hota hai usme use nhi kr skte hai

const App = () => {
  const [data, setdata] = useState("basic data");
  return (
    <div>
      <h1>Props and Props drilling</h1>
      <Component1 data={data} setdata={setdata} />
      {/* 1st method to share data App.jsx to children components */}
      <Component2>
        <h1>{data}</h1>
      </Component2>
      {/* iss tarah se opening aur closing tags ke beech me hum jo kuchh bhi likhte hai wo iske children me jakar save ho jata hai */}
      <Component3 />
    </div>
  );
};

export default App;
