import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./app/home/HomePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
