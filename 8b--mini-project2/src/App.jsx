import { useState } from "react";
import Music from "./components/Music";
import Navbar from "./components/Navbar";

const App = () => {
  const rawData = [
    {
      image:
        "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Long Drive",
      artist: "Honey Singh",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1506295400697-42afff963a26?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Satisfya",
      artist: "Imran Khan",
      added: false,
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1682124865982-86f0aa859b01?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Imaginary",
      artist: "Imran Khan",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1515861262549-45fc98de0aa7?q=80&w=2024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "All Black",
      artist: "Raftar",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1529086005036-bbc8d628e109?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Tere Liye",
      artist: "Atif Aslam",
      added: false,
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1661929257183-4b5850e31d5e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Fearless",
      artist: "Neffex",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1526998827167-cb92fb4703f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "One Love",
      artist: "Shubh",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1533630160910-65f5a1718c65?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Besabriyaan",
      artist: "Arijit Singh",
      added: false,
    },
    {
      image: "https://i.ytimg.com/vi/ECSUJ-jJSwY/maxresdefault.jpg",
      name: "Greateful",
      artist: "Neffex",
      added: false,
    },
  ];

  const [data, setdata] = useState(rawData);

  const addToFavourites = (favIndex) => {
    setdata((prevData) => {
      return prevData.map((elem, index) => {
        if (favIndex === index) return { ...elem, added: !elem.added };
        return elem;
      });
    });
  };

  return (
    <>
      <div className="h-screen px-16 py-10 bg-zinc-300">
        <div>
          <Navbar data={data} />
        </div>
        <div className="mt-6 flex items-center gap-8 flex-wrap">
          {data.map((elem, index) => (
            <Music
              key={index}
              data={elem}
              index={index}
              addToFavourites={addToFavourites}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
