import { useState } from "react";
import { validateEmail } from "../utils/validateEmail";

import "../pages/Contact.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else {
      setMessage(value);
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!value.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "Field is required",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!name || !message) {
      setErrors({
        name: name ? "" : "Please fill out this field",
        email: email ? "" : "Please fill out this field",
        message: message ? "" : "Please fill out this field",
      });
      return;
    }

    if (!validateEmail(email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Please enter a valid email address",
      }));
      return;
    }

    setName("");
    setEmail("");
    setMessage("");
    setErrors({});
  };

  return (
    <div className="body container-fluid">
      <h1 className="text-center title">Contact Me</h1>
      <form className="row g-3 form" onSubmit={handleFormSubmit}>
        <div className="col-md-6">
          <input
            className="inlineInput form-control inputBox"
            name="name"
            value={name}
            onChange={handleInputChange}
            onBlur={handleBlur}
            type="text"
            placeholder="Full Name"
          />
          {errors.name && <p className="error-text">{errors.name}</p>}
        </div>
        <div className="col-md-6">
          <input
            className="inlineInput form-control inputBox"
            name="email"
            value={email}
            onChange={handleInputChange}
            onBlur={handleBlur}
            type="email"
            placeholder="Email Address"
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>
        <div className="col-md-12">
          <textarea
            className="blockInput form-control inputBox"
            name="message"
            value={message}
            onChange={handleInputChange}
            onBlur={handleBlur}
            type="text"
            placeholder="Your Message"
          />
          {errors.message && <p className="error-text">{errors.message}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
