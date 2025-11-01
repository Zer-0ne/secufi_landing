import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import ForAdvisors from './components/ForAdvisors';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-hidden">
      <Hero />
      <Features />
      <HowItWorks />
      <ForAdvisors />
      <CTA />
    </div>
  );
}

export default App;
