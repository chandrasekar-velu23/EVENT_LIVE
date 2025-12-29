import PageLayout from "../components/layout/PageLayout";

export default function UseCases() {
  return (
    <PageLayout
      title="Who Uses EVENTLIVE?"
      subtitle="Built for educators, enterprises, creators, and event organizers."
    >
      <div className="space-y-4 text-gray-700">
        <p>🎓 Educators & Trainers</p>
        <p>🏢 Enterprises & Businesses</p>
        <p>🌍 Communities & Creators</p>
        <p>🎤 Event Organizers</p>
      </div>
    </PageLayout>
  );
}
