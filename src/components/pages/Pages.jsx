import { Routes, Route } from "react-router-dom";
import Header from "../common/Header";

const Pages = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
    </>
  );
};

export default Pages;
