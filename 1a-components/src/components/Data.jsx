const Data = () => {
  const data = [
    {
      image:
        "https://cdn.britannica.com/52/252752-050-2E120356/Cricketer-Rohit-Sharma-2023.jpg",
      name: "Rohit Sharma",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, repellat!",
    },
    {
      image:
        "https://crictoday.com/wp-content/uploads/2023/03/Virat-Kohli-1.jpg",
      name: "Virat Kohli",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos officia inventore iste! Inventore, saepe doloribus?",
    },
    {
      image:
        "https://img.naidunia.com/naidunia/ndnimg/17082024/17_08_2024-ms_dhoni_ipl_2025.webp",
      name: "MS Dhoni",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis vitae distinctio consequatur.",
    },
  ];
  return (
    <>
      <div className="h-screen bg-slate-300 flex items-center justify-center gap-10">
        {data.map((elm, idx) => (
          <div
            key={idx}
            className="w-52 bg-gray-950 text-white rounded flex flex-col items-start gap-3 overflow-hidden"
          >
            <div className="h-40">
              <img
                className="h-full w-full bg-cover bg-center bg-no-repeat"
                src={elm.image}
                alt=""
              />
            </div>
            <div className="p-2">
              <h1 className="mb-2">{elm.name}</h1>
              <p className="text-sm">{elm.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Data;
