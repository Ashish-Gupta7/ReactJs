import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Usestate from "./Usestate.jsx";
import Multichange from "./Multichange.jsx";
import ObjectInState from "./ObjectInState.jsx";
import AdvanceState1 from "./AdvanceState1.jsx";
import AdvanceState2 from "./AdvanceState2.jsx";
import AdvanceState3 from "./AdvanceState3.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <hr />
    <h1>App componet =&gt;</h1>
    <App />
    <hr />
    <h1>Usestate componet =&gt;</h1>
    <Usestate />
    <hr />
    <Multichange />
    <hr />
    <ObjectInState />
    <hr />
    <AdvanceState1 />
    <hr />
    <AdvanceState2 />
    <hr />
    <AdvanceState3 />
  </>
);
