import { useState } from "react";

const Multichange = () => {
  const [banned, setbanned] = useState(false);
  return (
    <div>
      <h1>Multichange</h1>
      {banned.toString()}
      <button
        onClick={() => setbanned(() => !banned)}
        style={{
          color: banned ? "red" : "green",
          paddingRight: "16px",
          paddingLeft: "16px",
          paddingTop: "6px",
          paddingBottom: "6px",
          borderRadius: "10px",
          backgroundColor: "gray",
        }}
      >
        {banned ? "user is banned" : "user not banned"}
      </button>
    </div>
  );
};

export default Multichange;
