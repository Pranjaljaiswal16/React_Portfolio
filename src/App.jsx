import Pages from "./components/pages/Pages";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </div>
  );
};

export default App;
