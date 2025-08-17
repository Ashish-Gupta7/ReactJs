import axios from "../utils/axios";

const Users = () => {
  const getUsers = async () => {
    const { data } = await axios.get("/users");
    console.log(data);
  };
  return (
    <div>
      <h1>Users</h1>
      <button onClick={getUsers}>users</button>
    </div>
  );
};

export default Users;
