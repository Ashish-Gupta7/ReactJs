import { useNavigate, useParams } from "react-router-dom";

const Nesting = () => {
  const { nest } = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-2xl">{nest}</h1>
      <button
        onClick={() => navigate(-1)}
        className="px-4 py-1 bg-black text-white rounded-md mt-4"
      >
        Back
      </button>
    </div>
  );
};

export default Nesting;
