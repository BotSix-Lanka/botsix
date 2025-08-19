import {
  ExternalLink,
  Github,
  Globe,
  Smartphone,
  ShoppingCart,
  CreditCard,
} from "lucide-react";
import ClientWrapper from "../components/ClientWrapper";
import Header from "../components/Header";
import Footer from "../components/BottomNav";
import { link } from "fs";

const Portfolio = () => {
  const projects = [
    {
      id: 2,
      title: "Papyrus web App",
      description: "Web based app of the mobile applicaiton Papyrus",
      image: "/images/icon.jpg",
      category: "Web Application",
      technologies: ["Next Js", "Express", "MySQL", "Socket.io"],
      icon: <CreditCard className="text-green-500" size={24} />,
      status: "Live",
      type: "Reading Platform",
      link: "https://web.papyruslk.com",
    },
    {
      id: 3,
      title: "Papyrus Mobile App",
      description:
        "Cross-platform mobile application for Papyrus, a digital reading platform for Sri Lankan users.",
      image: "/images/icon.jpg",
      category: "Mobile App",
      technologies: ["React Native", "Firebase", "TypeScript", "Node.js"],
      icon: <Smartphone className="text-purple-500" size={24} />,
      status: "In Release",
      type: "Mobile Application",
    },
    {
      id: 4,
      title: "Cotezco Website",
      description:
        "Professional corporate website with CMS, SEO optimization, and lead generation tools.",
      image: "images/ct.png",
      category: "Website",
      technologies: ["Next.js", "Tailwind CSS", "Sanity CMS", "VPS Hosting"],
      icon: <Globe className="text-blue-600" size={24} />,
      status: "Live",
      type: "Website",
      link: "https://cotezco.com",
    },
  ];

  return (
    <ClientWrapper>
      <Header />
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Our <span className="text-[#274393]">Projects</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Explore our recent work and see how we've helped businesses
                transform their digital presence with innovative solutions.
              </p>
            </div>

            <div data-aos="fade-up" className="grid md:grid-cols-2 gap-8 mb-16">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500  transform will-change-transform"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover  transition-transform duration-700 ease-out will-change-transform"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out flex items-end">
                      <div className="p-4 w-full">
                        <div className="flex space-x-2">
                          <a href={project.link}>
                            <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-white/20 border border-white/30 hover:bg-white hover:text-black rounded-md transition-all duration-300 ease-out transform hover:scale-105">
                              <ExternalLink size={16} className="mr-2" />
                              View Live
                            </button>
                          </a>

                          <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-white/20 border border-white/30 hover:bg-white hover:text-black rounded-md transition-all duration-300 ease-out transform hover:scale-105">
                            <Github size={16} className="mr-2" />
                            Code
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-4 right-4">
                      <span
                        className={`inline-block px-3 py-1 text-xs font-medium rounded-full text-white transition-colors duration-200 ${
                          project.status === "Live"
                            ? "bg-green-500 hover:bg-green-600"
                            : "bg-yellow-500 hover:bg-yellow-600"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      {project.icon}
                      <span className="ml-2 text-sm font-medium text-gray-500">
                        {project.type}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-2 text-gray-900  transition-colors duration-400 ease-out">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="inline-block px-3 py-1 text-xs font-medium text-gray-600 border border-gray-300 rounded-md  transition-all duration-300 ease-out transform hover:scale-105"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-blue-600">
                        {project.category}
                      </span>
                      <button className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800  transition-all duration-300 ease-out transform hover:scale-105">
                        Similar Project?
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <div className=" p-8 rounded-lg  transition-all duration-400 ease-out">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Have a Project in Mind?
                </h3>
                <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                  Whether you need a simple website or a complex business
                  system, we're here to bring your vision to life with
                  cutting-edge technology.
                </p>
                <button className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-[#274293]  rounded-md transition-all duration-300 ease-out transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl">
                  Discuss Your Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </ClientWrapper>
  );
};

export default Portfolio;
