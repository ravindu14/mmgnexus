"use client";

import { useState } from "react";

const ContactUs = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Example using Formspree (replace the URL below with your own endpoint)
    const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      alert("Message sent!");
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        message: "",
      });
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row  justify-center gap-6 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-accent mb-8">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              required
              placeholder="First Name"
              className="p-4 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              required
              placeholder="Last Name"
              className="p-4 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="Email"
            className="p-4 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <input
            type="text"
            name="contact"
            value={form.contact}
            onChange={handleChange}
            required
            placeholder="Contact Number"
            className="p-4 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            placeholder="Your Message"
            rows={4}
            className="p-4 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <div className="flex justify-center md:justify-end">
            <button type="submit" className="primary-button">
              Send Message
            </button>
          </div>
        </form>
      </div>
      <div className="w-full max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-accent mb-8">
          Locate us
        </h2>
        <div className="w-full h-72 rounded-lg overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.57902480836!2d79.92457375194181!3d6.847691101511231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2507105492fab%3A0x5adc83492aee3910!2sMaharagama%2C%20Sri%20Lanka!5e1!3m2!1sen!2sau!4v1753846687406!5m2!1sen!2sau"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="text-xl my-5">
          <div className="grid grid-cols-2">
            <span className="font-semibold">Contact Number</span>
            <span>: +94 766 890 580</span>
          </div>
          <div className="grid grid-cols-2">
            <span className="font-semibold">Email Address</span>
            <span>: info@nexus.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
