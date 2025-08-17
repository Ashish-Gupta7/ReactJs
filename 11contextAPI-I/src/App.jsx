import { createContext, useState } from "react";
import Comp1 from "./components/Comp1";

export const DataContext = createContext(null);

const App = () => {
  const [data, setdata] = useState("This is important data");

  return (
    <>
      <DataContext.Provider value={[data, setdata]}>
        <h1>Context API</h1>
        <Comp1 />
      </DataContext.Provider>
    </>
  );
};

export default App;
