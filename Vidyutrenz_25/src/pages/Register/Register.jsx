import React, { useState, useEffect } from "react";
import { Mail, User, Phone, School, BookOpen, Users, X } from "lucide-react";
import "./Register.css";

const Notification = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`notification ${type}`}>
      <div className="notification-content">
        <span className="notification-message">{message}</span>
        <button className="notification-close" onClick={onClose}>
          <X size={18} />
        </button>
      </div>
      <div className="notification-progress" />
    </div>
  );
};

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    department: "",
    year: "",
    event: "",
  });

  const [notifications, setNotifications] = useState([]);

  const eventOptions = [
    { id: 1, name: "Code Combat", fee: "₹500" },
    { id: 2, name: "Hack Fusion", fee: "₹300" },
    { id: 3, name: "Treasure Hunt", fee: "₹800" },
    // Cultural Night removed
    { id: 5, name: "AI/ML Workshop", fee: "₹600" },
    { id: 6, name: "Web Development", fee: "₹400" },
  ];

  const showNotification = (message, type) => {
    const id = Date.now();
    setNotifications((prev) => [...prev, { id, message, type }]);
  };

  const removeNotification = (id) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.event) {
      showNotification("Please select an event!", "error");
      return;
    }

    showNotification(
      `Registration successful! Welcome to ${formData.event}`,
      "success"
    );
    console.log("Form submitted:", formData);

    setFormData({
      name: "",
      email: "",
      phone: "",
      college: "",
      department: "",
      year: "",
      event: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="register-container">
      <div className="notifications-container">
        {notifications.map(({ id, message, type }) => (
          <Notification
            key={id}
            message={message}
            type={type}
            onClose={() => removeNotification(id)}
          />
        ))}
      </div>

      <div className="register-content">
        <div className="register-header">
          <h1>Register for Symposium</h1>
          <p>Join us for an exciting day of learning and networking!</p>
        </div>

        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="input-container">
              <User className="input-icon" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <div className="input-container">
              <Mail className="input-icon" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <div className="input-container">
              <Phone className="input-icon" />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <div className="input-container">
              <School className="input-icon" />
              <input
                type="text"
                name="college"
                placeholder="College Name"
                value={formData.college}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group half">
              <div className="input-container">
                <BookOpen className="input-icon" />
                <input
                  type="text"
                  name="department"
                  placeholder="Department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group half">
              <div className="input-container">
                <Users className="input-icon" />
                <select
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Year</option>
                  <option value="1">1st Year</option>
                  <option value="2">2nd Year</option>
                  <option value="3">3rd Year</option>
                  <option value="4">4th Year</option>
                </select>
              </div>
            </div>
          </div>

          <div className="form-group">
            <div className="input-container">
              <BookOpen className="input-icon" />
              <select
                name="event"
                value={formData.event}
                onChange={handleChange}
                required
                className="event-select"
              >
                <option value="">Select Event</option>
                {eventOptions.map((event) => (
                  <option key={event.id} value={event.name}>
                    {event.name} - {event.fee}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button type="submit" className="submit-button">
            Register Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
