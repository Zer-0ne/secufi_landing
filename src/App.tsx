import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import ForAdvisors from "./components/ForAdvisors";
import CTA from "./components/CTA";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Form from "./components/Form.tsx";
import AdvisorSignup from "./pages/AdvisorSignup";
import ScheduleDemo from "./pages/ScheduleDemo";

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
      <Route path="/schedule-demo" element={<ScheduleDemo />} />
    </Routes>
  );
}

export default App;
