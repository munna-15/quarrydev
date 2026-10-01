import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  return (
    <main className="bg-[#050505] text-white">
      <ContactHero />
      <ContactForm />
      <Footer />
    </main>
  );
}
