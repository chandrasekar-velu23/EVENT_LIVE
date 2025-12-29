import PageLayout from "../components/layout/PageLayout";

export default function Security() {
  return (
    <PageLayout
      title="Security You Can Trust"
      subtitle="Enterprise-grade security built into every layer."
    >
      <ul className="space-y-2 text-gray-700">
        <li>🔐 End-to-end encryption</li>
        <li>🛡 Secure authentication flows</li>
        <li>💳 Payment-grade security</li>
        <li>📜 Data privacy compliant</li>
      </ul>
    </PageLayout>
  );
}
