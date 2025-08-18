import React from "react";
import Nav from "./components/Nav";
import Routing from "./utils/Routing";

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <Nav />
      <hr className="mb-6 mt-1" />
      <Routing />
    </div>
  );
};

export default App;
