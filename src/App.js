import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Features from './components/Features';
import GridAnimation from './components/GridAnimation';
import TestimoniaFirstSection from './components/Testimonial';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/testinomial" replace />} />
        <Route path="/testinomial" element={<TestimoniaFirstSection />} />
        <Route path="/features" element={<Features />} />
        <Route path="/grid" element={<GridAnimation />} />
      </Routes>
    </Router>
  );
}

export default App;
