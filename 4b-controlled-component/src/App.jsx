import { useState } from "react";

const App = () => {
  const [val, setval] = useState({ name: "", age: "", email: "" });
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(val);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        onChange={(e) => setval({ ...val, name: e.target.value })}
        type="text"
        placeholder="name"
      />
      <input
        onChange={(e) => setval({ ...val, age: e.target.value })}
        type="number"
        placeholder="age"
      />
      <input
        onChange={(e) => setval({ ...val, email: e.target.value })}
        type="email"
        placeholder="email"
      />
      <input type="submit" value="submit" />
    </form>
  );
};

export default App;
