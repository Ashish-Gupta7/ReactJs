import Nav from "./components/Nav";
import "./App.css";

const App = () => {
  const internalCss = {
    color: "gray",
    fontSize: "111px",
  };

  return (
    <div className="parent">
      {/* inline css */}
      <h1 style={{ color: "purple", fontSize: "90px" }}>Inline css</h1>

      {/* internal css */}
      <h1 style={internalCss}>internal css</h1>

      {/* external css */}
      <h1>Hii, i am parent Div.</h1>
      <Nav />
    </div>
  );
};

export default App;
