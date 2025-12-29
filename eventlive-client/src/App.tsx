import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";

import Home from "./pages/Home";
import Features from "./pages/Feature";
import UseCases from "./pages/UseCase";
import Pricing from "./pages/Pricing";
import Security from "./pages/Security";
import Resources from "./pages/Resources";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import GetStarted from "./pages/GetStarted";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/use-cases" element={<UseCases />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/security" element={<Security />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/get-started" element={<GetStarted />} />
      </Routes>
    </>
  );
}
