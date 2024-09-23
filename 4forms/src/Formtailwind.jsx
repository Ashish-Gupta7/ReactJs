const Formtailwind = () => {
  const formHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const obj = Object.fromEntries(formData.entries());
    console.log(obj);
  };
  return (
    <div>
      <form
        onSubmit={formHandler}
        className="h-screen flex items-center justify-center flex-col bg-red-200"
      >
        <input type="text" placeholder="username" name="username" />
        <input type="email" name="email" id="" />
        <input type="date" name="date" id="" />
        <input type="password" name="password" id="" />
        <input type="number" name="number" id="" />
        <input type="radio" name="gender" id="" value="male" />
        <input type="radio" name="gender" id="" value="female" />
        <input type="checkbox" name="check" id="" />
        <select name="city" id="">
          <option value="bhopal">bhopal</option>
          <option value="indore">indore</option>
          <option value="shahdol">shahdol</option>
        </select>
        <textarea name="text" id="" placeholder="enter your text"></textarea>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Formtailwind;
