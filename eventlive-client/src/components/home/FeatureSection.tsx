import SectionTitle from "../ui/SectionTitle";

const features = [
  "Live & On-Demand Events",
  "Secure Authentication",
  "Monetization & Payments",
  "Engagement Tools",
  "Advanced Analytics",
  "GenAI-Powered Insights",
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <SectionTitle
        title="Everything You Need to Run Successful Virtual Events"
      />

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        {features.map((f) => (
          <div
            key={f}
            className="rounded-xl border p-6 text-center text-gray-700"
          >
            {f}
          </div>
        ))}
      </div>
    </section>
  );
}
