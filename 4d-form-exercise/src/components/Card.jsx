const Card = ({ user, hanldleRemove, index }) => {
  const { image, name, email, bio } = user;

  return (
    <>
      <div className="w-40 bg-zinc-50 rounded-md flex items-center justify-between flex-col gap-3 p-2">
        <div className="flex items-center flex-col gap-2">
          <div className="w-14 h-14 overflow-hidden rounded-full">
            <img className="w-full h-full object-cover" src={image} alt="" />
          </div>
          <div className="flex items-center flex-col">
            <h1 className="font-semibold text-center">{name}</h1>
            <h1 className="opacity-50 font-semibold text-xs text-center">
              {email}
            </h1>
          </div>
          <p className="text-xs font-semibold">{bio}</p>
        </div>
        <button
          onClick={() => hanldleRemove(index)}
          className="px-3 py-1 rounded-md text-xs font-semibold bg-red-500 text-white"
        >
          Remove it
        </button>
      </div>
    </>
  );
};

export default Card;
