import { useState } from "react";
import { useEffect } from "react";

const Contact = () => {
  const [first, setfirst] = useState("First - initial data");
  const [second, setsecond] = useState("Second - initial data");

  useEffect(() => {
    console.log("Contact component created");
    return () => {
      console.log("Contact component deleted");
    };
  }, [second]);
  return (
    <div>
      <h1>Contact</h1>
      <div>
        <h1>{first}</h1>
        <button onClick={() => setfirst("First - final data")}>click</button>
      </div>
      <div>
        <h1>{second}</h1>
        <button onClick={() => setsecond("Second - final data")}>click</button>
      </div>
    </div>
  );
};

export default Contact;
