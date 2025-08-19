"use client";
import Head from "next/head";
import React, { useState } from "react";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import ClientWrapper from "../components/ClientWrapper";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    service: "general",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const contactInfo = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      title: "Phone",
      info: "+94 (75) 217-1796 ",
      subInfo: "Mon-Fri 9AM-6PM IST",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 7.89a2 2 0 002.82 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Email",
      info: "info.botsix.lk@gmail.com",
      subInfo: "We reply within 24 hours",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: "Address",
      info: "Kurunegala",
      subInfo: "Sri Lanka",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Business Hours",
      info: "Sunday - Friday",
      subInfo: "9:00 AM - 9:00 PM IST",
    },
  ];

  const services = [
    "General Inquiry",
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Digital Marketing",
    "Technical Support",
    "Partnership",
    "Other",
  ];

  const handleSubmit = () => {
    const { name, email, phone, service, subject, message } = formData;
    const mailtoLink = `mailto:info.botsix.lk@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Full Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nMessage: ${message}`
    )}`;
    window.location.href = mailtoLink; // Trigger the email client
  };

  return (
    <>
      <ClientWrapper>
        <Header />
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-[#274393] to-[#1e3a8a] text-white py-16">
            <div
              data-aos="fade-up"
              className="max-w-7xl mx-auto px-4 text-center"
            >
              <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Ready to start your project? We'd love to hear from you. Send us
                a message and we'll respond as soon as possible.
              </p>
              <div className="flex justify-center items-center mt-8 space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm">Available Now</span>
                </div>
                <div className="text-sm text-blue-200">|</div>
                <div className="text-sm text-blue-200">
                  Response within 24 hours
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div data-aos="fade-right" className="lg:col-span-1">
                <div className="sticky top-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">
                    Contact Information
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Choose the best way to reach us. We're here to help and
                    answer any questions you might have.
                  </p>

                  <div className="space-y-6">
                    {contactInfo.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#274393] to-[#1e3a8a] rounded-full flex items-center justify-center text-white">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800">
                            {item.title}
                          </h3>
                          <p className="text-[#274393] font-medium">
                            {item.info}
                          </p>
                          <p className="text-gray-500 text-sm">
                            {item.subInfo}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Social Media */}
                </div>
              </div>

              {/* Contact Form */}
              {/* Contact Form */}
              <div data-aos="fade-left" className="lg:col-span-2">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">
                      Send us a Message
                    </h2>
                    <p className="text-gray-600">
                      Fill out the form below and we'll get back to you within
                      24 hours.
                    </p>
                  </div>

                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg
                          className="w-8 h-8 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-gray-600">
                        Thank you for reaching out. We'll get back to you within
                        24 hours.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#274393] focus:border-transparent transition-colors"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#274393] focus:border-transparent transition-colors"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#274393] focus:border-transparent transition-colors"
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Service Interested In
                          </label>
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#274393] focus:border-transparent transition-colors"
                          >
                            {services.map((service, index) => (
                              <option
                                key={index}
                                value={service.toLowerCase().replace(" ", "-")}
                              >
                                {service}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Subject *
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#274393] focus:border-transparent transition-colors"
                          placeholder="How can we help you?"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#274393] focus:border-transparent transition-colors resize-none"
                          placeholder="Tell us more about your project or inquiry..."
                        />
                      </div>

                      <div className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          id="newsletter"
                          className="w-4 h-4 text-[#274393] border-gray-300 rounded focus:ring-[#274393]"
                        />
                        <label
                          htmlFor="newsletter"
                          className="text-sm text-gray-600"
                        >
                          I'd like to receive updates about your services and
                          company news
                        </label>
                      </div>

                      <button
                        type="button"
                        onClick={handleSubmit}
                        className="w-full bg-gradient-to-r from-[#274393] to-[#1e3a8a] text-white py-4 px-8 rounded-lg font-semibold hover:from-[#1e3a8a] hover:to-[#1e40af] transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl"
                      >
                        Send Message
                        <svg
                          className="inline-block w-5 h-5 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                          />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div data-aos="fade-up" className="mt-16">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-[#274393] to-[#1e3a8a] text-white p-8">
                  <h2 className="text-3xl font-bold mb-2">Visit Our Office</h2>
                  <p className="text-blue-100">
                    We'd love to meet you in person. Drop by our office for a
                    coffee and chat!
                  </p>
                </div>
                <div className="h-96 bg-gray-100 flex items-center justify-center">
                  <div className="text-center">
                    <svg
                      className="w-16 h-16 text-gray-400 mx-auto mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <p className="text-gray-600">Interactive Map Coming Soon</p>
                    <p className="text-sm text-gray-500 mt-2">
                      Will start working on the office soon
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ClientWrapper>

      <BottomNav />
    </>
  );
};

export default ContactUs;
