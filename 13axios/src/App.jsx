import Allroutes from "./components/Allroutes";
import Nav from "./components/Nav";

const App = () => {
  return (
    <div className="bg-gray-700 text-white h-screen">
      <Nav />
      <div className="px-10 py-6">
        <Allroutes />
      </div>
    </div>
  );
};

export default App;
