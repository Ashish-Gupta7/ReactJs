import { useState } from "react";
import Header from "./Components/Header";
import Create from "./Components/Create";
import Show from "./Components/Show";

const App = () => {
  const [tasks, settasks] = useState([]);

  return (
    <>
      <div className="min-h-[100vh] w-screen bg-zinc-800 flex items-center justify-center">
        {/* main div */}
        <div className="w-1/3 flex items-center justify-center flex-col gap-6">
          {/* task data */}

          <Header tasks={tasks} />

          {/* new task form */}
          <Create tasks={tasks} settasks={settasks} />

          {/* show tasks */}

          <Show tasks={tasks} settasks={settasks} />
        </div>
      </div>
    </>
  );
};

export default App;
