import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Usestate from "./Usestate.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <h1>App componet =&gt;</h1>
    <App />
    <h1>Usestate componet =&gt;</h1>
    <Usestate />
  </>
);
