/* eslint-disable react/prop-types */

import { useState } from "react";

const Create = (props) => {
  const [title, settitle] = useState("");

  const { tasks, settasks } = props;

  const taskHandler = (e) => {
    e.preventDefault();

    const newTask = { title, completed: false };

    // const copyTask = [...tasks];
    // copyTask.push(newTask);
    // settasks(copyTask);
    // inn 3 lines ki jagah pr aisa likh skte hai ->

    settasks([...tasks, newTask]);
    settitle("");
  };

  return (
    <form
      onSubmit={taskHandler}
      className="w-full flex items-center justify-between gap-4 px-4"
    >
      <input
        onChange={(e) => settitle(e.target.value)}
        type="text"
        name="title"
        id=""
        value={title}
        placeholder="Write Your Next Task..."
        className="w-96 outline-none px-2 block py-4 border border-transparent rounded-sm text-white bg-black/30"
      />
      <input
        type="submit"
        value="+"
        className="h-20 w-20 rounded-full bg-emerald-800 text-white flex items-center justify-center"
      />
    </form>
  );
};

export default Create;
