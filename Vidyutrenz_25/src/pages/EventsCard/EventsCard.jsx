import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./EventsCard.css";
import BackgroundImage from "./../../assets/BG_SMOKE.jpg";
import tech_1 from "./../../assets/tech_1.png";
import tech_2 from "./../../assets/tech_2.png";
import tech_3 from "./../../assets/tech_3.png";
import tech_4 from "./../../assets/tech_4.png";
import tech_5 from "./../../assets/tech_5.png";
import tech_6 from "./../../assets/tech_6.png";
import tech_7 from "./../../assets/tech_7.png";
import tech_8 from "./../../assets/tech_8.png";
import tech_9 from "./../../assets/tech_9.png";
import tech_10 from "./../../assets/tech_10.png";
import work_1 from "./../../assets/work_1.png";
import work_2 from "./../../assets/work_2.png";
import work_3 from "./../../assets/work_3.png";
import work_4 from "./../../assets/work_4.png";
import work_5 from "./../../assets/work_5.png";
import work_6 from "./../../assets/work_6.png";
import work_7 from "./../../assets/work_7.png";
import work_8 from "./../../assets/work_8.png";
import tech_1_pdf from "./../../assets/tech_1.pdf";
import tech_2_pdf from "./../../assets/tech_2.pdf";
import tech_3_pdf from "./../../assets/tech_3.pdf";
import tech_4_pdf from "./../../assets/tech_4.pdf";
import tech_5_pdf from "./../../assets/tech_5.pdf";
import tech_6_pdf from "./../../assets/tech_6.pdf";
import tech_7_pdf from "./../../assets/tech_7.pdf";
import tech_8_pdf from "./../../assets/tech_8.pdf";
import tech_9_pdf from "./../../assets/tech_9.pdf";
import tech_10_pdf from "./../../assets/tech_10.pdf";
import work_1_pdf from "./../../assets/work_1.pdf";
import work_2_pdf from "./../../assets/work_2.pdf";
import work_3_pdf from "./../../assets/work_3.pdf";
import work_4_pdf from "./../../assets/work_4.pdf";
import work_5_pdf from "./../../assets/work_5.pdf";
import work_6_pdf from "./../../assets/work_6.pdf";
import work_7_pdf from "./../../assets/work_7.pdf";
import work_8_pdf from "./../../assets/work_8.pdf";
const EventsCard = () => {
  const { eventType } = useParams();
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);

  // UPDATED DATES TO: Feb 06, 2026
  const eventData = {
    technical: [
      { id: 1, title: "Prototype Parade", description: "Showcase your innovative prototypes and engineering marvels in this exciting exhibition.", date: "Feb 06, 2026", time: "9.00 AM to 2:30 PM", prize_1: "₹1500", prize_2: "₹1000", prize_3: "₹500", registrationFee: "Free Entry", teamSize: "1 to 3 Members", venue: "TBD", coordinators: "Jyothilalitha P ( 9444941814 )", bgImage: tech_1, registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSfZTzzVJ6OPhUlpkySwsJksrXybXjdVNHBv2OfiaylUvqsfNw/viewform", rulesLink: tech_1_pdf },
      { id: 2, title: "Hypothesis Hub", description: "Present your research papers and innovative ideas to expert judges and win exciting prizes.", date: "Feb 06, 2026", time: "9.00 AM to 2:30 PM", prize_1: "₹1500", prize_2: "₹1000", prize_3: "₹500", registrationFee: "Free Entry", teamSize: "1 to 2 Members", venue: "TBD", coordinators: "Shanmugapriya I ( 6374761932 )", bgImage: tech_2, registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSdCDWFRhIXxEoIbzCnjuKD0SEHzoOdPaiiryWwfCP45oEtowA/viewform", rulesLink: tech_2_pdf },
      { id: 3, title: "Tech IQ Royale", description: "Test your technical knowledge and quick thinking in this ultimate tech quiz battle.", date: "Feb 06, 2026", time: "9.00 AM to 2:30 PM", prize_1: "₹1500", prize_2: "₹1000", prize_3: "₹500", registrationFee: "Free Entry", teamSize: "1 to 2 Members", venue: "TBD", coordinators: " Yokeshwar B S ( 8807938693 )", bgImage: tech_3, registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSdWqnlyJTQYiSDWHHFKpKivmlOQZ5JfZQTmoZE4bAEr_Prr-g/viewform", rulesLink: tech_3_pdf },
      { id: 4, title: "CoreCode Championship", description: "Compete in intense coding challenges and prove your programming prowess.", date: "Feb 06, 2026", time: "9.00 AM to 2:30 PM", prize_1: "₹1500", prize_2: "₹1000", prize_3: "₹500", registrationFee: "Free Entry", teamSize: "Individual", venue: "TBD", coordinators: "Priyanka S ( 8667098201 )", bgImage: tech_4, registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSc6dseKdUswSZ2YXLoREC5-G8pwFzpcf_-6-Omjvm-H04wBFQ/viewform", rulesLink: tech_4_pdf },
      { id: 5, title: "Duel of Pathfinder", description: "Navigate through complex challenges and find optimal solutions in this strategic competition.", date: "Feb 06, 2026", time: "9.00 AM to 2:30 PM", prize_1: "₹1500", prize_2: "₹1000", prize_3: "₹500", registrationFee: "Free Entry", teamSize: "1 to 4 Members", venue: "TBD", coordinators: "SACHWIN KANTH A ( 8610407856 )", bgImage: tech_5, registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSeWYRlRC8W4_M0rcxOj_3UvSGM2tdJ-NV3LmmcItGFXDmtxSQ/viewform", rulesLink: tech_5_pdf },
      { id: 6, title: "Clash of Perspectives", description: "Engage in thought-provoking debates and showcase your communication skills.", date: "Feb 06, 2026", time: "9.00 AM to 2:30 PM", prize_1: "₹1500", prize_2: "₹1000", prize_3: "₹500", registrationFee: "Free Entry", teamSize: "1 to 6 Members", venue: "TBD", coordinators: "JAYAVARSHINI M ( 9894394939 )", bgImage: tech_6, registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSc2hvde5x63lPTOMQmBFIjAXuB6aWym4NR63Q0zvi5wnBEujw/viewform", rulesLink: tech_6_pdf },
      { id: 7, title: "Signal Charades", description: "Decode signals and communicate effectively in this exciting technical charades game.", date: "Feb 06, 2026", time: "9.00 AM to 2:30 PM", prize_1: "₹1500", prize_2: "₹1000", prize_3: "₹500", registrationFee: "Free Entry", teamSize: "1 to 2 Members", venue: "TBD", coordinators: " Vengatesan R ( 7448919629 )", bgImage: tech_7, registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLScUIx2rcj3FCuZ_A-bP319AX1u1w-9_GtxWt9ZcR3i_PbWmoA/viewform", rulesLink: tech_7_pdf },
      { id: 8, title: "Pitch It On", description: "Present your innovative business ideas and startup concepts to win investor attention.", date: "Feb 06, 2026", time: "9.00 AM to 2:30 PM", prize_1: "₹1500", prize_2: "₹1000", prize_3: "₹500", registrationFee: "Free Entry", teamSize: "1 to 2 Members", venue: "TBD", coordinators: " Mohammed Abrar ( 8637452592 )", bgImage: tech_8, registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSdoBt3q-366HkYLPMMFAcDL7ie6tlkbdxdFI2g866wowpw_2w/viewform", rulesLink: tech_8_pdf },
      { id: 9, title: "Embedded Treasure Hunt", description: "Solve embedded systems puzzles and hunt for technical treasures in this adventure.", date: "Feb 06, 2026", time: "9.00 AM to 2:30 PM", prize_1: "₹1500", prize_2: "₹1000", prize_3: "₹500", registrationFee: "Free Entry", teamSize: "2 to 4 Members", venue: "TBD", coordinators: "Gautham Suresh ( 9176163207 ) & A Athul Krishna ( 9344964309 )", bgImage: tech_9, registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSd4YZUqCvSq2f7LVqUhpqaukkJ-FiPjhnzgOonOh4TSpHsRwg/viewform", rulesLink: tech_9_pdf },
      { id: 10, title: "Tech Meme Pitch", description: "Create hilarious tech memes and pitch them creatively to win the meme championship.", date: "Feb 06, 2026", time: "9.00 AM to 2:30 PM", prize_1: "₹1500", prize_2: "₹1000", prize_3: "₹500", registrationFee: "Free Entry", teamSize: "1 to 2 Members", venue: "TBD", coordinators: "Abhirami D ( 9444506320 ) & Gautham Suresh ( 9176163207 )", bgImage: tech_10, registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSf7m_xzIGB3Yuf6ep19IaRIFp1NVHmJYpTqNGXfa1YF4pzmSA/viewform", rulesLink: tech_10_pdf },
    ],
    workshop: [
      { id: 1, title: "IoT with Robotics", description: "Learn IoT fundamentals and build robotic systems with hands-on projects.", date: "Feb 06, 2026", time: "9.00 AM to 2:30 PM", prize: "Certification", registrationFee: "₹180", teamSize: "Individual", venue: "IoT Lab", coordinators: "Nishalini ( 9940759155 )", bgImage: work_1, registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSf39s0NmLOLH-2Zbnax0mCbutEzYkNGMFFWamvdYNjvlZMRGw/viewform", rulesLink: work_1_pdf },
      { id: 2, title: "PCB Design & Fabrication", description: "Master PCB design tools and learn the complete fabrication process.", date: "Feb 06, 2026", time: "9.00 AM to 2:30 PM", prize: "Certification", registrationFee: "₹180", teamSize: "Individual", venue: "PCB Lab", coordinators: "SRRI LAKSHMI M R ( 9363448916 )", bgImage: work_2, registrationLink: "https://docs.google.com/forms/d/120V4vRZoRtcWFwhOzkY9hWYnQZNbPAIydNpynfqFfbs/viewform?edit_requested=true", rulesLink: work_2_pdf },
      { id: 3, title: "Embedded Linux", description: "Dive into embedded Linux systems and learn kernel programming.", date: "Feb 06, 2026", time: "9.00 AM to 2:30 PM", prize: "Certification", registrationFee: "₹180", teamSize: "Individual", venue: "TBD", coordinators: "Abishek S  ( 9384997045 )", bgImage: work_3, registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSf5lApKn1XJ2cb3_M7a21iuPht99doGFCHVVVC4lXcS-NcniA/viewform", rulesLink: work_3_pdf },
      { id: 4, title: "Cadence 90nm Technology", description: "Explore advanced VLSI design using Cadence tools and 90nm technology.", date: "Feb 06, 2026", time: "9.00 AM to 2:30 PM", prize: "Certification", registrationFee: "₹180", teamSize: "Individual", venue: "VLSI Lab", coordinators: "Chezhiyan  ( 8524961704 )", bgImage: work_4, registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLScWL9uWEFiCOWc4fxfayp-yYOZc4k_9ZqOLqepsM_7h4rRH0g/viewform", rulesLink: work_4_pdf },
      { id: 5, title: "Gen AI", description: "Discover generative AI models and create innovative AI-powered applications.", date: "Feb 06, 2026", time: "9.00 AM to 2:30 PM", prize: "Certification", registrationFee: "₹180", teamSize: "Individual", venue: "AI Lab", coordinators: "Sudharshana B ( 8610365358 )", bgImage: work_5, registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSd_69ubfYPmvWCxRKj2V0w0YvWTAlbQDUFOgXUCBuhdUdJ2qQ/viewform", rulesLink: work_5_pdf },
      { id: 6, title: "Nanotechnology & Material Synthesis", description: "Explore nanomaterials and learn advanced synthesis techniques.", date: "Feb 06, 2026", time: "9.00 AM to 2:30 PM", prize: "Certification", registrationFee: "₹200", teamSize: "Individual", venue: "Nano Lab", coordinators: "Rajarajan S A ( 9025392252 )", bgImage: work_6, registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSf0c8r_e1Usu8-8i8nJGtZdOe0FTQqdBH1PDpuvuBnA7uFWEA/viewform", rulesLink: work_6_pdf },
      { id: 7, title: "Synopsys", description: "Learn to create professional research synopsys and technical documentation.", date: "Feb 06, 2026", time: "9.00 AM to 2:30 PM", prize: "Certification", registrationFee: "₹180", teamSize: "Individual", venue: "TBD", coordinators: "VISHVESH B ( 6383941462 )", bgImage: work_7, registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSfzemTG-o1phamMrzAnp1I0RsaAVLzLRX_s_5z8ZQS_lu3LZg/viewform", rulesLink: work_7_pdf },
      { id: 8, title: "Spin-Powered Probabilistic AI", description: "Explore cutting-edge probabilistic AI models powered by spin-based computing architectures.", date: "Feb 06, 2026", time: "9.00 AM to 2:30 PM", prize: "Certification", registrationFee: "₹200", teamSize: "Individual", venue: "TBD", coordinators: "TRIJAL ( 6379791779 )", bgImage: work_8, registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSeXDyimTIV5qBRHw-5bBL8Mblg9uX7ZaRXBWyBfmpgVxLNfeg/viewform", rulesLink: work_8_pdf },
    ],
  };

  useEffect(() => {
    const selectedEvents = eventData[eventType?.toLowerCase()] || [];
    console.log('EventType:', eventType, 'Events:', selectedEvents);
    setEvents(selectedEvents);

    // Scroll to top when eventType changes - with slight delay to ensure DOM is ready
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 0);
  }, [eventType]);

  const handleRulesDownload = (rulesLink) => {
    window.open(rulesLink, "_blank");
  };

  return (
    <div
      className="ecards-main-container"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${BackgroundImage})`,
      }}
    >
      <div className="ecards-header">
        <button
          onClick={() => navigate('/', { state: { scrollTo: 'events' } })}
          className="ecards-back-btn"
        >
          <span className="ecards-back-arrow">←</span> Back to Events
        </button>
        <h1 className="ecards-title">{eventType} Events</h1>
      </div>

      <div className="ecards-grid">
        {events.map((event, index) => (
          <div
            key={event.id}
            className={`ecards-detail-container ${index % 2 === 0 ? "theme-blue" : "theme-red"
              }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Header with zoomed background image */}
            <div className="ecards-image-header">
              <div
                className="ecards-image-bg"
                style={{ backgroundImage: `url(${event.bgImage})` }}
              ></div>
              <div className="ecards-image-overlay"></div>
            </div>

            {/* Content Body */}
            <div className="ecards-content-wrapper">
              <h2 className="ecards-event-title">{event.title}</h2>
              <p className="ecards-description">{event.description}</p>

              <div className="ecards-info-grid">
                <div className="ecards-info-item">
                  <span className="ecards-info-label">Date</span>
                  <span className="ecards-info-value">{event.date}</span>
                </div>
                <div className="ecards-info-item">
                  <span className="ecards-info-label">Time</span>
                  <span className="ecards-info-value">{event.time}</span>
                </div>
                <div className="ecards-info-item">
                  <span className="ecards-info-label">Fee</span>
                  <span className="ecards-info-value">{event.registrationFee}</span>
                </div>
                <div className="ecards-info-item">
                  <span className="ecards-info-label">Prizes</span>
                  <span className="ecards-info-value">
                    {event.prize_1
                      ? `${event.prize_1} / ${event.prize_2} / ${event.prize_3}${eventType?.toLowerCase() === 'technical' ? ' + Certification' : ''}`
                      : event.prize
                    }
                  </span>
                </div>
                <div className="ecards-info-item">
                  <span className="ecards-info-label">Team</span>
                  <span className="ecards-info-value">{event.teamSize}</span>
                </div>
                <div className="ecards-info-item" style={{ gridColumn: 'span 2' }}>
                  <span className="ecards-info-label">Coordinators</span>
                  <span className="ecards-info-value" style={{ fontSize: '0.9rem' }}>{event.coordinators}</span>
                </div>
              </div>

              <div className="ecards-button-group">
                {event.registrationClosed ? (
                  <div className="ecards-closed-badge">
                    <span className="closed-icon">🚫</span>
                    <span className="closed-text">Registration Closed</span>
                    {event.closedReason && (
                      <span className="closed-reason">{event.closedReason}</span>
                    )}
                  </div>
                ) : (
                  <a
                    href={event.registrationLink}
                    className="ecards-reg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="ecards-register-btn">
                      Register Now
                    </button>
                  </a>
                )}

                {event.rulesLink && (
                  <button
                    className="ecards-rules-btn"
                    onClick={() => handleRulesDownload(event.rulesLink)}
                  >
                    Rules
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsCard;