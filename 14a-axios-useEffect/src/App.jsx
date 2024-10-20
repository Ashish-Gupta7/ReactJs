import Products from "./components/Products";
import Users from "./components/Users";

const App = () => {
  return (
    <div>
      <h1>
        Page render hote samay hi products ka data aa jata hai jabki users kaa
        nhi aata hai, aur ye kaam useEffect ki wajah se ho rha hai
      </h1>
      <hr />
      <Products />
      <hr />
      <Users />
    </div>
  );
};

export default App;
