import React from "react";
import Image from "next/image";

const Services = () => {
  return (
    <div className="w-full max-w-screen-xl mt-10 flex flex-col px-4 mx-auto">
      <div className="border-l-4 border-[#274393] pl-4">
        <h1 className="text-4xl font-bold text-gray-800" data-aos="fade-up">
          Our Services
        </h1>
      </div>

      <div className="flex flex-col gap-20 mt-16">
        {/* Mobile App Development */}
        <div className="flex flex-row gap-20 items-center">
          <Image
            data-aos="fade-left"
            src="/images/mobile.png"
            width={500}
            height={500}
            alt="Mobile App Development Services"
            className="rounded-lg shadow-lg"
          />
          <div className="flex flex-col gap-8">
            <div
              data-aos="fade-right"
              className="flex flex-row gap-6 items-center justify-end"
            >
              <div className="bg-[#274393] w-12 h-12 flex font-bold text-center items-center justify-center text-white rounded-full text-xl shadow-md">
                <span>01</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-800">
                Mobile App Development
              </h2>
            </div>
            <div
              data-aos="fade-right"
              className="flex flex-row gap-6 justify-end"
            >
              <p className="text-end font-light leading-8 text-gray-600 max-w-2xl">
                We specialize in creating innovative mobile solutions that drive
                business growth. Our expertise spans cross-platform development
                using React Native and Flutter for cost-effective, consistent
                experiences across iOS and Android platforms. For
                performance-critical applications, we leverage native
                development with Swift for iOS and Kotlin for Android, ensuring
                optimal performance and seamless integration with
                platform-specific features. Our mobile solutions are designed to
                enhance user engagement and deliver measurable business results.
              </p>
            </div>
          </div>
        </div>

        {/* Web App Development */}
        <div className="flex flex-row gap-20 items-center">
          <div className="flex flex-col gap-8">
            <div
              data-aos="fade-right"
              className="flex flex-row gap-6 items-center justify-start"
            >
              <div className="bg-[#274393] w-12 h-12 flex font-bold text-center items-center justify-center text-white rounded-full text-xl shadow-md">
                <span>02</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-800">
                Web Application Development
              </h2>
            </div>
            <div
              data-aos="fade-right"
              className="flex flex-row gap-6 justify-start"
            >
              <p className="text-start font-light leading-8 text-gray-600 max-w-2xl">
                We deliver cutting-edge web applications that combine
                exceptional user experiences with robust performance. Our
                frontend solutions utilize Next.js for SEO-optimized React
                applications and Tailwind CSS for responsive, modern designs.
                Our backend development leverages Node.js for scalable,
                high-performance applications and Spring Boot for
                enterprise-grade solutions. From concept to deployment, we
                ensure your web applications are secure, scalable, and aligned
                with your business objectives.
              </p>
            </div>
          </div>
          <Image
            data-aos="fade-left"
            src="/images/web.png"
            width={500}
            height={500}
            alt="Web Application Development Services"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Cloud Services */}
        <div className="flex flex-row gap-20 items-center">
          <Image
            data-aos="fade-left"
            src="/images/cloud.png"
            width={500}
            height={500}
            alt="Cloud Services and DevOps Solutions"
            className="rounded-lg shadow-lg"
          />
          <div className="flex flex-col gap-8">
            <div
              data-aos="fade-right"
              className="flex flex-row gap-6 items-center justify-end"
            >
              <div className="bg-[#274393] w-12 h-12 flex font-bold text-center items-center justify-center text-white rounded-full text-xl shadow-md">
                <span>03</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-800">
                Cloud & DevOps Solutions
              </h2>
            </div>
            <div
              data-aos="fade-right"
              className="flex flex-row gap-6 justify-end"
            >
              <p className="text-end font-light leading-8 text-gray-600 max-w-2xl">
                We transform your infrastructure with comprehensive cloud
                solutions across AWS, Azure, and Google Cloud platforms. Our
                DevOps expertise includes automated CI/CD pipelines for reliable
                deployments, Infrastructure as Code (IaC) using Terraform for
                consistent environment management, and containerization with
                Docker and Kubernetes for optimal scalability. We implement
                comprehensive monitoring solutions with Prometheus and
                CloudWatch, ensuring 24/7 visibility and proactive issue
                resolution while maintaining the highest security standards.
              </p>
            </div>
          </div>
        </div>

        {/* Graphics & Design Services */}
        <div className="flex flex-row gap-20 items-center">
          <div className="flex flex-col gap-8">
            <div
              data-aos="fade-right"
              className="flex flex-row gap-6 items-center justify-start"
            >
              <div className="bg-[#274393] w-12 h-12 flex font-bold text-center items-center justify-center text-white rounded-full text-xl shadow-md">
                <span>04</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-800">
                UI/UX Design & Branding
              </h2>
            </div>
            <div
              data-aos="fade-right"
              className="flex flex-row gap-6 justify-start"
            >
              <p className="text-start font-light leading-8 text-gray-600 max-w-2xl">
                We create compelling visual experiences that resonate with your
                target audience and strengthen your brand identity. Our design
                services encompass comprehensive UI/UX design, strategic
                branding solutions, and creative visual assets. We focus on
                user-centered design principles to create intuitive interfaces
                that drive engagement and conversion. From brand identity
                development to complete digital design systems, we ensure
                consistency across all touchpoints while delivering designs that
                not only look exceptional but also perform effectively in
                achieving your business goals.
              </p>
            </div>
          </div>
          <Image
            data-aos="fade-left"
            src="/images/grapgics.png"
            width={500}
            height={500}
            alt="UI/UX Design and Branding Services"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
