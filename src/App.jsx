import Pages from "./components/pages/Pages";
// import { BrowserRouter } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <HashRouter>
        {/* <BrowserRouter> */}
        <Header />
        <Pages />
        {/* </BrowserRouter> */}

        <Footer />
      </HashRouter>
    </div>
  );
};

export default App;
