import { useNavigate, useParams } from "react-router-dom";

const ListItems = () => {
  const params = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <h1>{params.i}</h1>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default ListItems;
