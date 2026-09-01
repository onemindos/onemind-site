import type { Metadata } from "next";
import Footer from "../components/Footer";
import AboutHero from "../components/about/AboutHero";
import AboutThesis from "../components/about/AboutThesis";
import AboutFounder from "../components/about/AboutFounder";
import AboutValues from "../components/about/AboutValues";
import AboutCTA from "../components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "OneMind OS — the sovereign operations platform built on TAK. Our mission, thesis, and the team behind the fabric.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutThesis />
      <AboutFounder />
      <AboutValues />
      <AboutCTA />
      <Footer />
    </>
  );
}
