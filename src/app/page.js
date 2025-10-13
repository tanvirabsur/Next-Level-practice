import CertificationSection from "@/components/Certification";
import Footer from "@/components/Footer";
import FrameworksAndTech from "@/components/FrameworksAndTech";
import FrekworkSec from "@/components/FrekworkSec";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import SocialMediaLinks from "@/components/SocailMidiaLink";
import Image from "next/image";

export default function Home() {
  return (
    <>
    {/* <NavBar/> */}
    <Hero/>
    <CertificationSection/>
    <SocialMediaLinks/>
    <Projects/>
    <FrameworksAndTech/>
    <FrekworkSec/>
    <Footer/>
    </>
  );
}
