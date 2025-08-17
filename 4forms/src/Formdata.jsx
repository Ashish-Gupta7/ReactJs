import { useState } from "react";

const Formdata = () => {
  const [username, setusername] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log({ username });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => setusername(e.target.value)}
          type="text"
          placeholder="username"
          name="username"
          value={username}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Formdata;
