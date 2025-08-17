/* eslint-disable react/prop-types */

const Show = (props) => {
  const { tasks, settasks } = props;

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
    <div className="w-full flex items-center justify-center flex-col gap-2">
      {renderTasks}
    </div>
  );
};

export default Show;
