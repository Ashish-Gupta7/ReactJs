import { Link, Outlet } from "react-router-dom";

const NestList = () => {
  return (
    <>
      <div className="flex flex-col ">
        <Link to="/nesting/nest1">Nest 1</Link>
        <Link to="/nesting/nest2">Nest 2</Link>
        <Link to="/nesting/nest3">Nest 3</Link>
      </div>
      <hr className="my-6" />
      <Outlet />
    </>
  );
};

export default NestList;
