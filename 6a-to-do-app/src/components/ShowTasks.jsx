const ShowTasks = ({ tasks, settasks }) => {
  const completeHandler = (e, idx) => {
    const copyTasks = [...tasks];
    copyTasks[idx].completed = !copyTasks[idx].completed;
    settasks(copyTasks);
  };

  const deleteHandler = (e, idx) => {
    const copyTasks = [...tasks];
    if (copyTasks[idx].completed || window.confirm("Are you sure ?")) {
      copyTasks.splice(idx, 1);
    }
    settasks(copyTasks);
  };

  const showTasks = tasks.map((elm, idx) => {
    return (
      <li
        key={idx}
        className="w-full flex items-center justify-between bg-zinc-950 px-4 py-1"
      >
        <div className="w-[80%] flex items-center justify-between">
          <div className="flex items-center justify-center gap-2">
            <div
              onClick={(e) => completeHandler(e, idx)}
              className={`w-[15px] h-[15px] mt-[2px] rounded-full cursor-pointer ${
                elm.completed ? "bg-emerald-500" : "border border-zinc-200"
              }`}
            ></div>
            <h3 className="">{elm.title}</h3>
          </div>
          <div>
            <i
              onClick={(e) => deleteHandler(e, idx)}
              className="ri-delete-bin-line cursor-pointer"
            ></i>
          </div>
        </div>
        <div className="h-6 w-[2px] bg-zinc-200/50"></div>
        <div className="text-[12px]">{elm.createdAt}</div>
      </li>
    );
  });
  return (
    <div className="tasks-container h-[400px] w-full">
      <ul className="tasks w-full h-full flex flex-col gap-2 overflow-y-auto">
        {showTasks}
      </ul>
    </div>
  );
};

export default ShowTasks;
