import type { Metadata } from "next";
import Footer from "../components/Footer";
import ContactHero from "../components/contact/ContactHero";
import ContactForm from "../components/contact/ContactForm";
import ContactChannels from "../components/contact/ContactChannels";
import ContactEnterprise from "../components/contact/ContactEnterprise";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with OneMind OS — enterprise deployments, training, partnerships, and general inquiries.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <div className="section bg-black">
        <div className="container-wide">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>
            <ContactForm />
            <ContactChannels />
          </div>
        </div>
      </div>
      <ContactEnterprise />
      <Footer />
    </>
  );
}
