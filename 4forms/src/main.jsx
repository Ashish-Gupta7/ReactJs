import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
// import Form from "./Formdata.jsx";
// import Twowaybinding from "./Twowaybinding";
// import Formrendering from "./Formrendering.jsx";
import Formtailwind from "./Formtailwind";

createRoot(document.getElementById("root")).render(
  <>
    {/* <h1>React ko nhi pta iss form ke baare me.</h1>
    <App /> */}
    {/* <br />
    <h1>
      React ko iss form ke baare me pata hai kyuki hum yaha two-way binding kr
      rhe hai mtlb phle form data ko react ke paas bhejte hai uske baad react
      document me bhejna hai.
    </h1>
    <Form /> */}
    {/* <br />
    <br />
    <br />
    <h1>Form: Two way binding</h1>
    <Twowaybinding /> */}
    {/* <br />
    <br />
    <br />
    <h1>Form: Rendering</h1>
    <Formrendering /> */}
    <Formtailwind />
  </>
);
