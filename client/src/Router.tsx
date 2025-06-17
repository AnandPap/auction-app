import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./main-components/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
