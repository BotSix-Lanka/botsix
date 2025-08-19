"use client";
import React, { useEffect, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="flex flex-col -mt-10 items-center justify-center bg-gradient-to-b from-white to-blue-50/30 relative overflow-hidden">
      {/* Cursor Following Effect */}
      <div
        className="fixed pointer-events-none z-10 w-96 h-96 rounded-full opacity-20 blur-3xl transition-all duration-700 ease-out"
        style={{
          background:
            "radial-gradient(circle, rgba(39, 67, 147, 0.3) 0%, rgba(30, 58, 138, 0.2) 50%, transparent 70%)",
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Hero Section */}
      <div className="w-full max-w-screen-xl mt-10 flex flex-col lg:flex-row items-center justify-center px-4 mx-auto">
        <div className="font-bold p-8 -ml-20 max-w-screen-xl lg:p-20 flex flex-col justify-center items-start lg:items-start">
          <div className="mb-4">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full border border-blue-200">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
              <span className="text-sm font-medium text-blue-700">
                Available for new projects
              </span>
            </div>
          </div>

          <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-[#274393] bg-clip-text text-transparent leading-tight">
            We Code the Future.
          </h1>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-[#274393] via-blue-700 to-gray-900 bg-clip-text text-transparent leading-tight">
            You Lead it.
          </h1>

          <p className="text-xl font-light mt-6 max-w-3xl lg:max-w-4xl text-gray-600 text-left md:text-center lg:text-left leading-relaxed">
            <span className="font-medium text-gray-800">Botsix</span> is your
            strategic partner, delivering innovative software solutions that
            drive business growth and digital transformation. We blend
            cutting-edge technology with a deep understanding of your industry
            to create tailored solutions that exceed your expectations. Our team
            of expert developers, designers, and strategists work
            collaboratively to turn your vision into reality, ensuring scalable,
            secure, and future-ready applications that give you a competitive
            edge in today's digital landscape.
          </p>

          <div className="flex items-center mt-4 mb-6 text-sm text-gray-500">
            <svg
              className="w-4 h-4 text-green-500 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Trusted by 12+ businesses
          </div>

          <div className="gap-4 flex mt-6 justify-center lg:justify-start flex-wrap">
            <button className="group relative text-md font-semibold px-8 py-4 bg-gradient-to-r from-[#274393] to-[#1e3a8a] border-2 border-transparent text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-200 overflow-hidden cursor-follow">
              <a href="/contact">
                <span className="relative z-10 flex items-center">
                  Get Consultation
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </a>

              <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </button>

            <button className="group text-md font-semibold px-8 py-4 bg-white text-[#274393] border-2 border-[#274393] rounded-lg hover:bg-[#274393] hover:text-white transform hover:scale-105 transition-all duration-200 cursor-follow">
              <a href="#services">
                <span className="flex items-center">
                  Explore Services
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </a>
            </button>
          </div>

          <div className="flex items-center mt-8 text-sm text-gray-500">
            <div className="flex -space-x-2">
              {[1, 8, 5, 12].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-medium cursor-follow"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <span className="ml-3">Join 7+ happy clients</span>
          </div>
        </div>

        <div className="relative flex justify-center items-center mt-10 lg:mt-0 lg:ml-60">
          {/* Background decoration */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-3xl"></div>
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-10 animate-pulse delay-1000"></div>

          <div
            className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-100 cursor-follow transition-all duration-300"
            style={{
              transform: `perspective(1000px) rotateY(${
                (mousePosition.x - window.innerWidth / 2) * 0.01
              }deg) rotateX(${
                (mousePosition.y - window.innerHeight / 2) * -0.01
              }deg)`,
            }}
          >
            <div className="w-[350px] h-[320px] bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-28 h-28 bg-gradient-to-br from-[#274393] to-[#1e3a8a] rounded-2xl mx-auto mb-4 flex items-center justify-center cursor-follow">
                  <svg
                    className="w-12 h-12 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Innovation Meets Excellence
                </h3>
                <p className="text-sm text-gray-600">
                  Transforming ideas into digital reality
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Counter Section */}
      <div className="w-full max-w-screen-xl mb-20 -mt-0 bg-gradient-to-r from-[#274393] via-[#1e3a8a] to-[#274393] rounded-2xl  px-4 py-12 mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-white shadow-2xl cursor-follow">
        <CounterBox
          value={7}
          label="Happy Clients"
          mousePosition={mousePosition}
        />
        <div className="hidden md:block w-px h-16 bg-white/20"></div>
        <CounterBox
          value={12}
          label="Projects Delivered"
          mousePosition={mousePosition}
        />
        <div className="hidden md:block w-px h-16 bg-white/20"></div>
        <CounterBox
          value={2}
          label="Open Source Contributions"
          mousePosition={mousePosition}
        />
        <div className="hidden md:block w-px h-16 bg-white/20"></div>
        <CounterBox
          value={4}
          label="Active Projects"
          mousePosition={mousePosition}
        />
      </div>

      {/* Trusted By Section */}
      {/* <div className="flex flex-col items-center justify-center mt-16 text-gray-500">
        <div className="flex items-center mb-8">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-20"></div>
          <h2 className="mx-6 text-lg font-medium text-gray-600">
            Trusted By Industry Leaders
          </h2>
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-20"></div>
        </div>

        <div className="flex flex-row items-center justify-center w-full max-w-screen-xl gap-12">
          <div className="group cursor-pointer transform hover:scale-110 transition-all duration-300 cursor-follow">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl border border-gray-100 flex items-center justify-center h-24 w-40">
              <div className="w-32 h-16 bg-gradient-to-r from-gray-400 to-gray-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">PAPYRUS</span>
              </div>
            </div>
          </div>

          <div className="group cursor-pointer transform hover:scale-110 transition-all duration-300 cursor-follow">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl border border-gray-100 flex items-center justify-center h-24 w-40">
              <div className="w-32 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">BAISCOPE</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center text-sm text-gray-500">
          <svg
            className="w-4 h-4 text-green-500 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span>Join companies that trust our expertise</span>
        </div>
      </div> */}

      <style jsx>{`
        .cursor-follow {
          cursor: none;
        }

        .cursor-follow::after {
          content: "";
          position: fixed;
          width: 20px;
          height: 20px;
          background: radial-gradient(
            circle,
            rgba(39, 67, 147, 0.8) 0%,
            rgba(39, 67, 147, 0.4) 50%,
            transparent 100%
          );
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
          transition: all 0.1s ease-out;
          left: var(--mouse-x, 0);
          top: var(--mouse-y, 0);
        }
      `}</style>
    </div>
  );
};

const CounterBox = ({ value, label, mousePosition }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // Slower, more professional animation
    const interval = 50;
    const step = Math.ceil(value / (duration / interval));

    const counter = setInterval(() => {
      start += step;
      if (start >= value) {
        start = value;
        clearInterval(counter);
      }
      setCount(start);
    }, interval);

    return () => clearInterval(counter);
  }, [value]);

  return (
    <div className="text-center group cursor-follow">
      <div
        className=" rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
        style={{
          transform: `perspective(1000px) rotateY(${
            (mousePosition.x - window.innerWidth / 2) * 0.005
          }deg) rotateX(${
            (mousePosition.y - window.innerHeight / 2) * -0.005
          }deg)`,
        }}
      >
        <h1 className="font-bold text-4xl mb-2 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
          {count}+
        </h1>
        <h2 className="font-light text-blue-100 text-lg">{label}</h2>
      </div>
    </div>
  );
};

export default Hero;
