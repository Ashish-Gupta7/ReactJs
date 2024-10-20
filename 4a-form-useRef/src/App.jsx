import { useRef } from "react";

const App = () => {
  const name = useRef(null);
  const age = useRef(null);
  const email = useRef(null);

  let object;
  const submitHandler = (e) => {
    e.preventDefault();
    object = {
      name: name.current.value,
      age: age.current.value,
      email: email.current.value,
    };
    console.log(object);
  };

  return (
    <form onSubmit={submitHandler}>
      <input ref={name} type="text" placeholder="name" />
      <input ref={age} type="number" placeholder="age" />
      <input ref={email} type="email" placeholder="email" />
      <input type="submit" value="submit" />
    </form>
  );
};

export default App;
