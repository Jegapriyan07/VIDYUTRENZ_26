import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import ECELoader from './components/ECELoader/ECELoader';
import EventsCard from './pages/EventsCard/EventsCard';
import clgLogo from './assets/clg_logo.png';

const AppContent = () => {
  const location = useLocation();
  const isEventsCardPage = location.pathname.startsWith('/events/');

  return (
    <>
      <Navbar />

      {/* College Logo - Only show on home page, hide on events card pages */}
      {!isEventsCardPage && (
        <div style={{
          position: 'fixed',
          top: '85px', // Just below the navbar (70px height + 15px spacing)
          left: '20px',
          zIndex: 998, // Just below navbar but above other content
          background: 'rgba(0, 0, 0, 0.4)',
          backdropFilter: 'blur(10px)',
          padding: '15px 20px',
          borderRadius: '15px',
          border: '1px solid rgba(0, 242, 255, 0.2)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 242, 255, 0.1)',
          transition: 'all 0.3s ease',
          animation: 'fadeInSlide 0.8s ease-out'
        }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.4), 0 0 30px rgba(0, 242, 255, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 242, 255, 0.1)';
          }}
        >
          <img
            src={clgLogo}
            alt="Chennai Institute of Technology"
            style={{
              height: '60px',
              width: 'auto',
              display: 'block',
              filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3))'
            }}
          />
        </div>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events/:eventType" element={<EventsCard />} />
      </Routes>
    </>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);

  // Control body zoom based on loading state
  useEffect(() => {
    if (loading) {
      // Set body to 100% zoom during loading
      document.body.style.zoom = '100%';
    } else {
      // Restore to 67% zoom after loading
      document.body.style.zoom = '67%';
    }
  }, [loading]);

  const handleLoadingFinish = () => {
    setLoading(false);
  };

  // Show ONLY the loader during loading phase
  if (loading) {
    return <ECELoader onFinish={handleLoadingFinish} />;
  }

  // Show main app content ONLY after loading completes
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;