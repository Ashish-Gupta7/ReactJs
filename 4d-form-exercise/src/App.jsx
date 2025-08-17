import { useState } from "react";
import Cards from "./components/Cards";
import Form from "./components/Form";

const App = () => {
  const [users, setusers] = useState([]);

  const handleSubmitData = (data) => {
    setusers([...users, data]);
  };

  const hanldleRemove = (removeIndex) => {
    setusers(users.filter((user, index) => index != removeIndex));
  };

  return (
    <div className="h-screen bg-zinc-300 flex items-center flex-col justify-around py-12 px-14">
      <Cards users={users} hanldleRemove={hanldleRemove} />
      <div className="w-full flex justify-center mt-16">
        <Form handleSubmitData={handleSubmitData} />
      </div>
    </div>
  );
};

export default App;
