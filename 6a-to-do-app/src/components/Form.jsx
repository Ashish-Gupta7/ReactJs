import { useState } from "react";

const Form = ({ tasks, settasks }) => {
  const [title, settitle] = useState("");
  const [time, settime] = useState(
    new Date().toLocaleString("en-GB", { hour12: true })
  );

  const submitHandler = async (e) => {
    e.preventDefault();
    settime(new Date().toLocaleString("en-GB", { hour12: true }));

    const newTask = {
      title: title,
      createdAt: time,
      completed: false,
    };
    settasks([...tasks, newTask]);

    settitle("");
  };

  return (
    <form
      onSubmit={submitHandler}
      className="w-full my-6 flex items-center justify-center gap-2"
    >
      <input
        onChange={(e) => settitle(e.target.value)}
        className="w-1/2 bg-zinc-600 text-white outline-none px-2 py-[3px]"
        type="text"
        placeholder="Create Your New Task..."
        autoComplete="off"
        name="title"
        value={title}
      />
      <input
        className="px-4 py-[3px] bg-blue-800 text-white cursor-pointer"
        type="submit"
        value="Create"
      />
    </form>
  );
};

export default Form;
