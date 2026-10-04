import PageHero from "@/Components/ui/PageHero";

export default function ContactHero() {
  return (
    <PageHero
      images={["/jamestown.png"]}
      eyebrow="Get in touch"
      title={
        <>
          Let’s plan your <span className="text-yellow-400">journey</span>
        </>
      }
      description="We are always available to answer your questions and help you plan your next journey."
    />
  );
}
