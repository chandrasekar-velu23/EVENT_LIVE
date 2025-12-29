import SectionTitle from "../ui/SectionTitle";

export default function ProblemSolution() {
  return (
    <section className="py-20 bg-brandBg">
      <SectionTitle title="Why EVENTLIVE Exists" />

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6">
        <div>
          <h3 className="font-bold mb-4">The Problem</h3>
          <ul className="space-y-2 text-gray-700">
            <li> Fragmented tools</li>
            <li> Weak security</li>
            <li> Limited monetization</li>
            <li> Poor analytics</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">The EVENTLIVE Solution</h3>
          <p className="text-gray-700">
            EVENTLIVE unifies hosting, authentication, payments, engagement,
            and analytics into one secure platform — built for modern virtual
            experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
