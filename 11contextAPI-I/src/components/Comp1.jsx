import { useContext } from "react";
import { DataContext } from "../App";
import Comp1child from "./Comp1child";

const Comp1 = () => {
  const [data, setdata] = useContext(DataContext);
  return (
    <div>
      <h1>child: {data}</h1>
      <Comp1child />
    </div>
  );
};

export default Comp1;
