import { useState } from "react";
import Cards from "./components/Cards";

const App = () => {
  const rawData = [
    {
      image:
        "https://cdn.britannica.com/52/252752-050-2E120356/Cricketer-Rohit-Sharma-2023.jpg",
      name: "Rohit Sharma",
      friends: false,
    },
    {
      image:
        "https://crictoday.com/wp-content/uploads/2023/03/Virat-Kohli-1.jpg",
      name: "Virat Kohli",
      friends: false,
    },
    {
      image:
        "https://img.naidunia.com/naidunia/ndnimg/17082024/17_08_2024-ms_dhoni_ipl_2025.webp",
      name: "MS Dhoni",
      friends: false,
    },
  ];
  const [data, setdata] = useState(rawData);

  const makeFriends = (cardIndex) => {
    setdata((change) =>
      change.map((elem, index) => {
        if (index === cardIndex) return { ...elem, friends: !elem.friends };
        return elem;
      })
    );
  };
  // change naam ka argument hai jo data ke current state ko represent karta hai.

  return (
    <div className="h-screen bg-slate-300 flex items-center justify-center gap-10">
      {data.map((elem, index) => (
        <Cards
          key={index}
          index={index}
          data={elem}
          makeFriends={makeFriends}
        />
      ))}
    </div>
  );
};

export default App;
