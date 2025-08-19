"use client";
import React from "react";

const ClientSays = () => {
  const testimonials = [
    {
      text: "The team delivered beyond our expectations. They truly understood our needs and worked with us every step of the way. Their dedication to excellence is unmatched!",
      name: "Ashan Vimukthi",
      position: "CEO, Papyrus Corp",
      stars: 5,
      date: "July 2025",
      avatar: "AV",
    },
    {
      text: "Fantastic service! The team was professional, efficient, and always available. They made our experience seamless and enjoyable.",
      name: "Hasitha Sandaruwan",
      position: "It Admin",
      stars: 5,
      date: "February 2025",
      avatar: "HS",
    },
    {
      text: "Working with this team has been an absolute pleasure. They are creative, reliable, and passionate about delivering high quality results.",
      name: "Eco Chemicals",
      position: "Checmical Company",
      stars: 5,
      date: "January 2025",
      avatar: "EC",
    },

    {
      text: "Outstanding work quality and exceptional customer service. They went above and beyond to ensure our project was perfect.",
      name: "Lahiru Kodippili",
      position: "Enterpenuer",
      stars: 5,
      date: "March 2025",
      avatar: "LK",
    },
  ];

  const StarRating = ({ stars }) => {
    return (
      <div className="flex items-center space-x-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
              i < stars ? "text-yellow-400" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div
      data-aos="fade-up"
      className="w-full mb-20 max-w-screen-xl mt-10 px-4 mx-auto"
    >
      <div className="border-l-4 border-[#274393] text-3xl font-bold pl-4 mb-8">
        <h1 className="text-gray-800">What Our Clients Say</h1>
        <p className="text-sm font-normal text-gray-600 mt-2">
          Real feedback from our valued customers
        </p>
      </div>

      <div className="relative overflow-hidden bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-xl py-8">
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

        <div className="flex space-x-6 animate-scroll">
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex-shrink-0"
              style={{ minWidth: "380px", maxWidth: "380px" }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#274393] to-[#1e3a8a] rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
                <div className="text-xs text-gray-400 font-medium">
                  {testimonial.date}
                </div>
              </div>

              <StarRating stars={testimonial.stars} />

              <div className="relative">
                <svg
                  className="absolute -top-2 -left-1 w-8 h-8 text-[#274393] opacity-20"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V14c0-1.1-.9-2-2-2h-6c0-2.2 1.8-4 4-4V8zm16 0c-3.3 0-6 2.7-6 6v10c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V14c0-1.1-.9-2-2-2h-6c0-2.2 1.8-4 4-4V8z" />
                </svg>
                <p className="text-gray-700 leading-relaxed italic pl-6">
                  "{testimonial.text}"
                </p>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-xs text-green-600 font-medium">
                    Verified Review
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-8">
        <div className="inline-flex items-center space-x-2 bg-[#274393] text-white px-6 py-3 rounded-full">
          <span className="text-lg font-semibold">4.9</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-4 h-4 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm">Based on 5+ reviews</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
          display: flex;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default ClientSays;
