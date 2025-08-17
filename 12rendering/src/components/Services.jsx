import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate(-1);
    // navigate("/");
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Services;
