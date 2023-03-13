import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./app/home/HomePage";
import TenderPage from "./app/tender/Tender";
import TendersPage from "./app/tenders/TendersPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/tenders" element={<TendersPage />} />
        <Route path="/tenders/:tender_id" element={<TenderPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
