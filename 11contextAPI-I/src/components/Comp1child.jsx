import { useContext } from "react";
import { DataContext } from "../App";

const Comp1child = () => {
  const [data, setdata] = useContext(DataContext);
  return <div>grand-child: {data}</div>;
};

export default Comp1child;
