import PageLayout from "../components/layout/PageLayout";

export default function Resources() {
  return (
    <PageLayout
      title="Resources"
      subtitle="Documentation, guides, and developer tools."
    >
      <ul className="space-y-2 text-gray-700">
        <li>📘 Documentation</li>
        <li>🧩 API Reference</li>
        <li>📖 Guides</li>
        <li>📰 Blog</li>
      </ul>
    </PageLayout>
  );
}
