import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Header from "./components/layout/Header";
import DashboardLayout from "./components/layout/DashboardLayout";
import { useAuth } from "./context/AuthContext";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import GetStarted from "./pages/GetStarted";
import Dashboard from "./pages/Dashboard";
// ADD THESE IMPORTS (Ensure these files exist in your /pages folder)
import Features from "./pages/Feature";
import UseCases from "./pages/UseCase";
import Security from "./pages/Security";
import Resources from "./pages/Resources";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  const { user } = useAuth();    
  const location = useLocation();
  const isDashboardPath = location.pathname.startsWith("/dashboard");

  return (
    <>
      {/* Show header only if NOT in dashboard and NOT logged in */}
      {!isDashboardPath && !user && <Header />}

      <Routes>
        {/* --- Public Routes --- */}
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/use-cases" element={<UseCases />} />
        <Route path="/security" element={<Security />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Auth Logic */}
        <Route 
          path="/login" 
          element={user ? <Navigate to="/dashboard" replace /> : <Login />} 
        />
        <Route 
          path="/get-started" 
          element={user ? <Navigate to="/dashboard" replace /> : <GetStarted />} 
        />

        {/* --- Protected Dashboard --- */}
        <Route
          path="/dashboard/*"
          element={
            user ? (
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* Catch-all: Redirects to home if path doesn't exist */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}