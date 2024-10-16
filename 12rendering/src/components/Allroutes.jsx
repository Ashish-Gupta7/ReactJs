import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Pagenotfound from "./Pagenotfound";
import Services from "./Services";
import ListItems from "./ListItems";
import Items from "./Items";

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/items" element={<Items />} />
      <Route path="/items/:i" element={<ListItems />} />
      <Route path="*" element={<Pagenotfound />} />
    </Routes>
  );
};

export default Allroutes;
