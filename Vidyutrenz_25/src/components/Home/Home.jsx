import React, { useMemo, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Home.css";

// 1. IMPORT COMPONENTS
import Events from "../Events/Events";
import About from "../About/About";
import Contact from "../Contact/Contact";

// IMPORT IMAGES
import BackgroundImage from "../../assets/BG_SMOKE.jpg";
import HeroLogo from "../../assets/navbar_logo.png";

const Home = () => {
  const location = useLocation();

  // Countdown Timer State
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      // Small timeout to ensure DOM is ready and layout is stable
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);

      // Optional: Clean up state so refreshes don't scroll again? 
      // Actually React Router state persists, but usually fine.
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  // Countdown Timer Effect
  useEffect(() => {
    const eventDate = new Date('2026-02-06T00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  // SCROLL FUNCTION FOR "EXPLORE EVENTS" BUTTON
  const scrollToEvents = () => {
    const eventsSection = document.getElementById("events");
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // PARTICLES
  const particles = useMemo(() => {
    return Array.from({ length: 70 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
      duration: `${0.2 + Math.random() * 1.5}s`,
      scale: 0.5 + Math.random() * 1
    }));
  }, []);

  const renderSmokePuffs = () => (
    <>
      <div className="smoke-puff p1"></div>
      <div className="smoke-puff p2"></div>
      <div className="smoke-puff p3"></div>
      <div className="smoke-puff p4"></div>
      <div className="smoke-puff p5"></div>
    </>
  );

  return (
    <>
      {/* FIXED BACKGROUND LAYER */}
      <div className="fixed-background" style={{
        position: 'fixed', top: 0, left: 0, width: '100%', height: '150vh', zIndex: 0
      }}>
        <div className="bg-image-layer" style={{ backgroundImage: `url(${BackgroundImage})` }}></div>
        {/* Particles */}
        <div className="particles-layer">
          {particles.map((p) => (
            <div key={p.id} className="particle-spark" style={{
              top: p.top, left: p.left, animationDelay: p.delay,
              animationDuration: p.duration, transform: `scale(${p.scale})`
            }}></div>
          ))}
        </div>
        <div className="hero-overlay"></div>
      </div>

      <main className="home-container">

        {/* --- SECTION 1: HERO (ID="home") --- */}
        <section id="home" className="home-section hero-layout" style={{ height: '150vh', overflow: 'hidden' }}>
          <div className="logo-area">
            <img src={HeroLogo} alt="Vidyutrenz Logo" className="hero-logo" />
          </div>

          <div className="title-text-wrapper">
            <h1 className="cyber-text top-text" data-text="VIDYUTRENZ">VIDYUTRENZ</h1>
            <h2 className="cyber-text bottom-text" data-text="2K26">2K26</h2>
          </div>

          <div className="subtitle-area">
            <h3 className="subtitle main-sub">XENOTRIX</h3>
            <h4 className="subtitle symposium-sub">A NATIONAL LEVEL TECHNICAL SYMPOSIUM</h4>
          </div>

          {/* COUNTDOWN TIMER */}
          <div className="countdown-container">
            <div className="countdown-label">EVENT STARTS IN</div>
            <div className="countdown-timer">
              <div className="time-box">
                <div className="time-value">{String(timeLeft.days).padStart(2, '0')}</div>
                <div className="time-label">DAYS</div>
              </div>
              <div className="time-separator">:</div>
              <div className="time-box">
                <div className="time-value">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="time-label">HOURS</div>
              </div>
              <div className="time-separator">:</div>
              <div className="time-box">
                <div className="time-value">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="time-label">MINS</div>
              </div>
              <div className="time-separator">:</div>
              <div className="time-box">
                <div className="time-value">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="time-label">SECS</div>
              </div>
            </div>
            <div className="event-date">FEBRUARY 06, 2026</div>
          </div>

          {/* SCROLL DOWN BUTTON */}
          <div className="scroll-indicator" onClick={scrollToEvents}>
            <p className="scroll-text">EXPLORE EVENTS</p>
            <div className="chevron-container">
              <div className="chevron"></div><div className="chevron"></div><div className="chevron"></div>
            </div>
          </div>
        </section>

        {/* --- SECTION 2: ABOUT (ID="about") --- */}
        <About />

        {/* --- SECTION 3: EVENTS (ID="events") --- */}
        <section id="events" style={{ height: '150vh', scrollSnapAlign: 'start' }}>
          <Events />
        </section>

        {/* --- SECTION 4: CONTACT (ID="contact") --- */}
        <Contact />

      </main>
    </>
  );
};

export default Home;