"use client";

import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
  Instagram,
  Github,
  WhatsApp,
  ArrowUp,
  Bot,
  Code,
  Smartphone,
  Globe,
  Shield,
  Zap,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rotate-45"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border border-white/20 rotate-12"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border border-white/20 -rotate-45"></div>
        <div className="absolute bottom-40 right-1/3 w-24 h-24 border border-white/20 rotate-30"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6 group">
              <Image
                src={"/images/logo.png"}
                width={150}
                height={150}
                alt="Botsix Logo"
                className="mr-3"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering businesses with cutting-edge AI solutions, intelligent
              automation, and innovative digital experiences that drive growth
              and efficiency.
            </p>
            <div className="flex space-x-4">
              {[
                {
                  icon: Facebook,
                  href: "https://www.facebook.com/share/1AYH2Gbtay/",
                  color: "hover:text-blue-500",
                },
                {
                  icon: Youtube,
                  href: "https://www.youtube.com/channel/UC3-kEYYm_Zp-pQuhYcFmtkw",
                  color: "hover:text-red-400",
                },
                {
                  icon: Linkedin,
                  href: "http://linkedin.com/company/botsix-lanka",
                  color: "hover:text-blue-600",
                },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/botsixlanka?igsh=MTF2M294ZGdkdWdydg==",
                  color: "hover:text-pink-500",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110 hover:-translate-y-1`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">
              Our Services
            </h4>
            <ul className="space-y-3">
              {[
                { name: "AI Development", icon: Bot },
                { name: "Web Applications", icon: Globe },
                { name: "Mobile Apps", icon: Smartphone },
                { name: "Custom Software", icon: Code },
                { name: "Automation", icon: Zap },
              ].map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-400 transition-all duration-300 flex items-center group"
                  >
                    <service.icon
                      size={16}
                      className="mr-2 group-hover:text-blue-500 transition-colors duration-300"
                    />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {service.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                "About Us",
                "Our Portfolio",
                "Case Studies",
                "Blog",
                "Contact",
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">
              Get in Touch
            </h4>
            <div className="space-y-4">
              <div className="flex items-start group">
                <div className="bg-blue-600/20 p-2 rounded-lg mr-3 group-hover:bg-blue-600/30 transition-colors duration-300">
                  <MapPin size={18} className="text-blue-400 mt-0.5" />
                </div>
                <div>
                  <p className="text-gray-300 leading-relaxed">
                    Kurunegala
                    <br />
                    Sri Lanka
                    <br />
                  </p>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="bg-green-600/20 p-2 rounded-lg mr-3 group-hover:bg-green-600/30 transition-colors duration-300">
                  <Phone size={18} className="text-green-400" />
                </div>
                <a
                  href="tel:+94771234567"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                >
                  +94 75 217 1796
                </a>
              </div>

              <div className="flex items-center group">
                <div className="bg-purple-600/20 p-2 rounded-lg mr-3 group-hover:bg-purple-600/30 transition-colors duration-300">
                  <Mail size={18} className="text-purple-400" />
                </div>
                <a
                  href="mailto:hello@botsix.com"
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
                >
                  info.botsix.lk@gmail.com
                </a>
              </div>
            </div>

            {/* Newsletter Signup */}
            {/* <div className="mt-8">
              <h5 className="text-white font-medium mb-3">Stay Updated</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-400 transition-colors duration-300"
                />
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-r-lg transition-colors duration-300 transform hover:scale-105">
                  <Mail size={18} />
                </button>
              </div>
            </div> */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              <p>&copy; {currentYear} BotSix. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a
                href="/tos"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="/tos"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <a href="https://wa.me/94760645788">
        <button
          className="fixed bottom-24 right-8 bg-green-500 hover:bg-gren -700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 z-50"
          aria-label="Scroll to top"
        >
          <FaWhatsapp size={20} />
        </button>
      </a>

      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>

      {/* Animated gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse"></div>
    </footer>
  );
};

export default Footer;
