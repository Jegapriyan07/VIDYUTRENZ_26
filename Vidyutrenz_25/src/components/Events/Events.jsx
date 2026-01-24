import React from "react";
import { useNavigate } from "react-router-dom";
import "./Events.css";
import Tech from "./../../assets/tech_logo.png";
import Workshop from "./../../assets/workshop_logo.png";
import NonTech from "./../../assets/nontech_logo.png";
import BackgroundImage from "./../../assets/BG_SMOKE.jpg";

const Events = () => {
  const navigate = useNavigate();

  const handleEventClick = (eventType) => {
    navigate(`/events/${eventType.toLowerCase()}`);
  };

  return (
    <div
      className="events-container"
    >
      <div className="events-header">
        <h2 className="events-title">Events</h2>
        <div className="title-underline"></div>
      </div>

      <div className="events-list">
        {/* Technical Event - RED THEME */}
        <div
          className="event-card red-theme"
          style={{ backgroundImage: `url(${Tech})` }}
          onClick={() => handleEventClick("Technical")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && handleEventClick("Technical")}
        >
          <div className="event-overlay">
            <h3>Technical</h3>
            <p>Register for our Technical Events and Win Exciting Prizes</p>
          </div>
        </div>

        {/* Workshop Event - BLUE THEME */}
        <div
          className="event-card blue-theme"
          style={{ backgroundImage: `url(${Workshop})` }}
          onClick={() => handleEventClick("Workshop")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && handleEventClick("Workshop")}
        >
          <div className="event-overlay">
            <h3>Workshop</h3>
            <p>Register for our Workshop Events and Win Exciting Prizes</p>
          </div>
        </div>

        {/* Non Technical Event - RED THEME */}
        <div
          className="event-card red-theme"
          style={{ backgroundImage: `url(${NonTech})` }}
          onClick={() => handleEventClick("NonTechnical")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && handleEventClick("NonTechnical")}
        >
          <div className="event-overlay">
            <h3>Non Technical</h3>
            <p>Online Gaming & Entertainment Events</p>
          </div>
        </div>
      </div>

      {/* Note: If you add more events here, the CSS Grid will 
          automatically place the 3rd one in the first row, 
          and the 4th one on the next row. */}
    </div>
  );
};

export default Events;