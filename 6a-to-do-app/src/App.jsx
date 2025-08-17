import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import ShowTasks from "./components/ShowTasks";

const App = () => {
  const [tasks, settasks] = useState([]);

  return (
    <>
      <div className="w-full h-screen bg-zinc-950 text-white px-40 py-20 overflow-hidden">
        <div className="w-full bg-zinc-900 shadow-xl px-14 py-8">
          <Header tasks={tasks} />

          <Form tasks={tasks} settasks={settasks} />

          <ShowTasks tasks={tasks} settasks={settasks} />
        </div>
      </div>
    </>
  );
};

export default App;
