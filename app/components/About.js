import React from "react";

const About = () => {
  return (
    <div className="w-full mb-20 max-w-screen-xl mt-10 flex flex-col px-4 mx-auto">
      <div
        data-aos="fade-up"
        className="border-l-5 mb-10 border-[#274393] text-3xl font-bold pl-4 mb-6"
      >
        <h1>Team Work Makes the Dream Work</h1>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-10">
        <section
          data-aos="fade-right"
          className="mb-10 bg-[#274393] p-10 rounded-lg text-white p-10"
        >
          <h2 className="text-2xl font-semibold mb-4">Mission</h2>
          <p className="text-lg ">
            Our mission is to build a collaborative and inclusive environment
            where each team member's unique strengths contribute to creating
            innovative solutions. We aim to empower individuals to reach their
            full potential and drive success through teamwork and shared goals.
          </p>
        </section>

        <section
          data-aos="fade-left"
          className="mb-10 bg-[#274393] p-10 rounded-lg text-white p-10]"
        >
          <h2 className="text-2xl font-semibold mb-4">Vision</h2>
          <p className="text-lg ">
            Our vision is to become leaders in our industry by fostering a
            culture of innovation, integrity, and excellence. We strive to be a
            company that continually grows, embraces new challenges, and makes a
            lasting impact on the world.
          </p>
        </section>
      </div>

      <section data-aos="fade-up" className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Team Members</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* Team Member 1 */}
          <div className="text-center p-4 ">
            <img
              src="/images/CEO.png"
              alt="Team Member"
              className="rounded-full w-[50%] mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Shamal Ekanayaka</h3>
            <p className="text-gray-600">Co-Founder & CEO</p>
          </div>
          {/* Team Member 2 */}
          <div className="text-center p-4 ">
            <img
              src="/images/Lead.png"
              alt="Team Member"
              className="rounded-full w-[50%] mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Themiya Induwara</h3>
            <p className="text-gray-600">Co-Founder & CTO</p>
          </div>

          {/* Add more team members as necessary */}
        </div>
      </section>
    </div>
  );
};

export default About;
