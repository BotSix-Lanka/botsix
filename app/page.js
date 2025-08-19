import Image from "next/image";
import Header from "./components/Header";
import HeroSection from "./components/Hero";
import ClientWrapper from "./components/ClientWrapper";
import Services from "./components/Services";
import About from "./components/About";
import Footer from "./components/BottomNav";
import ClientSays from "./components/ClientSays";
export default function Home() {
  return (
    <>
      <ClientWrapper>
        <Header />
        <HeroSection />
        <div id="services">
          <Services />
        </div>

        <div id="about">
          <About />
        </div>
        <div id="clientsays">
          <ClientSays />
        </div>

        <Footer />
      </ClientWrapper>
    </>
  );
}
