import React from "react";
import Nav from "./components/Nav";
import Routing from "./utils/Routing";

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <Nav />
      <hr className="mt-2 mb-6" />
      <Routing />
    </div>
  );
};

export default App;
