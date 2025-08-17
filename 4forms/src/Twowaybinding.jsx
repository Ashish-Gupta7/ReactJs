import { useState } from "react";

const Twowaybinding = () => {
  const [username, setusername] = useState("");
  const [gender, setgender] = useState("male");
  const [city, setcity] = useState("delhi");
  const [text, settext] = useState("");
  const [accept, setaccept] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log({ username, gender, city, text, accept });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => setusername(e.target.value)}
          type="text"
          placeholder="username"
          value={username}
        />
        <br />
        <div>
          <label htmlFor="male">male</label>
          <input
            onChange={(e) => setgender(e.target.value)}
            checked={gender === "male" ? true : false}
            type="radio"
            name="gender"
            id="male"
            value="male"
          />
          <label htmlFor="female">female</label>
          <input
            onChange={(e) => setgender(e.target.value)}
            checked={gender === "female" ? true : false}
            type="radio"
            name="gender"
            id="female"
            value="female"
          />
        </div>
        <br />
        <select
          onChange={(e) => setcity(e.target.value)}
          name="city"
          id=""
          value={city}
        >
          <option value="mumbai">mumbai</option>
          <option value="delhi">delhi</option>
          <option value="kolkata">kolkata</option>
        </select>
        <br />
        <textarea
          onChange={(e) => settext(e.target.value)}
          value={text}
          name="text"
          id=""
          placeholder="Enter your text"
        ></textarea>
        <br />

        <input
          onChange={(e) => setaccept(e.target.checked)}
          type="checkbox"
          name=""
          id=""
          value={accept}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Twowaybinding;
