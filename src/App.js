import LaraLabs from "./LaraLabs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChatPage from "./components/ChatPage";
import AboutPage from "./components/AboutPage";
import CompaniesPage from "./components/CompaniesPage";
import FaqPage from "./components/FaqPage";

export default function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<LaraLabs />} />
        <Route path="/companies" element={<CompaniesPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/chat/:companyName" element={<ChatPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}
