import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import ForAdvisors from "./components/ForAdvisors";
import CTA from "./components/CTA";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Form from "./components/Form.tsx";
import AdvisorSignup from "./pages/AdvisorSignup";
import ScheduleDemo from "./pages/ScheduleDemo";
import AllFeatures from "./pages/AllFeatures";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="min-h-screen bg-[#0a0a0f] text-white overflow-hidden">
            <Header />
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
      <Route path="/schedule-demo" element={<ScheduleDemo />} />
      <Route path="/features" element={<AllFeatures />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
    </Routes>
  );
}

export default App;
