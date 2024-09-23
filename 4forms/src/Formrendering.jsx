import { useState } from "react";

const Formrendering = () => {
  let [users, setusers] = useState([]);

  const [username, setusername] = useState("");
  const [gender, setgender] = useState("male");
  const [city, setcity] = useState("bhopal");
  const [text, settext] = useState("");
  const [accept, setaccept] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    let newuser = { username, gender, city, text, accept };
    let copyuser = [...users];
    copyuser.push(newuser);
    setusers(copyuser);
    setusername("");
    setgender("male");
    settext("");
    setaccept(false);
    setcity("bhopal");
  };

  let userRender;
  if (users.length > 0) {
    userRender = users.map((user, idx) => (
      <ol key={idx}>
        <li>Username: {user.username}</li>
        <li>Gender: {user.gender}</li>
        <li>City: {user.city}</li>
        <li>Text: {user.text}</li>
        <li>Accepted: {user.accept ? "Yes" : "No"}</li>
      </ol>
    ));
  } else {
    userRender = "No data";
  }

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
        <br />
        <select
          onChange={(e) => setcity(e.target.value)}
          name=""
          id=""
          value={city}
        >
          <option value="indore">indore</option>
          <option value="bhopal">bhopal</option>
          <option value="jabalpur">jabalpur</option>
        </select>
        <br />
        <br />
        <textarea
          onChange={(e) => settext(e.target.value)}
          name=""
          id=""
          placeholder="enter your text"
          value={text}
        ></textarea>
        <br />
        <br />
        <input
          onChange={(e) => setaccept(e.target.checked)}
          type="checkbox"
          name=""
          id=""
          value={accept}
        />
        <br />
        <br />
        <input type="submit" value="submit" />
      </form>
      <br />
      <hr />
      <br />
      <div>{userRender}</div>
    </div>
  );
};

export default Formrendering;
