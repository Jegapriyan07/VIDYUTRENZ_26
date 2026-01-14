import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import "./Contact.css";
import BackgroundImage from "./../../assets/BG_SMOKE.jpg";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="contact-icon" />,
      title: "Email Us",
      content: "vidyutrenz.ece@citchennai.net",
      link: "mailto:vidyutrenz.ece@citchennai.net",
    },
    {
      icon: <Phone className="contact-icon" />,
      title: "Call Us",
      contacts: [
        { name: "Krisnaprasanth", phone: "+91 70949 02789" },
        { name: "Akshaya", phone: "+91 90433 42391" },
        { name: "Afnan", phone: "+91 93603 01723" }
      ],
      link: "tel:+917094902789",
    },
    {
      icon: <MapPin className="contact-icon" />,
      title: "Visit Us",
      content: "Chennai Institute Of Technology",
      link: "https://maps.google.com/?q=Chennai+Institute+Of+Technology",
    },
  ];

  return (
    <div
      className="contact-page"
      id="contact"
    >
      <div className="contact-container">
        {/* Header Section */}
        <div className="contact-header">
          <h1 className="contact-title">Connect with Vidyutrenz</h1>
          <p className="contact-subtitle">
            Have questions about our events? We're here to help make your
            symposium experience exceptional.
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="contact-info-grid">
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="contact-card-link-wrapper"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-card">
                <div className="icon-container">{item.icon}</div>
                <h3 className="contact-card-title">{item.title}</h3>
                {item.contacts ? (
                  <div className="contact-list">
                    {item.contacts.map((contact, idx) => (
                      <p key={idx} className="contact-card-content">
                        <span className="contact-name">{contact.name}</span>
                        <span style={{ fontSize: '1rem', display: 'block' }}>{contact.phone}</span>
                      </p>
                    ))}
                  </div>
                ) : (
                  <p className="contact-card-content">{item.content}</p>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;