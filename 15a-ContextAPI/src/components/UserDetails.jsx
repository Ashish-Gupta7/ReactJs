import React, { useContext } from "react";
import { userData } from "../context/UserContext";
import { useNavigate, useParams } from "react-router-dom";

const UserDetails = () => {
  const { users, setUsers } = useContext(userData);
  const { idx } = useParams();
  const navigate = useNavigate();

  return (
    <>
      {users.length > 0 && users[idx] && (
        <div className="bg-emerald-950 border-2 border-white/50 rounded-xl px-6 py-4 mt-6">
          <h2 className="capitalize">Username: {users[idx].username}</h2>
          <h2>
            First Name: {users[idx].name.firstname} and Last Name:{" "}
            {users[idx].name.lastname}
          </h2>
          <h2>Phone: {users[idx].phone}</h2>
          <h2>
            Address: {users[idx].address.number}, {users[idx].address.street},{" "}
            {users[idx].address.zipcode}, {users[idx].address.city},
          </h2>
          <h2>
            Geolocation: Lattitude: {users[idx].address.geolocation.lat},
            Longitude: {users[idx].address.geolocation.long}
          </h2>
        </div>
      )}
      <div className="flex justify-end">
        <button
          onClick={() => navigate("/user")}
          className="px-4 py-1 bg-emerald-900 rounded-md border-2 border-white/50 mt-4 cursor-pointer"
        >
          Go Back
        </button>
      </div>
    </>
  );
};

export default UserDetails;
