const Navbar = ({ data }) => {
  return (
    <div className="flex items-center justify-between">
      <h1>Orange</h1>
      <button className="text-sm font-semibold px-4 py-[6px] rounded bg-orange-500 text-white flex items-center gap-2">
        <h2>Favourites</h2>
        <h2>
          {data.filter((elem) => elem.added).length === 0
            ? "0"
            : data
                .filter((elem) => elem.added)
                .length.toString()
                .padStart(2, "0")}
        </h2>
      </button>
    </div>
  );
};

export default Navbar;
