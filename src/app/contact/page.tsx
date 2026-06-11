import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Kickstart your project — fill out the form and we'll contact you as soon as possible to discuss how we can bring your digital vision to life.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Kickstart your project">
        <p>
          Fill out the form below and we&apos;ll contact you as soon as
          possible to discuss how we can bring your digital vision to life.
        </p>
      </PageHero>
      <ContactSection showHeading={false} />
    </>
  );
}
