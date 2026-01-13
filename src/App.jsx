import Pages from "./components/pages/Pages";
// import { BrowserRouter } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/common/Header";

const App = () => {
  return (
    <div>
      <HashRouter>
        {/* <BrowserRouter> */}
        <Header />
        <Pages />
        {/* </BrowserRouter> */}
      </HashRouter>
    </div>
  );
};

export default App;
