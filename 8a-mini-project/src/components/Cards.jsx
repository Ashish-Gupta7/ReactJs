const Cards = (props) => {
  const { data, makeFriends, index } = props;
  const { name, image, friends } = data;

  return (
    <div className="w-52 bg-gray-950 text-white rounded flex flex-col items-start gap-3 overflow-hidden">
      <div className="h-40">
        <img
          className="h-full w-full bg-cover bg-center bg-no-repeat"
          src={image}
          alt=""
        />
      </div>
      <div className="p-2">
        <h1 className="mb-2">{name}</h1>
        <button
          onClick={() => makeFriends(index)}
          className={`px-4 py-1 ${
            friends ? "bg-green-600" : "bg-blue-700"
          } rounded`}
        >
          {friends ? "Friend" : "Add Friend"}
        </button>
      </div>
    </div>
  );
};

export default Cards;
