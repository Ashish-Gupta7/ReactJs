const Header = ({ tasks }) => {
  return (
    <nav className="flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <div className="logo font-semibold text-xl">TO-DO</div>
        <div className="tasks-data w-20 h-20 rounded-full bg-zinc-200 font-bold text-gray-800 text-xl flex items-center justify-center">
          {tasks.filter((elm) => elm.completed).length}/{tasks.length}
        </div>
      </div>
      <div className="line h-[2px] w-full bg-zinc-200/50 mt-2"></div>
    </nav>
  );
};

export default Header;
