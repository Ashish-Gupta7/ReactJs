import Allroutes from "./components/Allroutes";
import Nav from "./components/Nav";

const App = () => {
  return (
    <div className="bg-zinc-700 h-screen text-white">
      <div className="w-full py-6 bg-black text-white px-10">
        <Nav />
      </div>
      <div className="px-10 mt-6">
        <Allroutes />
      </div>
    </div>
  );
};

export default App;
