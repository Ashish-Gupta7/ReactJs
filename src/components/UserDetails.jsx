import React, { useContext } from "react";
import { UserContext } from "../context/Context";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { users, setusers } = useContext(UserContext);
  const { idx } = useParams();
  return (
    <div>
      {users.length > 0 && users[idx] && (
        <div>
          <div className="p-4 border rounded-md bg-gray-900 mt-10">
            <h2 className="text-xl font-bold mb-2">
              {users[idx]?.name.firstname} {users[idx]?.name.lastname}
            </h2>
            <p>
              <strong>Username:</strong> {users[idx]?.username}
            </p>
            <p>
              <strong>Email:</strong> {users[idx]?.email}
            </p>
            <p>
              <strong>Phone:</strong> {users[idx]?.phone}
            </p>

            <h3 className="mt-3 font-semibold">Address:</h3>
            <p>
              {users[idx]?.address.number}, {users[idx]?.address.street}
            </p>
            <p>
              {users[idx]?.address.city}, {users[idx]?.address.zipcode}
            </p>
            <p>
              <strong>Geo:</strong> Lat {users[idx]?.address.geolocation.lat},
              Long {users[idx]?.address.geolocation.long}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
