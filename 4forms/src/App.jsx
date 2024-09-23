const App = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e.target.username.value);
  };
  return (
    <div>
      <h1>React Form</h1>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="username" name="username" />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default App;

// Yaha react ko nhi pta hai ki hum ek form use kr rhe hai. react ko hum kaise bataye ki hum ek form use kr rhe hai uske liye form.jsx file me jaye.
