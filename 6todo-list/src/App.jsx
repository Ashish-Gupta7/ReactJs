import { useState } from "react";

const App = () => {
  const [title, settitle] = useState("");
  const [tasks, settasks] = useState([]);

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

  const completeHandler = (e, idx) => {
    const copyTask = [...tasks];
    copyTask[idx].completed = !copyTask[idx].completed;
    settasks(copyTask);
  };

  const deleteHandler = (e, idx) => {
    // const copyTask = [...tasks];
    // copyTask.splice(idx, 1);
    // settasks(copyTask);
    // inn 3 lines ki jagah pr ye kr skte hai.

    settasks(tasks.filter((task, index) => index !== idx));
  };

  let renderTasks;
  if (tasks.length > 0) {
    renderTasks = tasks.map((task, idx) => {
      return (
        <div
          key={idx}
          className="w-full flex items-center justify-between p-2 border border-zinc-500 rounded"
        >
          <div className="flex items-center justify-center gap-2">
            <div
              onClick={(e) => completeHandler(e, idx)}
              className={`h-4 w-4 rounded-full ${
                task.completed ? "bg-green-500" : "border-2 border-red-800"
              }`}
            ></div>
            <div
              className={`text-white ${task.completed ? "line-through" : ""}`}
            >
              {task.title}
            </div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <i className="ri-file-edit-line text-white/70"></i>
            <i
              onClick={(e) => deleteHandler(e, idx)}
              className="ri-delete-bin-line text-white/70"
            ></i>
          </div>
        </div>
      );
    });
  } else {
    renderTasks = <div className="text-emerald-400">No pending tasks...</div>;
  }

  return (
    <>
      <div className="min-h-[100vh] w-screen bg-zinc-800 flex items-center justify-center">
        {/* main div */}
        <div className="w-1/3 flex items-center justify-center flex-col gap-6">
          {/* task data */}
          <div className="w-full flex items-center justify-between gap-24 border border-zinc-500 rounded-md px-8 py-6">
            <div className="text-white">
              <div>LETS TODO</div>
              <div>Keeps doing things</div>
            </div>
            <div className="h-40 w-40 rounded-full bg-emerald-700 flex items-center justify-center font-semibold text-white">
              {tasks.filter((val) => val.completed).length}/{tasks.length}
            </div>
          </div>

          {/* new task form */}
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

          {/* show tasks */}
          <div className="w-full flex items-center justify-center flex-col gap-2">
            {renderTasks}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
