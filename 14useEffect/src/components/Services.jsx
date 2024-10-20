import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    console.log("Services component created");
    return () => {
      console.log("Services component deleted");
    };
  });
  return <div>Services</div>;
};

export default Services;
