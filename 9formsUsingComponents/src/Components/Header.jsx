/* eslint-disable react/prop-types */

const Header = (props) => {
  console.log(props);

  const { tasks } = props;
  return (
    <div className="w-full flex items-center justify-between gap-24 border border-zinc-500 rounded-md px-8 py-6">
      <div className="text-white">
        <div>LETS TODO</div>
        <div>Keeps doing things</div>
      </div>
      <div className="h-40 w-40 rounded-full bg-emerald-700 flex items-center justify-center font-semibold text-white">
        {tasks.filter((val) => val.completed).length}/{tasks.length}
      </div>
    </div>
  );
};

export default Header;
