import { Link, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Services from "./components/Services";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <div
        style={{
          color: "white",
          backgroundColor: "black",
          marginBottom: "14px",
        }}
      >
        <Link style={{ color: "white" }} to="/home">
          Home
        </Link>
        <Link style={{ color: "white", marginLeft: "14px" }} to="/services">
          Services
        </Link>
        <Link style={{ color: "white", marginLeft: "14px" }} to="/contact">
          Contact
        </Link>
      </div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
