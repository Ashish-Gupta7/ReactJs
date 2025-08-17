const Music = (props) => {
  const { data, index, addToFavourites } = props;
  const { image, name, artist, added } = data;
  return (
    <div>
      <div className="bg-zinc-200 rounded-md pb-6 px-4 py-3 relative mt-8">
        <div className="flex items-start gap-2">
          <div className="w-24 h-20 rounded overflow-hidden">
            <img
              className="w-full h-full bg-cover bg-center bg-no-repeat object-cover"
              src={image}
              alt=""
            />
          </div>
          <div className="font-semibold">
            <h1 className="">{name}</h1>
            <h1 className="text-xs">{artist}</h1>
          </div>
        </div>
        <button
          onClick={() => addToFavourites(index)}
          className={`w-max text-xs px-3 py-[6px] rounded bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 ${
            added ? "bg-green-500" : "bg-orange-500"
          } text-white absolute`}
        >
          {added ? "Added" : "Add to favourites"}
        </button>
      </div>
    </div>
  );
};

export default Music;
