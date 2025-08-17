import { useState } from "react";

const App = () => {
  const [username, setusername] = useState("Shiva");

  const changeHandler = (value) => {
    setusername(value);
  };
  return (
    <div>
      <h1>Parameterize and Non-Parameterize Functions.</h1>
      <h2>{username}</h2>
      <button onClick={() => changeHandler("Ankit")}>Change Username</button>
    </div>
  );
};

export default App;
