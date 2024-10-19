import axios from "../utils/axios";

const Users = () => {
  const getUsers = async () => {
    const { data } = await axios.get("/users");
    console.log(data);
  };
  return (
    <div>
      <h1>Users.jsx</h1>
      <button
        onClick={getUsers}
        className="px-4 py-1 rounded bg-black text-white mt-4 capitalize"
      >
        getusers
      </button>
    </div>
  );
};

export default Users;
