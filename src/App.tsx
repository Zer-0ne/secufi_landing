import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import ForAdvisors from "./components/ForAdvisors";
import CTA from "./components/CTA";
import { Routes, Route, Navigate } from "react-router-dom";
import Form from "./components/Form.tsx";
import AdvisorSignup from "./pages/AdvisorSignup";
import AllFeatures from "./pages/AllFeatures";
import About from "./pages/About";
import Security from "./pages/Security";
import ForAdvisorsPage from "./pages/ForAdvisorsPage";
import Legal from "./pages/Legal";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="min-h-screen bg-[#0a0a0f] text-white overflow-hidden">
            <Hero />
            <Features />
            <HowItWorks />
            <ForAdvisors />
            <CTA />
          </div>
        }
      />

      <Route path="/contact" element={<Form />} />
      <Route path="/advisor-signup" element={<AdvisorSignup />} />
      <Route path="/features" element={<AllFeatures />} />
      <Route path="/legal" element={<Legal />} />
      <Route
        path="/privacy-policy"
        element={<Navigate to="/legal#privacy" replace />}
      />
      <Route
        path="/terms-of-service"
        element={<Navigate to="/legal#terms" replace />}
      />
      <Route path="/about" element={<About />} />
      <Route path="/security" element={<Security />} />
      <Route path="/advisors" element={<ForAdvisorsPage />} />
      <Route path="/for-advisors" element={<Navigate to="/advisors" replace />} />
    </Routes>
  );
}

export default App;
