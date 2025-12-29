import PageLayout from "../components/layout/PageLayout";

export default function Features() {
  return (
    <PageLayout
      title="Powerful Features"
      subtitle="Everything you need to host, manage, and scale virtual events."
    >
      <ul className="grid md:grid-cols-2 gap-6 text-gray-700">
        <li>🎥 Live & On-Demand Events</li>
        <li>🔐 Secure Authentication</li>
        <li>💳 Ticketing & Payments</li>
        <li>💬 Engagement Tools</li>
        <li>📊 Advanced Analytics</li>
        <li>🤖 GenAI-Powered Insights</li>
      </ul>
    </PageLayout>
  );
}
